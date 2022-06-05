export default function useFlyQuack() {
  const audio = new Audio(require("../../../assets/flying-sound.mp3"));
  audio.volume = 0.5;
  const quack = () => {
    audio.play();
  };
  const stopQuack = () => {
    audio.pause();
  };
  const canQuack = () => true;
  return {
    quack,
    stopQuack,
    canQuack,
  };
}
