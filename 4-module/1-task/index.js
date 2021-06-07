function makeFriendsList(friends) {
  let ulTag = document.createElement("ul");
  for (prop of friends) {
    let liTag = document.createElement("li");
    liTag.innerHTML = `${prop.firstName} ${prop.lastName}`
    ulTag.append(liTag);
  }
  return ulTag;
}
