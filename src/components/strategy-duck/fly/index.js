import { FLY_BEHAVIOUR } from "../../../enums";
import useFlyNoWay from "./useFlyNoWay";
import useFlyWithWings from "./useFlyWithWings";
import useFlyWithRocket from "./useFlyWithRocket";
export default function useFlyBehaviour(_flyBehaviour) {
  switch (_flyBehaviour) {
    case FLY_BEHAVIOUR.noWay:
      return useFlyNoWay();
    case FLY_BEHAVIOUR.rocket:
      return useFlyWithRocket();
    default:
      return useFlyWithWings();
  }
}
