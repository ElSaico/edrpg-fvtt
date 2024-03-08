<script>
   import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
   import { bindDocument } from "../utils.js";

   export let document;
</script>

<label class="block bg-gradient-to-r from-table-name to-white">
   <div
      class="bg-gradient-to-r from-section-begin to-section-end text-white text-sm text-bold uppercase font-expanded pl-2 p-1
             [clip-path:polygon(0_0,calc(100%_-_20px)_0,100%_100%,0_100%)]"
   >
      {localize("EDRPG.sheet.rank")}
   </div>
   <div class="px-1 py-2 text-center">{localize($document.system.rank.name)}</div>
   <div class="px-1.5 pb-2 text-secondary uppercase font-condensed">{localize("EDRPG.sheet.rankPoints")}</div>
   <input
      type="number"
      class="bg-transparent border-border px-1 py-2.5 h-auto text-2xl text-center"
      use:bindDocument={{ document, path: "system.rankPoints" }}
      min="0"
      step="1"
   />
</label>
