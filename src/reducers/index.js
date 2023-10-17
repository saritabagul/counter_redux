import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../actions";

export default function counter(state = 0, actions) {
  switch (actions.type) {
    case INCREMENT_COUNTER:
      const upcounter = state + 1;
      return upcounter;
    case DECREMENT_COUNTER:
      if (state < 1) {
        return state;
      }
      const decounter = state - 1;
      return decounter;
    default:
      return state;
  }
}
