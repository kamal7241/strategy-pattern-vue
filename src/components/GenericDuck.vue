<template>
  <div class="text-center">
    <div class="duck d-inline-block shadow-sm p-2 mb-2 mt-2">
      <Transition>
        <img
          v-if="isSwim"
          class="pointer"
          @click="quack"
          :width="width"
          :src="duckImage"
        />
        <img
          v-else-if="isFly"
          class="pointer"
          @click="quack"
          :width="width"
          :src="duckFlyImage"
        />
        <img
          v-else
          class="pointer"
          @click="quack"
          :width="width"
          :src="duckSwimImage"
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
export default {
  name: "Duck",
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
    duckImage() {
      switch (this.type) {
        case "Millard":
          return require("../assets/millard.jpg");
        case "RedHead":
          return require("../assets/redhead.jpg");
        default:
          return require("../assets/duck.jpg");
      }
    },
    duckFlyImage() {
      switch (this.type) {
        case "Millard":
          return require("../assets/flying-duck.jpg");
        case "RedHead":
          return require("../assets/redhead-fly.jpg");
        default:
          return require("../assets/white-duck-fly.jpg");
      }
    },
    duckSwimImage() {
      switch (this.type) {
        case "Millard":
          return require("../assets/millard.jpg");
        case "RedHead":
          return require("../assets/redhead.jpg");
        default:
          return require("../assets/duck.jpg");
      }
    },
    duckQuackSound() {
      switch (this.type) {
        case "Millard":
          return require("../assets/millard.jpg");
        case "RedHead":
          return require("../assets/redhead.jpg");
        default:
          return require("../assets/duck.jpg");
      }
    },
    duckInfo() {
      switch (this.type) {
        case "Millard":
          return {
            name: "White Duck",
            weight: 30,
            color: "Green",
            lifeTime: 7,
          };
        case "RedHead":
          return {
            name: "RedHead Duck",
            weight: 40,
            color: "Red",
            lifeTime: 9,
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
      audio: new Audio(require("../assets/Duck-quack.mp3")),
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
      this.audio.play();
      setTimeout(() => {
        this.audio.pause();
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
    displayInfo() {},
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
<style lang="scss">
@import "~bootstrap";
.pointer {
  cursor: pointer;
}
.duck {
  position: relative;
  overflow: hidden;
  max-width: 516px;
  max-height: 332px;
  &:hover {
    .duck__btn {
      display: inline-block;
    }
  }
  .duck__btn {
    display: none;
    position: absolute;
    &.duck__btn--swim {
      top: 0.5rem;
      left: 0.5rem;
    }
    &.duck__btn--fly {
      top: 0.5rem;
      right: 0.5rem;
    }
    &.duck__btn--info {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .btn {
    &.btn-primary {
      background-color: orangered;
      border-color: orangered;
    }
  }
}

/* we will explain what these classes do next! */
.v-enter-active {
  transition: all 0.3s ease;
  transition-delay: 0.5s;
}
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from {
  transform: translateX(-100%);
  opacity: 0;
  height: 0;
}
.v-enter-to {
  opacity: 1;
  transform: none;
}
.v-leave-from {
  opacity: 1;
  transform: none;
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
