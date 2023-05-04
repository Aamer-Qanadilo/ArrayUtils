const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const mapCallback = (value, index, array) => {
  console.log(value);
};

Array.prototype.customMap = function (mapCallback = (value, index, array)) {
  const finalArr = [];
  for (let i = 0; i < this.length; i++) {
    finalArr.push(mapCallback(this[i], i, this));
  }
  return finalArr;
};

const arr = array.customMap((value) => value * 2);

console.log(arr);
