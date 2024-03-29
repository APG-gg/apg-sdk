const randomValue = (min: number, max: number): number => {
  return (Math.random() * (max - min + 1) + min)
}

export default randomValue;