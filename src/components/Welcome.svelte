<script lang="ts">
  import Card from "./Card.svelte";
  import { inview } from "svelte-inview";
  import type { Options } from 'svelte-inview';

  let isInView: boolean;
  const options: Options = {
    rootMargin: '100px',
    unobserveOnEnter: true,
  };
</script>

<section class="bg-light-gray text-dark-gray py-16 px-8 mr-0 text-center">
  <div
  use:inview={options}
  on:inview_enter={(event) => {
    const { inView } = event.detail;
    isInView = inView;
  }}
>
  <div 
    class="max-w-5xl mx-auto"
    class:animate-move-in-top={isInView}
    style="animation-fill-mode: backwards;"
  >
    <h2
      class="text-3xl md:text-4xl font-montserrat font-bold mb-6 inline-block text-transparent bg-clip-text bg-gradient-to-r from-navy-blue to-dark-orange pb-3"
    >
      Welcome to BuildRight Construction
    </h2>
  {#if isInView}
    <div 
      class="flex justify-center mb-10"
      class:animate-move-in-bottom={isInView}
      style="animation-fill-mode: backwards;"
    >
      <Card
        title="Commercial Construction"
        content="Tailored to meet the unique needs of businesses. From office buildings to retail spaces, we ensure quality craftsmanship and timely completion to help your business thrive."
        svgPath="/commercial.svg"
        polygon="polygon(100% 0, 0 0, 0 95%, 100% 100%)"
      />
      <Card
        title="Residential Construction"
        content="Our residential construction services encompass custom home builds and extensive renovations, ensuring your home is both beautiful and functional."
        svgPath="/house.svg"
        polygon="polygon(100% 0, 100% 95%, 50% 100%, 0 95%, 0 0)"
      />
      <Card
        title="Rennovation Construction"
        content="Transform your existing space with our expert renovation services. Whether it’s a modern kitchen upgrade or a complete home makeover, we delivers exceptional results."
        svgPath="/rennovation.svg"
        polygon="polygon(0 0, 100% 0, 100% 95%, 0 100%)"
      />
    </div>
    <div 
      class="flex justify-center"
      class:animate-move-in-bottom={isInView}
      style="animation-fill-mode: backwards;"
    >
      <button
        class="bg-dark-orange text-white py-3 px-6 font-montserrat font-bold rounded"
      >
        Learn More About Us
      </button>
    </div>
  {/if}
  </div>
  </div>
</section>

<style>
  /* Add custom styles if needed */
</style>
