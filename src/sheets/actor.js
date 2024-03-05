import ActorSheetTemplate from "../templates/sheets/ActorSheetTemplate.svelte";
import EDSheet from "./base.js";

export default class EDActorSheet extends EDSheet {
   constructor(object, options) {
      super(object, options, ActorSheetTemplate);
   }
}