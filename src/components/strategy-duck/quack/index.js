import useMuteQuack from "./useMuteQuack";
import useQuack from "./useQuack";
import useSqueak from "./useSqueak";
import useFlyQuack from "./useFlyQuack";
import useSwimQuack from "./useSwimQuack";
import { QUACK_BEHAVIOUR } from "../../../enums";
import useRocketSound from "./useRocketSound";
export default function useQuackBehaviour(_behaviour) {
  switch (_behaviour) {
    case QUACK_BEHAVIOUR.fly:
      return useFlyQuack();
    case QUACK_BEHAVIOUR.quack:
      return useQuack();
    case QUACK_BEHAVIOUR.swim:
      return useSwimQuack();
    case QUACK_BEHAVIOUR.squeak:
      return useSqueak();
    case QUACK_BEHAVIOUR.rocket:
      return useRocketSound();
    default:
      return useMuteQuack();
  }
}
