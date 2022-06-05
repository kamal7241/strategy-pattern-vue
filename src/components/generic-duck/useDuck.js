import { ref, onMounted, computed, onBeforeMount } from "vue";
import { Modal } from "bootstrap";
import { watchEffect } from "vue";
import "./duck.scss";
import useFlyBehaviour from "./fly";
import useQuackBehaviour from "./quack";
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
    let fly;
    if (flyBehaviour.value.canFly()) fly = isFly.value ? "Stop Fly" : "Fly";
    return {
      swim: isSwim.value ? "Stop Swimming" : "Start Swimming",
      fly,
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
  const fly = (_flyQuack, _normalQuack) => {
    toggleFly();
    quackBehaviour.value.stopQuack();
    if (isFly.value) setQuackBehaviour(_flyQuack);
    else setQuackBehaviour(_normalQuack);
  };
  const swim = (_swimQuack, _flyQuack) => {
    toggleSwim();
    quackBehaviour.value.stopQuack();
    if (isSwim.value) setQuackBehaviour(_swimQuack);
    else setQuackBehaviour(_flyQuack);
  };
  const quack = () => {
    quackBehaviour.value.quack();
    setTimeout(() => {
      quackBehaviour.value.stopQuack();
    }, 2000);
  };
  const setQuackBehaviour = (behaviour) => {
    quackBehaviour.value.stopQuack();
    quackBehaviour.value = useQuackBehaviour(behaviour);
  };
  const setFlyBehaviour = (behaviour) => {
    flyBehaviour.value.stopFly();
    flyBehaviour.value = useFlyBehaviour(behaviour);
  };
  //#region  hooks
  watchEffect(() => {
    if (isFly.value) isSwim.value = false;
  });
  watchEffect(() => {
    if (isSwim.value) isFly.value = false;
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
    swim,
    fly,
    quack,
    showInfo,
    btnsModel,
    quackBehaviour,
    flyBehaviour,
    // for dynamic change
    setQuackBehaviour,
    setFlyBehaviour,
  };
}
