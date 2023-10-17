export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

export function increment(counter) {
  return {
    type: INCREMENT_COUNTER,
    counter
  };
}

export function decrement(counter) {
  return {
    type: DECREMENT_COUNTER,
    counter
  };
}
