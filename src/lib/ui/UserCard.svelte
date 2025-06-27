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
  <h5 class="text-main-neutral text-center">{role}</h5>
</div>

