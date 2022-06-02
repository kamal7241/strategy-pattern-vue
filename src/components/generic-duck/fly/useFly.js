import { ref } from "vue";
export default function useFly(flyBehaviour) {
  const isFly = ref(false);
  const toggleFly = () => {
    isFly.value = !isFly.value;
    if (isFly.value)
      flyBehaviour.value.flyState = flyBehaviour.value.getFlyState();
    // changeing
    else flyBehaviour.value.flyState = undefined;
  };

  const fly = () => {
    isFly.value = false;
  };
  const stopFly = () => {};
  return {
    isFly,
    toggleFly,
  };
}
