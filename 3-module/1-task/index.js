function namify(users) {
 nameArray = [];
 for (user of users) {
   nameArray.push(user.name);
 }
 return nameArray;
}
