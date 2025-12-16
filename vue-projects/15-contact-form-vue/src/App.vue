<template>
  <main class="main flex items-center justify-center">
    <div
      class="form-container w-full h-full lg:h-auto flex justify-center"
    >
      <Form />
    </div>
  </main>
</template>

<script>
import Form from "./components/Form.vue";
export default {
  name: "App",
  components: {
    Form,
  },
};
</script>

<style>
.main {
  background-color: hsl(148, 38%, 91%);
  width: 100vw;
  min-height: 100vh;
  font-family: "Karla", sans-serif;
}
</style>
