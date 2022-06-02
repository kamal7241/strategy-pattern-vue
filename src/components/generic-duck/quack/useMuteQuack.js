export default function useMuteQuack() {
  const quack = () => {};
  const stopQuack = () => {};
  return {
    quack,
    stopQuack,
  };
}
