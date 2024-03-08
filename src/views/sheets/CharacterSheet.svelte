<svelte:options accessors={true} />

<script>
   import { localize } from "#runtime/svelte/helper";

   import SheetImage from "../components/SheetImage.svelte";
   import NameField from "../components/NameField.svelte";
   import CharacterDetailField from "../components/CharacterDetailField.svelte";
   import RankField from "../components/RankField.svelte";
   import HeaderBlockField from "../components/HeaderBlockField.svelte";

   /** @type {import('#runtime/svelte/store/fvtt/document').TJSDocument} */
   export let document;
</script>

<main class="bg-white">
   <header class="grid grid-cols-6 gap-4">
      <div class="row-span-2 w-32">
         <SheetImage {document} />
      </div>
      <div class="col-span-4">
         <NameField {document} />
      </div>
      <div class="row-span-2">
         <RankField {document} />
      </div>
      <CharacterDetailField {document} field="gender" />
      <CharacterDetailField {document} field="age" />
      <CharacterDetailField {document} field="height" />
      <CharacterDetailField {document} field="weight" />
      <HeaderBlockField
         {document}
         field="dodge"
         readonly
         direction="left"
         titleColor={{ start: "section-begin", end: "section-end" }}
         contentColor={{ start: "table-name", end: "white" }}
      />
      <HeaderBlockField
         {document}
         field="initiative"
         readonly
         direction="center"
         titleColor={{ start: "section-begin", end: "section-end" }}
         contentColor={{ start: "table-name", end: "white" }}
      />
      <HeaderBlockField
         {document}
         field="parry"
         readonly
         direction="right"
         titleColor={{ start: "section-end", end: "section-begin" }}
         contentColor={{ start: "table-name", end: "white" }}
      />
      <HeaderBlockField
         {document}
         field="karma.standard"
         max={$document.system.rank.karmaPoints}
         direction="left"
         borderColor="karma-table"
         titleColor={{ start: "karma-begin", end: "karma-end" }}
         contentColor={{ start: "karma-notes", end: "white" }}
      />
      <HeaderBlockField
         {document}
         field="karma.cyber"
         max={$document.system.rank.karmaPoints}
         direction="center"
         borderColor="karma-table"
         titleColor={{ start: "karma-begin", end: "karma-end" }}
         contentColor={{ start: "karma-notes", end: "white" }}
      />
      <HeaderBlockField
         {document}
         field="endurance"
         max={$document.system.rank.endurance}
         direction="right"
         titleColor={{ start: "endurance-begin", end: "endurance-end" }}
         contentColor={{ start: "endurance-notes", end: "white" }}
      />
   </header>
</main>
