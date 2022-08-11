<template>
  <section class="grid-container">
    <div v-for="num in 12" :key="num" class="grid-item">
      <a href="http://www.hbo.com/girls" target="blank">
        <img src="https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg" />
      </a>

      <p>Name : Movie name</p>
      <p>Language : Movie language</p>
      <p>Premiered on : date</p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
