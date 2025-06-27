<script lang="ts">
  import SectionTitle from "./ui/SectionTitle.svelte";
  import Card from "./ui/Card.svelte";
  import UserCard from "./ui/UserCard.svelte";
</script>

<section id="about" class="mx-8 sm:mx-24 xl:mx-50 mt-20 sm:mt-40">
  <SectionTitle orientation="right">About Us</SectionTitle>
  <div class="flex justify-center">
    <div class="grid lg:grid-cols-3 lg:gap-2 xl:gap-8 2xl:gap-16 py-8 xl:w-fit">
      <Card title="The Core" type="text-only">
        <p>
          We are a team of passionate individuals dedicated to delivering
          high-quality digital solutions that meet the needs of our clients.
        </p>
      </Card>
      <Card title="Mission" type="text-only">
        <p>
          Our mission is to empower businesses through innovative technology and
          exceptional design, creating impactful digital experiences.
        </p>
      </Card>
      <Card title="Vision" type="text-only">
        <p>
          We envision a future where technology seamlessly integrates into
          everyday life, enhancing productivity and creativity for everyone.
        </p>
      </Card>
    </div>
  </div>
  <h2 class="text-center text-[2rem] mt-8">The A Team</h2>
  <div class="flex justify-center">
    <div
      class="grid grid-cols-1 items-end md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8 py-8 w-fit"
    >
      <UserCard name="Alice Johnson" role="CEO" />
      <UserCard name="Bob Smith" role="CTO" />
      <UserCard name="Charlie Brown" role="CFO" />
      <UserCard name="Diana Prince" role="CMO" />
    </div>
  </div>
</section>
