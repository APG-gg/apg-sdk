interface DispatchObject<T, P = any> {
  type: T;
  payload?: P;
}

export default DispatchObject;