<script lang="ts">
  let { opacity = 0.18 }: { opacity?: number } = $props();
  const runes = [
    { top: "20px", left: "20px", symbol: "◆" },
    { top: "20px", right: "20px", symbol: "◈" },
    { bottom: "20px", left: "20px", symbol: "★" },
    { bottom: "20px", right: "20px", symbol: "✦" },
  ];
</script>

{#each runes as r}
  <span style="position:absolute;top:{r.top ?? 'auto'};left:{r.left ?? 'auto'};bottom:{r.bottom ?? 'auto'};right:{r.right ?? 'auto'};font-family:monospace;font-size:18px;color:var(--color-main-secondary);opacity:{opacity};pointer-events:none;user-select:none;line-height:1;z-index:0;">{r.symbol}</span>
{/each}
