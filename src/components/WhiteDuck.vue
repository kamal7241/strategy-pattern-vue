<template>
  <div class="text-center">
    <div class="duck d-inline-block shadow-sm p-2 mb-2 mt-2">
      <Transition>
        <img
          v-if="isSwim"
          class="pointer"
          @click="quack"
          :width="width"
          src="../assets/duckOnLake.jpg"
        />
        <img
          v-else-if="isFly"
          class="pointer"
          @click="quack"
          :width="width"
          src="../assets/white-duck-fly.jpg"
        />
        <img
          v-else
          class="pointer"
          @click="quack"
          :width="width"
          src="../assets/duck.jpg"
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
      <button
        class="btn btn-primary duck__btn duck__btn--info"
        @click="modal.show"
      >
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
import useQuack  from "./behaviours/quack/useQuack";
export default {
  name: "Duck",
  props: ["width"],
  components: {
    InfoCard,
  },
  setup() {
    const baseDuckModel = baseDuck();
    baseDuckModel.quackBehaviour.value = useMuteQuack()
    return {
      ...baseDuckModel,
    };
  },
  data() {
    return {};
  },
  mounted() {
    this.type = "White";
    this.info = {
      name: "White Duck",
      weight: 50,
      color: "white",
      lifeTime: 5,
    };
  },
};
</script>
