const delay = async (time = 2000) => {
  return await new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

export default delay;