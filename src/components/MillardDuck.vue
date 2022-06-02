<template>
  <div class="text-center">
    <div class="duck d-inline-block shadow-sm p-2 mb-2 mt-2">
      <Transition>
        <img
          v-if="isSwim"
          class="pointer"
          @click="quack"
          :width="width"
          src="../assets/mallard-swim.jpg"
        />
        <img
          v-else-if="isFly"
          class="pointer"
          @click="quack"
          :width="width"
          src="../assets/flying-duck.jpg"
        />
        <img
          v-else
          class="pointer"
          @click="quack"
          :width="width"
          src="../assets/millard.jpg"
        />
      </Transition>
      <button
        class="btn btn-primary duck__btn duck__btn--swim"
        @click="toggleSwim"
      >
        {{ isSwim ? "Stop Swimming" : "Start Swimming" }}
      </button>
      <button
        class="btn btn-primary duck__btn duck__btn--fly"
        @click="toggleFly"
      >
        fly
      </button>
      <!-- info  -->
      <button class="btn btn-primary duck__btn duck__btn--info" @click="modal.show">
        Show Info
      </button>

      <InfoCard ref="infoCard" :title="info?.name" class="text-start">
        <p>weight : {{ info?.weight }}</p>
        <p>color : {{ info?.color }}</p>
        <p>life time : {{ info?.lifeTime }}</p>
        <div v-if="isFly">
          <p v-for="(flyInfo, key) in flyState" :key="key">
            {{ key + ": " + flyInfo }}
          </p>
        </div>
        <div v-if="isSwim">
          <p v-for="(swimInfo, key) in swimState" :key="key">
            {{ key + ": " + swimInfo }}
          </p>
        </div>
      </InfoCard>
    </div>
  </div>
</template>
<script>
import InfoCard from "./InfoCard.vue";
import baseDuck from "./baseDuck";
export default {
  name: "Duck",
  props: ["width"],
  components: {
    InfoCard,
  },
  setup() {
    return {
      ...baseDuck(),
    };
  },
  data() {
    return {};
  },
  methods: {
      quack(){
        this.audio = new Audio(require("../assets/Duck-quack.mp3"));
      }
  },
  mounted() {
    this.quack();
    this.type = "Millard";
    this.info = {
      name: "Millard Duck",
      weight: 20,
      color: "Green",
      lifeTime: 7,
    };
  },
};
</script>
