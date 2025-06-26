<script lang="ts">
  import SectionTitle from "./ui/SectionTitle.svelte";
  import Card from "./ui/Card.svelte";
</script>

<section id="services" class="mx-8 sm:mx-24 xl:mx-50 mt-30">
  <SectionTitle>What we can help you with</SectionTitle>
  <div class="flex justify-center">
    <div class="grid sm:grid-cols-2 gap-8 xl:gap-16 py-8 w-fit">
      <Card title="Web Development" type="text-first">
        <p>
          We create websites that are not only visually appealing but also
          functional and user-friendly.
        </p>
      </Card>
      <Card title="Mobile Development" type="text-first">
        <p>
          Our mobile applications are designed to provide a seamless user
          experience across all devices.
        </p>
      </Card>
      <Card title="UI/UX Design" type="text-first">
        <p>
          We focus on creating intuitive and engaging user interfaces that
          enhance the overall user experience.
        </p>
      </Card>
      <Card title="Digital Marketing" type="text-first">
        <p>
          Our digital marketing strategies are tailored to help you reach your
          target audience effectively.
        </p>
      </Card>
    </div>
  </div>
</section>
