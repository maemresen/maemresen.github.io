<template>
  <div id="app" class="h-100">
    <div
      id="overlay"
      class="h-100 d-flex align-items-center justify-content-center"
    >
      <div class="container">
        <MaeCard />
      </div>
    </div>
  </div>
</template>

<script>
import MaeCard from "./components/MaeCard.vue";

export default {
  name: "App",
  components: { MaeCard },
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

html,
body {
  margin: 0;
  height: 100%;
}

#app {
  background-image: url("/assets/img/rain_matrix.jpg");
}

#app #overlay {
  background-color: rgba(0, 0, 0, 0.75);
}
</style>
