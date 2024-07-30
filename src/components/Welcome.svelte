<script>
  import Card from "./Card.svelte";
</script>

<section class="bg-light-gray text-dark-gray py-16 px-8 mr-0 text-center">
  <div class="max-w-5xl mx-auto">
    <h2
      class="text-3xl md:text-4xl font-montserrat font-bold mb-6 inline-block text-transparent bg-clip-text bg-gradient-to-r from-navy-blue to-dark-orange pb-3"
    >
      Welcome to BuildRight Construction
    </h2>
    <div class="flex justify-center mb-10">
      <Card
        title="Commercial Construction"
        content="Tailored to meet the unique needs of businesses. From office buildings to retail spaces, we ensure quality craftsmanship and timely completion to help your business thrive."
        svgPath="/commercial.svg"
        polygon="polygon(100% 0, 0 0, 0 95%, 100% 100%);"
      />
      <Card
        title="Residential Construction"
        content="Our residential construction services encompass custom home builds and extensive renovations, ensuring your home is both beautiful and functional."
        svgPath="/house.svg"
        polygon="polygon(100% 0, 100% 95%, 50% 100%, 0 95%, 0 0);"
      />
      <Card
        title="Rennovation Construction"
        content="Transform your existing space with our expert renovation services. Whether it’s a modern kitchen upgrade or a complete home makeover, we delivers exceptional results."
        svgPath="/rennovation.svg"
        polygon="polygon(0 0, 100% 0, 100% 95%, 0 100%)"
      />
    </div>
    <div class="flex justify-center">
      <button
        class="bg-dark-orange text-white py-3 px-6 font-montserrat font-bold rounded"
      >
        Learn More About Us
      </button>
    </div>
  </div>
</section>

<style>
  /* Add custom styles if needed */
</style>
