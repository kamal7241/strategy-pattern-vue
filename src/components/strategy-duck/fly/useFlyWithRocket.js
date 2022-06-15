import { ref } from "vue";
export default function useFlyWithRocket() {
  const flyInfo = {
    speed: 340,
    height: 5000,
  };
  const flyState = ref(null);
  const fly = () => {
    flyState.value = flyInfo;
  };
  const stopFly = () => {
    flyState.value = undefined;
  };
  const canFly = () => true;
  return {
    flyState,
    fly,
    stopFly,
    canFly,
  };
}
