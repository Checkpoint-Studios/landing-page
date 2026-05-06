<script lang="ts">
  import { CircleArrowRight } from "@lucide/svelte";

  let {
    href,
    target = "_self",
    color = "primary",
    size = "normal",
    label = "¡Conectar!",
    onclick,
  }: {
    href?: string;
    target?: string;
    color?: "primary" | "secondary";
    size?: "normal" | "large";
    label?: string;
    onclick?: (e: MouseEvent) => void;
  } = $props();

  let textColor = $derived(
    color === "primary"
      ? "text-main-primary hover:text-primary-600"
      : "text-main-secondary hover:text-secondary-600",
  );
  let borderColor = $derived(
    color === "primary"
      ? "border-main-primary hover:border-primary-600"
      : "border-main-secondary hover:border-secondary-600",
  );
  let heightClass = $derived(size === "large" ? "h-16" : "h-12");
  let fontClass = $derived(size === "large" ? "text-2xl" : "text-xl");
  let paddingClass = $derived(size === "large" ? "px-8" : "px-5");
  let iconSize = $derived(size === "large" ? "1.875rem" : "1.625rem");

  let _class = $derived(
    `flex items-center gap-3 ${paddingClass} py-2 rounded-full border-4 font-tusker font-semibold ${fontClass} ${textColor} ${borderColor} ${heightClass} transition-all duration-300 cursor-pointer bg-transparent`,
  );
</script>

{#if href}
  <a {href} class={_class} {target} aria-label={label}>
    <span class="mt-1">{label}</span>
    <CircleArrowRight size={iconSize} color="currentColor" />
  </a>
{:else}
  <button type="button" class={_class} {onclick}>
    <span class="mt-1">{label}</span>
    <CircleArrowRight size={iconSize} color="currentColor" />
  </button>
{/if}
