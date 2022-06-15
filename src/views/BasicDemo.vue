<template>
  <div class="mb-5">
    <h1 class="mb-5">Welcome home</h1>
    <DuckDemo :width="500" />
  </div>
</template>

<script>
import DuckDemo from "../components/DuckDemo.vue";
export default {
  name: "Basic",
  components: {
    DuckDemo,
  },
};
</script>
