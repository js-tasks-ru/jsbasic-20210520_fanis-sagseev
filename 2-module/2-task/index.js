function isEmpty(obj) {
  for(let prop in obj){
    if (obj[prop] || obj[prop] == undefined) {
      return false;
    }
  }
  return true;
}
