<script lang="ts">
  import { goto } from '$app/navigation';
  import Layout from '../banner-layout.svelte'
  export let data;
  let { supabase } = data;
  $: ({ supabase } = data);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    goto('/');
  }
</script>

<svelte:head>
  <title>Events | DamFit</title>
</svelte:head>

<Layout>

  <p class="flex justify-center">This is the events page</p>
  <button class="rounded border bg-orange-300 flex flex-col justify-center max-w-md mx-auto" on:click={() => handleSignOut()}>Logout</button>
  
</Layout>