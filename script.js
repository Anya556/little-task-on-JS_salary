let calculateSalary = function (grossSalary) {
  let percent = 0.65;
  if (grossSalary >= 100000) {
    percent = 0.55;
  }
  let netSalary = Math.round(grossSalary*percent);
  return(netSalary);
};
console.log(calculateSalary(40000));
console.log(calculateSalary(100000));

/* Technical task

 I need a program that from the "dirty" salary (salary before taxes) will calculate the approximate "clean" salary (which is issued to the paws).

Design the program as a function calculateSalary with one parameter — the value of the dirty salary. The function must return the net salary.

I don’t need much precision, we just assume that 35% of the dirty salary is taxes, and if the dirty salary is greater than or equal to 100 thousand, then taxes are already 45%.

*/

