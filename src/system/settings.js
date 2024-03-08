/**
 * A list of settings to register for the EDRPG system.
 *
 * "Wouldn't a JSON file make more sense?"
 * Well, options.type must be (or return) a JavaScript type object, so that's a "nope"
 *
 * @type {import("#runtime/svelte/store/fvtt/settings").GameSetting[]}
 */
export default [
   {
      namespace: "edrpg",
      key: "systemMaxBackgrounds",
      options: {
         name: "EDRPG.settings.systemMaxBackgrounds.name",
         hint: "EDRPG.settings.systemMaxBackgrounds.hint",
         scope: "world",
         config: true,
         default: 4,
         type: Number,
      },
   },
   {
      namespace: "edrpg",
      key: "defaultDifficultyNumber",
      options: {
         name: "EDRPG.settings.defaultDifficultyNumber.name",
         hint: "EDRPG.settings.defaultDifficultyNumber.hint",
         scope: "world",
         config: true,
         default: 9,
         type: Number,
      },
   },
   {
      namespace: "edrpg",
      key: "allowToRerollAllTests",
      options: {
         name: "EDRPG.settings.allowToRerollAllTests.name",
         hint: "EDRPG.settings.allowToRerollAllTests.hint",
         scope: "world",
         config: true,
         default: false,
         type: Boolean,
      },
   },
   {
      namespace: "edrpg",
      key: "socialFactorCap",
      options: {
         name: "EDRPG.settings.socialFactorCap.name",
         hint: "EDRPG.settings.socialFactorCap.hint",
         scope: "world",
         config: true,
         default: 4,
         type: Number,
      },
   },
];
