const delay = (callback: () => void, delay: number = 100) => {
  setTimeout(callback, delay);
};

export default delay;