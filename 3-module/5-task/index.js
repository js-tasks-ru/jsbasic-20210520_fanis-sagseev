function getMinMax(str) {
  let arr = str.split(" ").join();
  arr = arr.split(",");
  arr = arr.filter((item) => Number(item));
  let result = {min:Math.min(...arr),max:Math.max(...arr)};
  return result;
  console.log(arr);
}
