<template>
  <div class="duck d-inline-block shadow-sm p-2 mb-2 mt-2">
    <div class="image-wrapper" :style="{ width: `${width}px` }">
      <transition>
        <img
          v-if="isSwim"
          @click="quack"
          class="pointer"
          src="../assets/duckOnLake.jpg"
          alt="white Duck"
        />
        <img  v-else-if="isFly"
          @click="quack"
          class="pointer"
          src="../assets/duckOnLake.jpg"
          alt="white Duck"
         />
        <img
          v-else
          @click="quack"
          class="pointer"
          src="../assets/duck.jpg"
          alt="white Duck"
        />
      </transition>
    </div>
    <button @click="swim" class="btn btn-primary duck__btn duck__btn--swim">
      swim
    </button>
    <button @click="showInfo" class="btn btn-primary duck__btn duck__btn--info">
      show info
    </button>
  </div>
  <info-card ref="modalNode" :title="'White Duck'">
    <ul>
      <li v-for="(val, prop) in info" :key="prop">
        <strong>{{ prop }} : </strong>
        <span>{{ val }}</span>
      </li>
      <li v-for="(val, prop) in swimInfo" :key="prop">
        <strong>{{ prop }} : </strong>
        <span>{{ val }}</span>
      </li>
    </ul>
  </info-card>
</template>
<script>
import InfoCard from "./InfoCard.vue";
import { Modal } from "bootstrap";
import { TYPES } from '../enums';
const sounds = {
  quack: new Audio(require("../assets/Duck-quack.mp3")),
  swim: new Audio(require("../assets/Ducks in Pond - QuickSounds.com.mp3")),
};
export default {
  name: "WhiteDuck",
  components: {
    InfoCard,
  },
  data() {
    return {
      modal: null,
      sound: sounds.quack,
      info: undefined,
      swimInfo: undefined,
      isSwim: false,
      isFly : false ,
    };
  },
  props: ["width", "type"],
  computed:{
    info(){
        switch(this.type){
            case TYPES.white : 
                return {

                }
            
        }
    },
    sound(){
        switch(this.type){
            case TYPES.white : 
                return {

                }
        }

    },

  },
  methods: {
    quack() {
      this.sound.play();
      setTimeout(() => {
        this.sound.pause();
      }, 2000);
    },
    fly(){
        

    },
    swim() {
      this.isSwim = !this.isSwim;
      if (!this.sound.paused) this.sound.pause();
      if (this.isSwim ) {
        this.swimInfo = {
          speedInWater: "20",
        };
        this.sound = sounds.swim;
      } else {
        console.log(this.sound);
        this.swimInfo = undefined;
        this.sound = sounds.quack;
      }
    },
    showInfo() {
      this.modal.show();
    },
  },
  mounted() {
    console.log(this.$refs.modalNode);
    this.modal = new Modal(this.$refs.modalNode.$el.querySelector("#appModal"));
    this.info = {
      name: "White Duck",
      color: "White",
      life: "5",
      weight: "6",
      places: "Middle East",
    };
  },
};
</script>
