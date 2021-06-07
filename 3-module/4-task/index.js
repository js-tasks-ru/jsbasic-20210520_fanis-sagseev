function showSalary(users, age) {
  let findUsers = users.filter((user) => user.age <= age );
  let result = findUsers.map((user) => user.name + ", " + user.balance).join("\n");
  return result;
}
