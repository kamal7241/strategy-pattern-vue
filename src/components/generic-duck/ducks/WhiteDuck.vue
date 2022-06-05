<template>
  <div>
    <DuckInput @select="setQuackBehaviour" />
    <div class="text-center">
      <div class="duck d-inline-block shadow-sm p-2 mb-2 mt-2">
        <DuckTemplate
          :width="500"
          :image="require('../../../assets/duck.jpg')"
          :flyImage="require('../../../assets/white-duck-fly.jpg')"
          :swimImage="require('../../../assets/duckOnLake.jpg')"
          :isSwim="isSwim"
          :isFly="isFly"
          @quack="quack"
        />
        <DuckBtns
          @swim="performSwim"
          @fly="performFly"
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
  </div>
</template>
<script>
import useDuck from "../useDuck";
import useFlyBehaviour from "../fly";
import useQuackBehaviour from "../quack";
import DuckTemplate from "../duck-templates/DuckTemplate.vue";
import DuckInfo from "../duck-templates/DuckInfo.vue";
import DuckBtns from "../duck-templates/DuckBtns.vue";
import DuckInput from "../duck-templates/DuckInput.vue";
import { FLY_BEHAVIOUR, QUACK_BEHAVIOUR } from "../../../enums";
export default {
  name: "WhiteDuck",
  components: {
    DuckTemplate,
    DuckInfo,
    DuckBtns,
    DuckInput,
  },
  props: ["width"],
  setup() {
    // super Duck
    return {
      ...useDuck(
        useFlyBehaviour(FLY_BEHAVIOUR.wings),
        useQuackBehaviour(QUACK_BEHAVIOUR.quack)
      ),
    };
  },
  methods: {
    performFly() {
      this.fly(QUACK_BEHAVIOUR.fly, QUACK_BEHAVIOUR.quack);
    },
    performSwim() {
      this.swim(QUACK_BEHAVIOUR.swim, QUACK_BEHAVIOUR.quack);
    },
  },
  mounted() {
    this.type = "WhiteDuck";
    this.info = {
      name: "White Duck",
      weight: 50,
      color: "white",
      lifeTime: 5,
      livesIn: "Africa",
    };
  },
};
</script>
