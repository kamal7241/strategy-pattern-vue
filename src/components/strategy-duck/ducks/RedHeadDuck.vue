<template>
  <div>
    <DuckInput @select="setQuackBehaviour" />
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
import DuckTemplate from "../duck-templates/DuckTemplate.vue";
import DuckInfo from "../duck-templates/DuckInfo.vue";
import DuckBtns from "../duck-templates/DuckBtns.vue";
import DuckInput from "../duck-templates/DuckInput.vue";
import useFlyBehaviour from "../fly";
import { FLY_BEHAVIOUR, QUACK_BEHAVIOUR } from "../../../enums";
import useQuackBehaviour from "../quack";
export default {
  name: "RedHead",
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
    this.type = "RedHead";
    this.info = {
      name: "Red Head Duck",
      weight: 5,
      color: "Red",
      lifeTime: 7,
      livesIn: "Europe",
    };
  },
};
</script>
