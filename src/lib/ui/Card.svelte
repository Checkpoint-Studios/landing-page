<script lang="ts">
  import placeholder from "../../assets/images/placeholder.png";
  let {
    children,
    title = "Card Title",
    img = placeholder,
    type = "text-first",
  }: {
    children?: any;
    title?: string;
    img?: string;
    type: "image-first" | "text-first" | "text-only";
  } = $props();

  let imageOrder = $derived(type === "image-first" ? "order-1" : "order-2");

  let textOrder = $derived(type === "image-first" ? "order-2" : "order-1");
</script>

<div class="grid grid-cols-1 2xl:w-118 p-4 gap-8 max-w-118">
  <h3 class="text-main-neutral">{title}</h3>
  {#if type !== "text-only"}
    <img src={img} class="object-contain w-max {imageOrder}" alt="" />
  {/if}
  <div class={textOrder}>{@render children()}</div>
</div>
