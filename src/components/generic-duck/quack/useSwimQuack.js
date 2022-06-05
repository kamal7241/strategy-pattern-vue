export default function useSwimQuack() {
  const audio = new Audio(
    require("../../../assets/Ducks in Pond - QuickSounds.com.mp3")
  );
  audio.volume = 0.3;
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
