-- this file was manually created
INSERT INTO public.users (display_name, email, handle, cognito_user_id)
VALUES
  ('Andrew Brown', 'andrew@exampro.co', 'andrewbrown' ,'MOCK'),
  ('Andrew Bayko', 'bayko@exampro.co', 'bayko' ,'MOCK'),
  ('Nathan Wright', 'nqwright9311@gmail.com', 'nqwright9311' ,'db6d4536-174f-4ed2-9be1-f6b072d0effc');

INSERT INTO public.activities (user_uuid, message, expires_at)
VALUES
  (
    (SELECT uuid from public.users WHERE users.handle = 'nqwright9311' LIMIT 1),
    'This was imported as seed data!',
    current_timestamp + interval '10 day'
  )