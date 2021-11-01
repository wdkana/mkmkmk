function myLoader(load) {
  return `${load.src}?w=${load.width}&q=${load.quality || 75}`;
}

export { myLoader };
