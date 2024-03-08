import { safeAccess } from "#runtime/util/object";

/**
 *
 * @param {HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement} element
 *
 * @param options
 *
 * @param {import('#runtime/svelte/store/fvtt/document').TJSDocument} options.document
 *
 * @param {string} options.path
 *
 * @returns {import('svelte/action').ActionReturn}
 */
export function bindDocument(element, { document, path }) {
   const key = element.type === "checkbox" ? "checked" : "value";
   let value;

   const unsubscribe = document.subscribe((doc) => {
      const newValue = safeAccess(doc, path);
      if (value !== newValue && newValue !== "") {
         value = newValue;
         element[key] = value;
      }
   });

   /**
    *
    * @param {Event} event
    */
   function onChange(event) {
      let newValue = event.target[key];
      if (element.type === "number") {
         newValue = Number(newValue);
      }
      document.get().update({ [path]: newValue });
   }

   element.addEventListener("change", onChange);
   return {
      destroy: () => {
         element.removeEventListener("change", onChange);
         unsubscribe();
      },
   };
}
