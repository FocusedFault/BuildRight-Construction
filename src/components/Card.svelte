<script lang="ts">
  export let title = "";
  export let content = "";
  export let svgPath = "";
  export let polygon = "";
</script>

  <div
    class="bg-gradient-to-b from-navy-blue/90 to-navy-blue/70 shadow-md rounded-lg p-6 mx-6 min-h-96 min-w-xl text-light-gray animate-move-in-bottom"
    style="clip-path: {polygon};"
  >
    {#if svgPath}
      <div class="flex justify-center mb-4">
        <img src={svgPath} alt="Card icon" class="h-12 w-12" />
      </div>
    {/if}
    <h3 class="text-2xl font-montserrat font-bold py-4 text-gold-yellow">
      {title}
    </h3>
    <p class="text-lg font-open-sans mb-6">{content}</p>
</div>

<style>
</style>
