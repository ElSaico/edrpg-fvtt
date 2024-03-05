import { SvelteApplication } from "@typhonjs-fvtt/runtime/svelte/application";
import BaseSheetTemplate from "../templates/sheets/BaseSheetTemplate.svelte";

export default class EDSheet extends SvelteApplication {
   object;
   #component;

   constructor(object, options, component = false) {
      super(options);
      this.object = object;
      this.#component = component;
   }

   static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
         title: "ED.title",
         width: 600,
         height: 400,

         svelte: {
            class: BaseSheetTemplate,
            target: document.body,
            props: function() {
               return {
                  sheet: this,
                  component: this.#component,
               };
            },
         },
      });
   }
}