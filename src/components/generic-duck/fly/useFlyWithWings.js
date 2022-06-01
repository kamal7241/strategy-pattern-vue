import { ref } from "vue";
export default function useFlyWithWings() {
  const flyInfo = {
    speed: 40,
    height: 50,
  };
  const flyState = ref(null);
  const fly = () => {
    flyState.value = flyInfo;
  };
  const stopFly = () => {
    flyState.value = undefined;
  };
  return {
    flyState,
    fly,
    stopFly,
  };
}
