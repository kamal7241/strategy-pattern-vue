<template>
  <div>
    <div class="h1 text-center d-block m-auto mb-4 w-50">
      <label class="mb-3 text-nowrap" for="">Select Quack Behaviour</label>
      <select class="form-select" @change="onSelect">
        <option :value="QUACK_BEHAVIOUR.quack">Quack</option>
        <option :value="QUACK_BEHAVIOUR.fly">Fly</option>
        <option :value="QUACK_BEHAVIOUR.squeak">Squeak</option>
        <option :value="QUACK_BEHAVIOUR.muted">Muted</option>
        <option :value="QUACK_BEHAVIOUR.swim">Swim</option>
        <option :value="QUACK_BEHAVIOUR.rocket">Rocket</option>
      </select>
    </div>
  </div>
</template>
<script>
import { QUACK_BEHAVIOUR } from "../../../enums";
export default {
  name: "DuckInput",
  computed: {
    QUACK_BEHAVIOUR() {
      return QUACK_BEHAVIOUR;
    },
  },
  methods: {
    onSelect({ target }) {
      debugger;
      this.$emit("select", target.value);
    },
  },
};
</script>
