<template>
  <div></div>
  <div class="text-center">
    <div class="duck d-inline-block shadow-sm p-2 mb-2 mt-2">
      <DuckTemplate
        :width="500"
        :image="require('../../../assets/decoy-duck.jpg')"
        :swimImage="require('../../../assets/decoy-swim.jpg')"
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
import useMuteQuack from "../quack/useMuteQuack";
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
    return { ...useDuck(useFlyNoWay(), useMuteQuack()) };
  },
  mounted() {
    this.type = "Decoy";
    this.info = {
      name: "Decoy Duck",
      weight: 1,
      color: "woody",
      lifeTime: 25,
    };
  },
};
</script>
