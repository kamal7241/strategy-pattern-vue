export default function useQuack() {
  const audio = new Audio(require("../../../assets/Duck-quack.mp3"));
  const quack = ()=>{
      audio.play();
  }
  const stopQuack = ()=>{
    audio.pause();
  }
  return {
    quack ,
    stopQuack ,
  };
}
