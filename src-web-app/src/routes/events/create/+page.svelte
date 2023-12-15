<script>
    import Layout from "../../banner-layout.svelte"
    import {fly, fade } from 'svelte/transition';

    //variables to store the form input
    let eventName = '';
    let eventType = '';
    let startDate = '';
    let endDate = '';
    let description = '';
  
    let hasError = false;
	  let isSuccessVisible = false;
	  let submitted = false;
	
	  const errMessage = "All the fields are mandatory";		
	
	  function handleSubmit() {
		  isSuccessVisible = true;

		setTimeout(function(){
			  isSuccessVisible = false;
		  }, 4000);
	  }
    
    /*
    function handleSubmit() {
      // Handle form submission logic here
      console.log('Event Name:', eventName);
      console.log('Event Type:', eventType);
      console.log('Start Date:', startDate);
      console.log('End Date:', endDate);
      console.log('Description:', description);
    }
    */

  </script>
  
 
  {#if hasError == true}
		<p class="error-alert">{errMessage}</p>
  {:else}
	  {#if isSuccessVisible}	
		  <p class="error-alert" transition:fade={{duration:150}}>Data updated successfully</p>
	  {/if}
  {/if}

  
  <Layout>
    <div class="p-7">

        <form on:submit|preventDefault={handleSubmit} class="flex-1 ml-[16%]">
      
          <div class="flex flex-wrap -mx-3 mb-6">
      
            <!--Header-->
            <h2 class="px-6 pt-5 text-4xl font-bold font-sans dark:text-black">Create Event</h2>
            <p class="px-6 py-2 my-4 text-lg text-gray-500">Create your event here. You will be able to invite participants, create teams, configure achievements, publish the event, and edit details on the event  page.</p>
      

            <!--Container for Event Name-->
            <div class=" md:w-1/4 px-5 mb-6 md:mb-0">
      
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Event Name
              </label>
              <input required bind:value={eventName} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Event Name">

            </div>
      
            <!--Container for Event Type Dropdown-->
            <div class=" md:w-2/3 px-5 mb-6 md:mb-0">

              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                Type
              </label>

              <div class="relative">
                <select required bind:value={eventType} class="block appearance-none w-1/4 bg-gray-200 border border-black-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option>Walk</option>
                  <option>Run</option>
                  <option>Farting</option>
                </select>

              </div>
            </div>
      

            <!--Container for Start Date Input-->
            <div class=" md:w-1/4 px-5 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Start Date
              </label>
              <input required bind:value={startDate} class="appearance-none block w-1/2 bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="MM/DD/YYYY">
            </div>
      
            <!--Container for End Date Input-->
            <div class=" md:w-1/4 px-5 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                End Date
              </label>
              <input required bind:value={endDate} class="appearance-none block w-1/2 bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-6 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="MM/DD/YYYY">
            </div>
            
            <!--Container for Event Description Input-->
            <div class=" md:w-3/4 px-5 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Event Details
              </label>
              <textarea required bind:value={description} id="message" rows="4" class="block p-2.5 w-1/2 text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 light:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write details about the event here!"></textarea>
            </div>
      
          </div>
      
        <div class='form-submit px-2'>
          <button on:click={() => submitted = true} class="bg-[#D73F09] hover:bg-orange-700 text-white font-bold py-2 p-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Create
          </button>
        </div>
      
        </form>
      </div>
  </Layout>
  