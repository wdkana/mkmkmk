const animations = {
  off: {
    opacity: 0,
  },
  desktopOn: {
    y: 0,
    opacity: 1,
  },
  destopOff: {
    y: "-20%",
    opacity: 0,
  },
  destopOffBottom: {
    y: "20%",
    opacity: 0,
  },
  transition1: {
    duration: 1.5,
    delay: 0.2,
    type: "spring",
    bounce: 0.2,
  },
};

export {animations}