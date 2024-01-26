<script lang="ts">
  import { getGroupedIcons } from "$ts/images";
  import { ICON_GROUP_CAPTIONS } from "$ts/stores/images";
  import { onMount } from "svelte";
  import "./css/main.css";

  let groups: { [key: string]: { [key: string]: string } };

  onMount(() => {
    groups = getGroupedIcons();
  });
</script>

{#if groups}
  {#each Object.entries(groups) as [id, items]}
    <div class="group group-{id}">
      <h2 class="header">{ICON_GROUP_CAPTIONS[id] || id}</h2>
      <div class="icons">
        {#each Object.entries(items) as [icon, url]}
          <img src={url} title={icon} alt={icon} class="icon" />
        {/each}
      </div>
    </div>
  {/each}
{/if}
