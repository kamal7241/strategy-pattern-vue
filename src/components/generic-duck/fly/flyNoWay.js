export default function useFlyNoWay() {
  const flyState = null;
  const fly = () => {};
  const stopFly = () => {};
  const canFly = () => false;
  return {
    flyState,
    fly,
    stopFly,
    canFly,
  };
}
