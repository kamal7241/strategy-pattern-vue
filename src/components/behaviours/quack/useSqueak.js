
export default function useSqueak(){
    const audio = new Audio(require("../../../assets/duck-squeak.mp3"));
    const quack = ()=>{
        audio.play();
    }
    const stopQuack = ()=>{
      audio.pause();
    }
    return {
        quack ,
        stopQuack
    }
}