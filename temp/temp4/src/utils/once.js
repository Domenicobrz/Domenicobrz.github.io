let onceMemory = {};

export const once = function (tag) {
  if (!onceMemory[tag]) {
    onceMemory[tag] = true;
    return true;
  }
  return false;
};
