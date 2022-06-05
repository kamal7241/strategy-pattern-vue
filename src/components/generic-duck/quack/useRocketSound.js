export default function useRocketSound() {
  const audio = new Audio(
    require("../../../assets/Rocket Launcher Shot 50 - QuickSounds.com.mp3")
  );
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
