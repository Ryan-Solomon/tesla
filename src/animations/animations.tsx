export const titleAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 2 } },
};

export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
