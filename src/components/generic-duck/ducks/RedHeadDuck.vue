<template>
  <div></div>
  <div class="text-center">
    <div class="duck d-inline-block shadow-sm p-2 mb-2 mt-2">
      <DuckTemplate
        :width="500"
        :image="require('../../../assets/redhead.jpg')"
        :flyImage="require('../../../assets/redhead-fly.jpg')"
        :swimImage="require('../../../assets/redhead-duck-swim.jpg')"
        :isSwim="isSwim"
        :isFly="isFly"
        @quack="quack"
      />
      <DuckBtns
        @swim="toggleSwim"
        @fly="toggleFly"
        @info="showInfo"
        v-bind="btnsModel"
      />
      <DuckInfo
        ref="modalCard"
        :info="info"
        :flyBehaviour="isFly ? flyBehaviour : ''"
        :swimState="isSwim ? swimState : ''"
      />
    </div>
  </div>
</template>
<script>
import useDuck from "../useDuck";
import useFlyWithWings from "../fly/useFlyWithWings";
import useQuack from "../quack/useQuack";
import DuckTemplate from "../duck-templates/DuckTemplate.vue";
import DuckInfo from "../duck-templates/DuckInfo.vue";
import DuckBtns from "../duck-templates/DuckBtns.vue";
export default {
  name: "WhiteDuck",
  components: {
    DuckTemplate,
    DuckInfo,
    DuckBtns,
  },
  props: ["width"],
  setup() {
    // super Duck
    return { ...useDuck(useFlyWithWings(), useQuack()) };
  },
  mounted() {
    this.type = "RedHead";
    this.info = {
      name: "Red Head Duck",
      weight: 5,
      color: "Red",
      lifeTime: 7,
    };
  },
};
</script>
