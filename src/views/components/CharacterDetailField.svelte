<script>
   import { localize } from "#runtime/svelte/helper";
   import { bindDocument } from "../utils.js";

   export let document;
   export let field;
</script>

<label
   class="bg-gradient-to-r from-table-name to-white h-16
   [clip-path:polygon(20px_0,100%_0,calc(100%_-_20px)_100%,0_100%)]"
>
   <input
      type="text"
      class="bg-transparent border-border px-1 py-2.5 mt-1 ml-7 w-[calc(100%_-_50px)] text-center"
      use:bindDocument={{ document, path: `system.${field}` }}
   />
   <div class="pl-3 pr-1.5 py-2 text-secondary uppercase font-condensed">
      {localize(`EDRPG.sheet.${field}`)}
   </div>
</label>
