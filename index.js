const array = ["test", 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

Array.prototype.customFind = function (findCallback = (value, index, array)) {
  for (let i = 0; i < this.length; i++) {
    if (findCallback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

const elementFind = array.customFind((value) => value <= 10);

console.log(elementFind);
