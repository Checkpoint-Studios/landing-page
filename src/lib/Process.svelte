<script lang="ts">
  import SectionTitle from "./ui/SectionTitle.svelte";
  import Card from "./ui/Card.svelte";
</script>

<section id="process" class="mx-8 sm:mx-24 xl:mx-50 mt-20 sm:mt-40">
  <SectionTitle orientation="right">Making it happen</SectionTitle>
  <div class="flex justify-center">
    <div class="grid items-end lg:grid-cols-3 lg:gap-2 xl:gap-8 2xl:gap-16 py-8 xl:w-fit">
      <Card title="Discovery" type="text-first">
        <p>
          We start by understanding your needs and goals, ensuring we have a
          clear vision for the project.
        </p>
      </Card>
      <Card title="Design" type="text-first">
        <p>
          Our design team creates wireframes and prototypes to visualize the
          project before development begins.
        </p>
      </Card>
      <Card title="Execution" type="text-first">
        <p>
          We bring the designs to life with our development team, ensuring
          quality and functionality at every step.
        </p>
      </Card>
    </div>
  </div>
</section>
