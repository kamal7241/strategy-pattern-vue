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

      <InfoCard ref="modalCard" :title="info.name" class="text-start">
        <p>weight : {{ info.weight }}</p>
        <p>color : {{ info.color }}</p>
        <p>life time : {{ info.lifeTime }}</p>
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
import { ref } from "vue";
import { Modal } from "bootstrap";
import InfoCard from "./InfoCard.vue";
export default {
  name: "Duck",
  props: ["width"],
  components: {
    InfoCard,
  },
  setup() {
    const modalCard = ref(null);
    return {
      modalCard,
    };
  },
  data() {
    return {
      type: "WhiteDuck",
      isFly: false,
      isSwim: false,
      swimState: undefined,
      flyState: undefined,
      audio: new Audio(require("../assets/Duck-quack.mp3")), //changeing
      info: {
        name: "White Duck",
        weight: 50,
        color: "white",
        lifeTime: 5,
      },
      isShowInfo: false,
      modal: undefined,
    };
  },
  methods: {
    quack() {
      this.audio.play();
      setTimeout(() => {
        this.audio.pause();
      }, 1000); // changing
    },
    toggleSwim() {
      this.isSwim = !this.isSwim;
      if (this.isSwim)
        this.swimState = {
          speed: 10,
        };
      //changing
      else this.swimState = undefined;
    },
    toggleFly() {
      this.isFly = !this.isFly;
      if (this.isFly)
        this.flyState = {
          speed: 40,
          height: 50,
        };
      // changeing
      else this.flyState = undefined;
    },
  },
  mounted() {
    this.modal = new Modal(this.modalCard.$el.querySelector("#appModal"));
  },
  watch: {
    isSwim() {
      if (this.isSwim) this.isFly = false;
    },
    isFly() {
      if (this.isFly) this.isSwim = false;
    },
  },
};
</script>
