import { SvelteApplication } from "#runtime/svelte/application";
import { TJSDocument } from "#runtime/svelte/store/fvtt/document";
import BaseSheetView from "../views/sheets/BaseSheet.svelte";

export default class EDSheet extends SvelteApplication {
   #document;
   #component;

   constructor(object, options, component = false) {
      super(options);
      this.#document = new TJSDocument(object, {
         delete: this.close.bind(this),
      });
      this.#component = component;
   }

   static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
         width: 600,
         height: 400,
         classes: ["edrpg-sheet"],

         svelte: {
            class: BaseSheetView,
            target: document.body,
            props: function () {
               return {
                  document: this.#document,
                  component: this.#component,
               };
            },
         },
      });
   }
}
