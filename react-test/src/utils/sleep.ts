const sleep = async (time: number, result: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, time);
  });
};

export { sleep };
