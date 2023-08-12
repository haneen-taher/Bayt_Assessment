var obj = {
  id: 1,
  name: "Aya",
  age: 25,
  address: {
    street: "XYZ",
    buildingNumber: 10,
  },
  department: {
    id: 1,
    text: "Sales",
  },
};
function contains(obj, targetValue) {
  return Object.values(obj).some((value) => {
    if (typeof value === "object") {
      return contains(value, targetValue);
    } else {
      return value === targetValue;
    }
  });
}

console.log("Operations: ", contains(obj, "Operations"));
console.log("Aya, Ahmad: ", contains(obj, "Aya", "Ahmad"));
console.log("Aya, 25: ", contains(obj, "Aya", 25));
console.log("XYP, 101: ", contains(obj, "XYP", 101));
