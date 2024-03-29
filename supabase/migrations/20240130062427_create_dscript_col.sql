drop view if exists "public"."ProfileStats";

alter table "public"."Events" add column "Description" text default ''::text;

alter table "public"."Profiles" drop column "Email";

alter table "public"."Profiles" alter column "Name" drop not null;

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.handle_new_user()
  RETURNS trigger
  LANGUAGE plpgsql
  SECURITY DEFINER
AS $$
begin
  insert into public."Profiles"("ProfileID", "Name")
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1), 'New User')
  );
  return new;
end;
$$;

-- Fake user generator for the development environment
create or replace function utils.create_user(email text, password text)
returns uuid
language plpgsql
as $$
declare
  user_id uuid := gen_random_uuid();
  encrypted_pw text := crypt(password, gen_salt('bf'));
begin
  insert into auth.users
    (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, recovery_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at, confirmation_token, email_change, email_change_token_new, recovery_token)
  values
    ('00000000-0000-0000-0000-000000000000', user_id, 'authenticated', 'authenticated', email, encrypted_pw, '2023-05-03 19:41:43.585805+00', '2023-04-22 13:10:03.275387+00', '2023-04-22 13:10:31.458239+00', '{"provider":"email","providers":["email"]}', '{}', '2023-05-03 19:41:43.580424+00', '2023-05-03 19:41:43.585948+00', '', '', '', '');
  
  insert into auth.identities (id, provider_id, user_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
  values
    (gen_random_uuid(), gen_random_uuid(), user_id, format('{"sub":"%s","email":"%s"}', user_id::text, email)::jsonb, 'email', '2023-05-03 19:41:43.582456+00', '2023-05-03 19:41:43.582497+00', '2023-05-03 19:41:43.582497+00');

  return user_id;
end;
$$;
create policy "Enable insert for authenticated users only"
on "public"."Events"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all users"
on "public"."Events"
as permissive
for select
to public
using (true);


create policy "Enable insert for authenticated users only"
on "public"."Teams"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all users"
on "public"."Teams"
as permissive
for select
to public
using (true);


create policy "Enable insert for authenticated users only"
on "public"."TeamsProfiles"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all users"
on "public"."TeamsProfiles"
as permissive
for select
to public
using (true);