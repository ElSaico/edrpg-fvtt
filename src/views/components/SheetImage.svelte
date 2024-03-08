<script>
   import { localize } from "#runtime/svelte/helper";

   export let document;
</script>

<img
   alt={localize("EDRPG.sheet.image")}
   src={$document.img}
   title={$document.name}
   class="bg-gradient-to-r from-table-name to-white"
/>
