<script>
  // Handling the menu toggle for mobile view
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header
  class="bg-navy-blue text-light-gray p-4 flex justify-between items-center"
>
  <div class="flex items-center">
    <img src="/logo.svg" alt="BuildRight Construction Logo" class="h-10" />
    <span class="text-xl font-bold font-montserrat"
      >BuildRight Construction</span
    >
  </div>

  <nav class="hidden md:flex space-x-6">
    <a href="#home" class="font-open-sans font-semibold hover:text-dark-orange"
      >Home</a
    >
    <a href="#about" class="font-open-sans font-semibold hover:text-dark-orange"
      >About Us</a
    >
    <a
      href="#services"
      class="font-open-sans font-semibold hover:text-dark-orange">Services</a
    >
    <a
      href="#projects"
      class="font-open-sans font-semibold hover:text-dark-orange">Projects</a
    >
    <a
      href="#testimonials"
      class="font-open-sans font-semibold hover:text-dark-orange"
      >Testimonials</a
    >
    <a href="#blog" class="font-open-sans font-semibold hover:text-dark-orange"
      >Blog</a
    >
    <a
      href="#contact"
      class="font-open-sans font-semibold hover:text-dark-orange">Contact Us</a
    >
  </nav>

  <button
    class="bg-dark-orange text-white py-2 px-4 font-montserrat font-bold rounded md:inline-block hidden"
  >
    Get a Free Quote
  </button>

  <div class="md:hidden cursor-pointer" on:click={toggleMenu}>YAUR</div>

  {#if isMenuOpen}
    <nav class="flex flex-col space-y-4 mt-4 md:hidden">
      <a
        href="#home"
        class="font-open-sans font-semibold hover:text-dark-orange">Home</a
      >
      <a
        href="#about"
        class="font-open-sans font-semibold hover:text-dark-orange">About Us</a
      >
      <a
        href="#services"
        class="font-open-sans font-semibold hover:text-dark-orange">Services</a
      >
      <a
        href="#projects"
        class="font-open-sans font-semibold hover:text-dark-orange">Projects</a
      >
      <a
        href="#testimonials"
        class="font-open-sans font-semibold hover:text-dark-orange"
        >Testimonials</a
      >
      <a
        href="#blog"
        class="font-open-sans font-semibold hover:text-dark-orange">Blog</a
      >
      <a
        href="#contact"
        class="font-open-sans font-semibold hover:text-dark-orange"
        >Contact Us</a
      >
      <button
        class="bg-dark-orange text-light-gray py-2 px-4 font-montserrat font-bold rounded"
      >
        Get a Free Quote
      </button>
    </nav>
  {/if}
</header>

<style>
</style>
