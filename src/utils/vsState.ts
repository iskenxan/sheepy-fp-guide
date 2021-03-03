const vsCode = (global as any).acquireVsCodeApi();

export const setState = ({ key, value }: { key: string; value: any }) => {
  const previousState = vsCode.getState();
  const state = previousState ? { ...previousState } : {};
  vsCode.setState({ ...state, [key]: value });
};

export const getState = (key: string) => {
  const previousState = vsCode.getState();

  return previousState ? previousState[key] : null;
};
