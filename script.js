// 1. MDAS Calculator
function mdasCalculator() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);

  let add = a + b;
  let sub = a - b;
  let mul = a * b;
  let div = a / b;
  let mod = a % b;

  console.log("Sum: " + add, "Difference: " + sub, "Product: " + mul, "Quotient: " + div, "Remainder: " + mod);

  document.getElementById("mdasResult").innerText =
    `Sum: ${add}\nDifference: ${sub}\nProduct: ${mul}\nQuotient: ${div}\nRemainder: ${mod}`;
}

// 2. Age Calculator
function ageCalculator() {
  let birthYear = Number(document.getElementById("birthYear").value);
  let thisYear = new Date().getFullYear();
  let age = thisYear - birthYear;
  let ageIn10 = age + 10;

  console.log("Age now: " + age, "Age in 10 years: " + ageIn10);

  document.getElementById("ageResult").innerText =
    `Age now: ${age}\nAge in 10 years: ${ageIn10}`;
}

// 3. Circumference of a Circle
function circleCircumference() {
  let radius = Number(document.getElementById("radius").value);
  let circumference = 2 * Math.PI * radius;

  console.log("Circumference: " + circumference.toFixed(2));

  document.getElementById("circleResult").innerText =
    `Circumference: ${circumference.toFixed(2)}`;
}

// 4. Celsius to Fahrenheit
function celsiusToFahrenheit() {
  let celsius = Number(document.getElementById("celsius").value);
  let fahrenheit = (celsius * 9/5) + 32;

  console.log(celsius + "C = " + fahrenheit + "F");

  document.getElementById("tempResult").innerText =
    `${celsius}°C = ${fahrenheit}°F`;
}

// 5. Grade Scheme
function gradeScheme(grade) {
  if (grade >= 90) return "A";
  if (grade >= 80) return "B";
  if (grade >= 70) return "C";
  if (grade >= 60) return "D";
  return "F";
}

function checkGrade() {
  let grade = Number(document.getElementById("grade").value);
  let result = gradeScheme(grade);

  console.log("Letter Grade: " + result);

  document.getElementById("gradeResult").innerText = `Letter Grade: ${result}`;
}