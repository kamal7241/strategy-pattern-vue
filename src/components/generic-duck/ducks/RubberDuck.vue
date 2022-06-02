<template>
  <div></div>
  <div class="text-center">
    <div class="duck d-inline-block shadow-sm p-2 mb-2 mt-2">
      <DuckTemplate
        :width="500"
        :image="require('../../../assets/rubber.jpg')"
        :swimImage="require('../../../assets/rubber-swim.jpg')"
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
import useFlyNoWay from "../fly/flyNoWay";
import useSqueak from "../quack/useSqueak";
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
    return { ...useDuck(useFlyNoWay(), useSqueak()) };
  },
  mounted() {
    this.type = "Rubber";
    this.info = {
      name: "Rubber Duck",
      weight: 1,
      color: "yellow",
      lifeTime: 80,
    };
  },
};
</script>
