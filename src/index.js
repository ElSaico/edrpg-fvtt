import registerSystemSettings from "./system/settings.js";
import EDActorSheet from "./sheets/actor.js";
import EDActor from "./actor.js";
import "./index.css";

Hooks.once("init", async () => {
   registerSystemSettings();

   CONFIG.Actor.documentClass = EDActor;
   /*
   CONFIG.Actor.dataModels.character = CharacterData;
   CONFIG.Actor.dataModels.npcIndividual = NPCIndividualData;

   CONFIG.Item.documentClass = EDItem;
   CONFIG.Item.dataModels.karma = KarmaCapabilityData;
   CONFIG.Item.dataModels.background = BackgroundData;
   CONFIG.Item.dataModels.enhancement = EDItemData;
   */

   Actors.unregisterSheet("core", ActorSheet);
   Actors.registerSheet("edrpg", EDActorSheet, {
      types: ["character"],
      makeDefault: true,
   });
   /*
   Actors.registerSheet("edrpg", EDActorSheetNPCIndividual, {
      types: ["npcIndividual"],
      makeDefault: true,
   });

   Items.unregisterSheet("core", ItemSheet);
   Items.registerSheet("edrpg", EDItemSheet, {
      types: ["enhancement"],
      makeDefault: true,
   });
   Items.registerSheet("edrpg", EDItemSheetBackground, {
      types: ["background"],
      makeDefault: true,
   });
   Items.registerSheet("edrpg", EDItemSheetKarma, {
      types: ["karma"],
      makeDefault: true,
   });
   */
});
