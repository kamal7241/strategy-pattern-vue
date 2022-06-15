<template>
  <div>
    <WhiteDuck :width="width" v-if="type == TYPES.white" />
    <MallardDuck :width="width" v-else-if="type == TYPES.Mallard" />
    <RedHeadDuck :width="width" v-else-if="type == TYPES.redHead" />
    <RubberDuck :width="width" v-else-if="type == TYPES.rubber" />
    <DecoyDuck :width="width" v-else-if="type == TYPES.decoy" />
  </div>
</template>

<script>
import WhiteDuck from "./ducks/WhiteDuck.vue";
import RedHeadDuck from "./ducks/RedHeadDuck.vue";
import MallardDuck from "./ducks/MallardDuck.vue";
import RubberDuck from "./ducks/RubberDuck.vue";
import DecoyDuck from "./ducks/DecoyDuck.vue";
import { TYPES } from "../../enums";
export default {
  name: "StrategyDuck",
  components: {
    WhiteDuck,
    MallardDuck,
    RedHeadDuck,
    RubberDuck,
    DecoyDuck,
  },
  props: ["type", "width"],
  computed: {
    TYPES() {
      return TYPES;
    },
  },
};
</script>
