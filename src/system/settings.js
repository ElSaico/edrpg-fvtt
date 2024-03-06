import { TJSGameSettings } from "#runtime/svelte/store/fvtt/settings";

export const settings = new TJSGameSettings("edrpg");

/**
 *
 */
export default function registerSystemSettings() {
   settings.registerAll([
      {
         namespace: "edrpg",
         key: "systemMaxBackgrounds",
         options: {
            name: "SETTINGS.systemMaxBackgrounds.name",
            hint: "SETTINGS.systemMaxBackgrounds.hint",
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
            name: "SETTINGS.defaultDifficultyNumber.name",
            hint: "SETTINGS.defaultDifficultyNumber.hint",
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
            name: "SETTINGS.allowToRerollAllTests.name",
            hint: "SETTINGS.allowToRerollAllTests.hint",
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
            name: "SETTINGS.socialFactorCap.name",
            hint: "SETTINGS.socialFactorCap.hint",
            scope: "world",
            config: true,
            default: 4,
            type: Number,
         },
      },
   ]);
}
