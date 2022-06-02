import { onMounted, ref, watch } from "vue";
import { Modal } from "bootstrap";
import "./baseDuck.scss";
// class group states , bevahiours
export default function baseDuck() {
  const type = ref(null);
  const isFly = ref(false);
  const isSwim = ref(false);
  const swimState = ref(null);
  const flyState = ref(null);
  const info = ref(null);
  const isShowInfo = ref(false);
  const infoCard = ref(null);
  const modal = ref(null);
  const quackBehaviour = ref(null);
  // methods
  const quack = () => {
    quackBehaviour.value.quack();
    setTimeout(() => {
      quackBehaviour.value.stopQuack();
    }, 1000); // changing
  };
  const toggleSwim = () => {
    isSwim.value = !isSwim.value;
    if (isSwim.value)
      swimState.value = {
        speed: 10,
      };
    //changing
    else swimState.value = undefined;
  };
  const toggleFly = () => {
    isFly.value = !isFly.value;
    if (isFly.value)
      flyState.value = {
        speed: 40,
        height: 50,
      };
    // changeing
    else flyState.value = undefined;
  };
  // hooks ( mounting , update)
  onMounted(() => {
    modal.value = new Modal(infoCard.value.$el.querySelector("#appModal"));
  });
  watch(isSwim, () => {
    if (isSwim.value) isFly.value = false;
  });
  watch(isFly, () => {
    if (isFly.value) isSwim.value = false;
  });
  return {
    type,
    isFly,
    isSwim,
    swimState,
    flyState,
    info,
    isShowInfo,
    infoCard,
    modal,
    // methods
    toggleFly,
    quack,
    toggleSwim,
    // changing instances
    quackBehaviour ,
  };
}
