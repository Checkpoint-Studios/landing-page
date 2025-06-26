<script lang="ts">
  let { children, orientation = "left" } = $props();

  let textAlignment = $derived(
    orientation === "left" ? "text-left" : "text-right",
  );

  let alignmentClass = $derived(
    orientation === "left" ? "justify-start" : "justify-end",
  );
</script>

<div class="flex w-full {alignmentClass}">
  <h1 class="w-111 {textAlignment}">{@render children()}</h1>
</div>
