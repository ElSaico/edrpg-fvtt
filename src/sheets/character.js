import CharacterSheetView from "../views/sheets/CharacterSheet.svelte";
import EDSheet from "./base.js";

export default class EDSheetCharacter extends EDSheet {
   constructor(object, options) {
      super(object, options, CharacterSheetView);
   }

   static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
         width: 1000,
         height: 600,
      });
   }
}
