// Write your solution in this file!
var customerName = "bob";

function CustomerName () {
    customerName = "bob";
    return customerName;
}

function upperCaseCustomerName () {
    customerName = customerName.toUpperCase();
    return customerName;
}
function setBestCustomerName () {
    NaN = customerName.setBestCustomerName();
    return customerName;
}

const var1 = 1;
function outerFunc(var2 = 2) {
  const var3 = 2;
  function innerFunc() {
    const var4 = 4;
  }
  return var1 + var2;
}