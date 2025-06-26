<script lang="ts">
  import CtaButton from "./CtaButton.svelte";
</script>

<section id="hero" class="flex justify-center mt-[8rem]">
  <div
    class="grid grid-cols-1 sm:grid-rows-4 sm:grid-cols-2 grid-rows-8 w-2/3 gap-y-8 md:gap-x-8 xl:gap-x-32 2xl:gap-x-64"
  >
    <h1
      class="font-tusker font-bold text-main-secondary text-[36px] xs:text-[42px] sm:text-3xl lg:text-[3rem] xl:text-[3.25rem] 2xl:text-[4rem] text-center sm:text-right sm:col-start-1 row-span-4 sm:row-span-2"
    >
      Big ass text about how great is our company
    </h1>
    <div
      class="sm:col-start-1 sm:row-start-3 flex justify-center sm:justify-end"
    >
      <CtaButton color="secondary" />
    </div>
    <div class="sm:row-start-3 flex justify-center sm:justify-end">
      <h2
        class="inline-block w-3/4 text-main-neutral sm:text-xl lg:text-2xl 2xl:text-[2rem] font-extrabold text-center sm:text-left"
      >
        Some text about what the company is about
      </h2>
    </div>
  </div>
</section>
