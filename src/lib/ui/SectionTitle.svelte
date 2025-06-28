<script lang="ts">
  let { children, orientation = "left" } = $props();

  let textAlignment = $derived(
    orientation === "left" ? "text-center sm:text-left" : "text-center sm:text-right",
  );

  let alignmentClass = $derived(
    orientation === "left" ? "justify-center justify-start" : "justify-center sm:justify-end",
  );
</script>

<div class="flex w-full {alignmentClass}">
  <h1 class="w-120 {textAlignment}">{@render children()}</h1>
</div>
