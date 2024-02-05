import type { VerifyOtpParams } from '@supabase/supabase-js';
import { redirect } from '@sveltejs/kit'

export const GET = async (event) => {
  const { url, locals: { supabase } } = event;

  const token_hash = url.searchParams.get('token_hash') as string;
	const type = url.searchParams.get('type') as string;
	const next = url.searchParams.get('next') ?? '/';

  if (token_hash && type) {
    const { error } = await supabase.auth.verifyOtp({ token_hash, type } as VerifyOtpParams);
    if (!error) {
      throw redirect(303, `/${next.slice(1)}`);
    }
  }

  // redirect user to password reset page (after receiving email)
  // if (token_hash) {
  //   const { data, error } = await supabase.auth.resetPasswordForEmail('', {
  //     redirectTo: `localhost:5137/auth/resetPassword`
  //   });
  //   if (!error) {
  //     throw redirect(303, `/${next.slice(1)}`);
  //   }
  // }

  // // update user's password
  // if (token_hash) {
  //   const { error } = await supabase.auth.updateUser({ password: new_password});
  //   if (!error) {
  //     throw redirect(303, `/${next.slice(1)}`);
  //   }
  // }

  // return the user to an error page with some instructions
  throw redirect(303, '/auth/auth-code-error');
}