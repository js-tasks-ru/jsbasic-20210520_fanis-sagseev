function sumSalary(salaries) {
  let pay = 0;
  
  for(let prop in salaries) {
    let salaryValue = salaries[prop];
    if (isFinite(salaryValue)) {
      pay += salaryValue;
    }
  }
  return pay;
}
