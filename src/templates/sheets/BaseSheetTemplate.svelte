<script>
   import { ApplicationShell } from '#runtime/svelte/component/core';

   export let sheet;
   export let component = false;
   export let elementRoot;

   const update = (event) => {
      let attributeValue = event.srcElement.value;
      let attributeName = event.srcElement.name;
      let docData = { _id: sheet.actor._id };
      if(event.srcElement.type === 'checkbox') attributeValue = event.srcElement.checked;
      docData[attributeName] = attributeValue;
      sheet.actor.update(docData);
   };
</script>

<svelte:options accessors={true}/>

<ApplicationShell bind:elementRoot>
   <svelte:component this={component} bind:sheet={sheet} update={update}/>
</ApplicationShell>