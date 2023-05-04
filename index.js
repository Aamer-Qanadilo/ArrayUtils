const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

Array.prototype.customFilter = function (
  filterCallback = (value, index, array),
) {
  const finalArr = [];
  for (let i = 0; i < this.length; i++) {
    if (filterCallback(this[i], i, this)) {
      finalArr.push(this[i]);
    }
  }
  return finalArr;
};

const arr = array.customFilter((value) => value > 50);

console.log(arr);
