<script lang="ts">
  import SocialButton from "./ui/SocialButton.svelte";
  import logo from "../assets/images/logo-dark.webp";
  let currentYear = new Date().getFullYear();
</script>

<footer id="footer" class="bg-primary-950 border-t-main-secondary border-t-16">
  <div
    class="flex flex-col xl:flex-row items-center xl:justify-between sm:mx-50 py-16 gap-y-4 xl:gap-y-0"
  >
    <a href="#home">
      <img src={logo} alt="" class="h-12 xl:h-18" />
    </a>
    <div class="flex flex-col gap-y-8 items-center xl:items-end">
      <div
        class="flex flex-col sm:flex-row items-center gap-x-8 gap-y-4 xl:gap-y-0"
      >
        <a href="/terms-and-conditions" target="_blank">Terms & Conditions</a>
        <div class="flex items-center gap-x-4">
          <SocialButton
            href="https://www.instagram.com/check.point.studios"
            icon="instagram"
          />
          <SocialButton
            href="https://www.linkedin.com/company/checkpoint-studios"
            icon="linkedin"
          />
        </div>
      </div>
      <p class="text-secondary-700 text-xs">© Checkpoint Studios {currentYear}</p>
    </div>
  </div>
</footer>
