function camelize(str) {
  itemsArray = str.split("");
    let strCamelize;
    itemsArray.forEach((element, index) => {
        element == "-" ? itemsArray.splice(index, 1) && itemsArray.splice(index, 1, itemsArray[index].toUpperCase()) : false;
    });
  console.log(itemsArray);
   return strCamelize = itemsArray.join("");
}
