<script lang="ts">
  import CtaButton from "./CtaButton.svelte";
</script>

<section id="hero" class="flex justify-center mt-[8rem]">
  <div class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 w-2/3 gap-y-8 gap-x-64">
    <h1
      class="font-tusker font-bold text-main-secondary text-[4rem] text-right col-start-1"
    >
      Big ass text about how great is our company
    </h1>
    <div class="col-start-1 row-start-2 flex justify-end">
      <CtaButton color="secondary" />
    </div>
    <div class="row-start-2 flex justify-end">
    <h2 class="inline-block w-3/4 text-main-neutral text-[2rem] font-extrabold">
      Some text about what the company is about
    </h2>
    </div>
  </div>
</section>
