<template>
  <button
    class="btn btn-primary duck__btn duck__btn--swim"
    @click="triggerSwim"
  >
    {{ swim }}
  </button>
  <button
    v-if="fly"
    class="btn btn-primary duck__btn duck__btn--fly"
    @click="triggerFly"
  >
    {{ fly }}
  </button>
  <!-- info  -->
  <button
    class="btn btn-primary duck__btn duck__btn--info"
    @click="triggerInfo"
  >
    {{ info }}
  </button>
</template>
<script>
export default {
  name: "DuckBtns",
  emits: ["swim", "fly", "info"],
  props: ["swim", "fly", "info"],
  methods: {
    triggerInfo() {
      this.$emit("info");
    },
    triggerSwim() {
      this.$emit("swim");
    },
    triggerFly() {
      this.$emit("fly");
    },
  },
};
</script>
