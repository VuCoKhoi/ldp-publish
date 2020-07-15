const path = (paths, obj) => {
  let val = obj;
  let idx = 0;
  while (idx < paths.length) {
    if (val == null) {
      return;
    }
    val = val[paths[idx]];
    idx += 1;
  }
  // eslint-disable-next-line consistent-return
  return val;
};

export default path;
