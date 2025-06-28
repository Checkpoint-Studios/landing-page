<script lang="ts">
  import { CircleArrowRight } from "@lucide/svelte"; 
  let {
    color = "primary",
    height = "sm",
  }: {
    href?: string;
    target?: string;
    height?: "sm" | "md";
    color?: "primary" | "secondary";
  } = $props();

  let textColor = $derived(
    color === "primary" ? "text-main-primary hover:text-primary-600" : "text-main-secondary hover:text-secondary-600",
  );
  let borderColor = $derived(
    color === "primary" ? "border-main-primary hover:border-primary-600" : "border-main-secondary hover:border-secondary-600",
  );
  let heightClass = $derived(
    height === "sm" ? "h-12" : "h-16",
  );

  let _class = $derived(
    `flex items-center justify-between w-61 px-5 py-3 rounded-full border-4 font-tusker font-semibold text-[1.5rem] ${textColor} ${borderColor} ${heightClass} transition-all duration-300`,
  );
</script>

<button type="submit" class={_class}> 
  <p class="mt-1">¡Conectar!</p>
  <CircleArrowRight size="2rem" color="currentColor" />
</button>
