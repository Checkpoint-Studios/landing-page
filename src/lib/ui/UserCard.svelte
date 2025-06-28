<script lang="ts">
  import placeholder from "../../assets/images/placeholder.png";
  let {
    name= "John Doe",
    img = placeholder,
    role= "CEO of the Death Star",
  }: {
    role: any;
    name: string;
    img?: string;
  } = $props();
</script>

<div class="flex flex-col p-4 gap-8 justify-center items-center">
  <h3 class="text-main-neutral text-center">{name}</h3>
  <img src={img} class="rounded-full w-[160px] 2xl:w-[320px] h-[160px] 2xl:h-[320px]" alt="" />
  <h4 class="text-main-neutral text-center font-delight font-extrabold lg:text-[1.5rem] text-[1.25rem]">{role}</h4>
</div>

