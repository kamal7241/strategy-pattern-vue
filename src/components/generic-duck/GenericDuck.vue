<template>
  <div>
    <WhiteDuck :width="width" v-if="type == 'White'" />
    <MillardDuck :width="width" v-else-if="type == 'Millard'" />
    <RedHeadDuck :width="width" v-else-if="type == 'RedHead'" />
    <RubberDuck :width="width" v-else-if="type == 'Rubber'" />
    <DecoyDuck :width="width" v-else-if="type == 'Decoy'" />
  </div>
</template>

<script>
import WhiteDuck from "./ducks/WhiteDuck.vue";
import RedHeadDuck from "./ducks/RedHeadDuck.vue";
import MillardDuck from "./ducks/MillardDuck.vue";
import RubberDuck from "./ducks/RubberDuck.vue";
import DecoyDuck from "./ducks/DecoyDuck.vue";
export default {
  name: "GenericCard",
  components: {
    WhiteDuck,
    MillardDuck,
    RedHeadDuck,
    RubberDuck,
    DecoyDuck,
  },
  props: ["type", "width"],
};
</script>
