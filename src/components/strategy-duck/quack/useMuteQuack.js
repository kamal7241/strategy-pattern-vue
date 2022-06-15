export default function useMuteQuack() {
  const quack = () => {};
  const stopQuack = () => {};
  const canQuack = () => false;
  return {
    quack,
    stopQuack,
    canQuack,
  };
}
