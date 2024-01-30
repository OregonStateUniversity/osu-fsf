import {fail, redirect } from '@sveltejs/kit'

export const load = async ({locals: {supabase, getSession }}: {locals: {supabase: any; getSession: () => Promise<any> }}) => {
    const session = await getSession()

    if(!session) {
        throw redirect(303, '/events')
    }

    const { data: event } = await supabase
     .from('event')
     .select(`event_name, event_type, event_start_date, event_end_date, event_description, event_banner`)
     .eq('id', session.user.id)
     .single()

    return { session, event }
}

export const actions = {
    createEvent: async event => {
      // Get current session information from SvelteKit hooks.
      const { request, locals: { supabase, getSession } } = event;
      const session = await getSession();

      // Extract form data from the client's request.
      const formData = await request.formData();

      // Event specific information.
      const eventName = formData.get('eventName') as string;
      // NOTE: Event type has a special type and cannot be a generic string.
      const eventType = formData.get('eventType') as 'Steps' | 'Distance';
      const startDate = formData.get('startDate') as string;
      const endDate = formData.get('endDate') as string;
      const eventDescription = formData.get('eventDescription') as string;
      // Event banner image, it should be a base64 encoded string.
      const eventBanner = formData.get('eventBanner') as File;

      console.log(eventBanner);

      // Current user session ID.
      const userID = session?.user.id;

      console.log(userID);

      // If no user session ID, error out, they have no business creating an event.
      // Honestly this should never happen unless someone is attempting to
      // exploit the API.
      if (!userID) {
        return fail(500, {
          errorMessage: 'Invalid user session.',
          eventName,
          eventType,
          startDate,
          endDate,
          eventDescription,
        });
      }
  
      const { error: createEventError, data: createEventData } = await supabase
        // Table names must match case according to schema.
        .from('Events')
        .upsert({
          // Column names must match case acccording to schema.
          Name: eventName,
          Type: eventType,
          StartsAt: startDate,
          EndsAt: endDate,
          CreatedByUserID: userID,
          Description: eventDescription
        })
        // Select the data we just created so we can use it for the banner.
        .select()
        // We only expect to get one result, this prevents a single item
        // array being return to us. Instead, we get a single object (in data var above).
        .single();
  
      // Error handle.
      if (createEventError) {
        console.log(createEventError);
        return fail(500, {
          errorMessage: createEventError.message,
          eventName,
          eventType,
          startDate,
          endDate,
          eventDescription,
        });
      }

      console.log(createEventData);

      // The EventBanners bucket already exists, it only allows image/* MIME type,
      // and has a file upload size limit of 5MB (configurable from dashboard).
      const { error: uploadBannerError } = await supabase
        .storage
        .from('EventAssets')
        .upload(
          // To keep it simple, the filename will be the event ID.
          // So, on the mobile app we simply query for 'EventBanners/{EventID}'
          // to retrieve that event's banner image!
          `Banners/${createEventData.EventID}`,
          // The actual image data to upload:
          eventBanner,
          {
            // Specify the content type for the upload.
            contentType: eventBanner.type
          }
        );

      // Error handle.
      if (uploadBannerError) {
        return fail(500, {
          errorMessage: uploadBannerError.message,
          eventName,
          eventType,
          startDate,
          endDate,
          eventDescription,
        });
      }

      console.log(uploadBannerError);
  
      // Done.
      return {
        errorMessage: null,
        eventName,
        eventType,
        startDate,
        endDate,
        eventDescription,
      };
    },
  };
