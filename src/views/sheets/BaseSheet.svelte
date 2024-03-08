<svelte:options accessors={true} />

<script>
   import { ApplicationShell } from "#runtime/svelte/component/core";

   export let document;
   export let component = null;
   export let elementRoot;
</script>

<ApplicationShell bind:elementRoot>
   <svelte:component this={component} bind:document />
</ApplicationShell>
