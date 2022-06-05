<template>
  <div class="text-center">
    <div class="duck d-inline-block shadow-sm p-2 mb-2 mt-2">
      <div class="image-wrapper" :style="{ width: width + 'px' }">
        <Transition>
          <img
            v-if="isSwim"
            class="pointer"
            @click="quack"
            :src="duckSwimImage"
          />
          <img
            v-else-if="isFly"
            class="pointer"
            @click="quack"
            :src="duckFlyImage"
          />
          <img v-else class="pointer" @click="quack" :src="duckImage" />
        </Transition>
      </div>
      <button
        class="btn btn-primary duck__btn duck__btn--swim"
        @click="toggleSwim"
      >
        {{ isSwim ? "Stop Swimming" : "Start Swimming" }}
      </button>
      <button
        v-if="canFly"
        class="btn btn-primary duck__btn duck__btn--fly"
        @click="toggleFly"
      >
        {{ isFly ? "Stop Fly" : "Fly" }}
      </button>
      <!-- info  -->
      <button
        class="btn btn-primary duck__btn duck__btn--info"
        @click="modal.show"
      >
        Show Info
      </button>

      <InfoCard ref="modalCard" :title="duckInfo.name" class="text-start">
        <p>weight : {{ duckInfo.weight }}</p>
        <p>color : {{ duckInfo.color }}</p>
        <p>life time : {{ duckInfo.lifeTime }}</p>
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
import { TYPES } from "../enums";
export default {
  name: "GenericDuck",
  props: ["width", "type"],
  components: {
    InfoCard,
  },
  setup() {
    const modalCard = ref(null);
    return {
      modalCard,
    };
  },
  computed: {
    canFly() {
      switch (this.type) {
        case TYPES.rubber:
        case TYPES.decoy:
          return false;
        default:
          return true;
      }
    },
    duckImage() {
      switch (this.type) {
        case TYPES.Mallard:
          return require("../assets/millard.jpg");
        case TYPES.redHead:
          return require("../assets/redhead.jpg");
        case TYPES.decoy:
          return require("../assets/decoy-duck.jpg");
        case TYPES.rubber:
          return require("../assets/rubber.jpg");
        default:
          return require("../assets/duck.jpg");
      }
    },
    duckFlyImage() {
      switch (this.type) {
        case TYPES.Mallard:
          return require("../assets/flying-duck.jpg");
        case TYPES.redHead:
          return require("../assets/redhead-fly.jpg");
        default:
          return require("../assets/white-duck-fly.jpg");
      }
    },
    duckSwimImage() {
      switch (this.type) {
        case TYPES.Mallard:
          return require("../assets/millard.jpg");
        case TYPES.redHead:
          return require("../assets/redhead-duck-swim.jpg");
        case TYPES.rubber:
          return require("../assets/rubber-swim.jpg");
        case TYPES.decoy:
          return require("../assets/decoy-swim.jpg");
        default:
          return require("../assets/duck.jpg");
      }
    },
    duckQuackSound() {
      switch (this.type) {
        case TYPES.rubber:
          return new Audio(require("../assets/duck-squeak.mp3"));
        case TYPES.decoy:
          return new Audio();
        default : 
        if(this.isFly)
           return new Audio(require("../assets/flying-sound.mp3"));
        else if (this.isSwim)
           return new Audio(require("../assets/Ducks in Pond - QuickSounds.com.mp3"));
        else 
          return new Audio(require("../assets/Duck-quack.mp3"))
     }
    },
    duckInfo() {
      switch (this.type) {
        case TYPES.Mallard:
          return {
            name: "Mallard Duck",
            weight: 30,
            color: "Green",
            lifeTime: 7,
          };
        case TYPES.rubber:
          return {
            name: "Rubber Duck",
            weight: 30,
            color: "Yellow",
            lifeTime: 7,
          };
        case TYPES.decoy:
          return {
            name: "Decoy Duck",
            weight: 30,
            color: "woody",
            lifeTime: 7,
          };
        default:
          return {
            name: "White Duck",
            weight: 20,
            color: "white",
            lifeTime: 5,
          };
      }
    },
  },
  data() {
    return {
      isSwim: false,
      swimState: undefined,
      isFly: false,
      flyState: undefined,
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
      this.duckQuackSound.play();
      setTimeout(() => {
        this.duckQuackSound.pause();
      }, 1000);
    },
    toggleSwim() {
      this.isSwim = !this.isSwim;
      if (this.isSwim)
        this.swimState = {
          speed: 10,
        };
      else this.swimState = undefined;
    },
    toggleFly() {
      this.isFly = !this.isFly;
      if (this.isFly)
        this.flyState = {
          speed: 40,
          height: 50,
        };
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
