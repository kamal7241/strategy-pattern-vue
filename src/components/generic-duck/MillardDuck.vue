<template>
  <div></div>
  <div class="text-center">
    <div class="duck d-inline-block shadow-sm p-2 mb-2 mt-2">
      <DuckTemplate
        :width="500"
        :image="require('../../assets/millard.jpg')"
        :flyImage="require('../../assets/flying-duck.jpg')"
        :swimImage="require('../../assets/mallard-swim.jpg')"
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
import useDuck from "./useDuck";
import useFlyWithWings from "./fly/useFlyWithWings";
import useQuack from "./quack/useQuack";
import DuckTemplate from "./DuckTemplate.vue";
import DuckInfo from "./DuckInfo.vue";
import DuckBtns from "./DuckBtns.vue";
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
    this.type = "Millard";
    this.info = {
      name: "Millar Duck",
      weight: 7,
      color: "Green",
      lifeTime: 9,
    };
  },
};
</script>
