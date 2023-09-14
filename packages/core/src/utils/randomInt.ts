import randomValue from "./randomValue";

const randomInt = (min: number, max: number): number => {
  return Math.floor(randomValue(min, max))
}

export default randomInt;