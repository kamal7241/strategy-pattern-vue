import { ref, onMounted, computed, onBeforeMount } from "vue";
import { Modal } from "bootstrap";
import { watchEffect } from "vue";
import "./duck.scss";
export default function useDuck(_flyBehaviour, _quackBehaviour) {
  //#region state
  const modalCard = ref(null);
  const type = ref(undefined);
  const info = ref(undefined);
  const isFly = ref(false);
  const isSwim = ref(false);
  const modal = ref(null);
  const swimState = ref(null);
  const flyBehaviour = ref(null);
  const quackBehaviour = ref(null);
  const btnsModel = computed(() => {
    return {
      swim: isSwim.value ? "Stop Swimming" : "Start Swimming",
      fly: isFly.value ? "Stop Fly" : "Fly",
      info: "Show Info",
    };
  });
  //#endregion state

  //#region methods
  const showInfo = () => {
    modal.value.show();
  };
  const toggleSwim = () => {
    isSwim.value = !isSwim.value;
    if (isSwim.value)
      swimState.value = {
        speed: 10,
      };
    else swimState.value = undefined;
  };
  //#region methods ends
  const toggleFly = () => {
    isFly.value = !isFly.value;
    if (isFly.value) flyBehaviour.value.fly();
    else flyBehaviour.value.stopFly();
  };
  const quack = () => {
    quackBehaviour.value.quack();
    setTimeout(() => {
      quackBehaviour.value.stopQuack();
    }, 1000);
  };
  //#region  hooks
  watchEffect(() => {
    if (isFly.value) isSwim.value = false;
  });
  watchEffect(() => {
    if (isSwim.value) isFly.value = false;
  });
  onBeforeMount(() => {
    //set duck Fly Behaviour
    flyBehaviour.value = _flyBehaviour;
    //set quack Behaviour
    quackBehaviour.value = _quackBehaviour;
  }),
    onMounted(() => {
      console.log(modalCard.value.$el.querySelector("#appModal"));
      modal.value = new Modal(modalCard.value.$el.querySelector("#appModal"));
    });
  //#endregion

  return {
    modalCard,
    modal,
    type,
    isSwim,
    isFly,
    info,
    swimState,
    toggleSwim,
    toggleFly,
    quack,
    showInfo,
    btnsModel,
    quackBehaviour,
    flyBehaviour,
  };
}
