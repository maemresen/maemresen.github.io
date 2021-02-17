<template>
  <div id="app" class="h-100">
    <div id="overlay" class="h-100">
      <div  class="container h-100 d-flex align-items-center justify-content-center">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

html,
body {
  margin: 0;
  height: 100%;
}

#app {
  background-image: url("/assets/img/mustang_old_black.jpg");
}

#app #overlay {
  background-color: rgba(0, 0, 0, 0.75);
}
</style>
