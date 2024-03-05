/**
 *
 */
export default function registerSystemSettings() {
   game.settings.register("edrpg", "systemMaxBackgrounds", {
      name: "SETTINGS.systemMaxBackgrounds.name",
      hint: "SETTINGS.systemMaxBackgrounds.hint",
      scope: "world",
      config: true,
      default: 4,
      type: Number,
   });
   game.settings.register("edrpg", "defaultDifficultyNumber", {
      name: "SETTINGS.defaultDifficultyNumber.name",
      hint: "SETTINGS.defaultDifficultyNumber.hint",
      scope: "world",
      config: true,
      default: 9,
      type: Number,
   });
   game.settings.register("edrpg", "allowToRerollAllTests", {
      name: "SETTINGS.allowToRerollAllTests.name",
      hint: "SETTINGS.allowToRerollAllTests.hint",
      scope: "world",
      config: true,
      default: false,
      type: Boolean,
   });
   game.settings.register("edrpg", "socialFactorCap", {
      name: "SETTINGS.socialFactorCap.name",
      hint: "SETTINGS.socialFactorCap.hint",
      scope: "world",
      config: true,
      default: 4,
      type: Number,
   });
} 