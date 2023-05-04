const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

Array.prototype.customSome = function (someCallback = (value, index, array)) {
  for (let i = 0; i < this.length; i++) {
    if (someCallback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

const elementFindSome = array.customSome((value) => value == 50);

console.log(elementFindSome);
