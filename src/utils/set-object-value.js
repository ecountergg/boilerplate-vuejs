export const __setObjectValue = (obj, val) => {
  Object.keys(obj).forEach(function (index) {
    obj[index] = val;
  });
};
