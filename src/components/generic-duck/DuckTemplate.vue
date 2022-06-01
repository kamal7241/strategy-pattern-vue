<template>
  <div class="image-wrapper" :style="{ width: width + 'px' }">
    <Transition>
      <img v-if="isSwim" class="pointer" @click="quack" :src="swimImage" />
      <img v-else-if="isFly" class="pointer" @click="quack" :src="flyImage" />
      <img v-else class="pointer" @click="quack" :src="image" />
    </Transition>
  </div>
</template>

<script>
export default {
  name: "DuckTemplate",
  emits: ["quack"],
  props: ["width", "image", "flyImage", "swimImage", "isSwim", "isFly"],
  methods: {
    quack() {
      this.$emit("quack");
    },
  },
};
</script>
