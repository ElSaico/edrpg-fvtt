<script>
   import { localize } from "#runtime/svelte/helper";
   import { bindDocument } from "../utils.js";

   export let document;
</script>

<label class="flex flex-col">
   <input
      type="text"
      class="bg-gradient-to-r from-table-name to-white border-border p-1.5 h-auto text-2xl"
      use:bindDocument={{ document, path: "name" }}
   />
   <div class="flex flex-row gap-0">
      <span
         class="bg-black px-6 py-1 text-white text-xs font-bold uppercase font-expanded
               [clip-path:polygon(0_0,101%_0,100%_4px,calc(100%_-_24px)_100%,24px_100%)]"
      >
         {localize("EDRPG.sheet.name")}
      </span>
      <div
         class="bg-gradient-to-r from-section-begin to-section-end h-1 flex-auto
               [clip-path:polygon(-1px_0,100%_0,calc(100%_-_4px)_100%,0_100%)]"
      ></div>
   </div>
</label>
