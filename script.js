// Tracks which exercises have been run, to drive the progress rail
const completed = new Set();

function markDone(exerciseId) {
  completed.add(exerciseId);
  document.getElementById(exerciseId).classList.add("done");
  updateProgress();
}

function updateProgress() {
  const total = 5;
  const done = completed.size;
  document.getElementById("progressCount").textContent = `${done} / ${total}`;
  document.getElementById("progressFill").style.width = `${(done / total) * 100}%`;
}

// Helper: writes to the on-page output box and marks it as filled
function setOutput(id, text) {
  let el = document.getElementById(id);
  el.textContent = "> " + text.replaceAll("\n", "\n> ");
  el.classList.add("filled");
}

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

  setOutput("mdasResult",
    `Sum: ${add}\nDifference: ${sub}\nProduct: ${mul}\nQuotient: ${div}\nRemainder: ${mod}`);
  markDone("ex01");
}

// 2. Age Calculator
function ageCalculator() {
  let birthYear = Number(document.getElementById("birthYear").value);
  let thisYear = new Date().getFullYear();
  let age = thisYear - birthYear;
  let ageIn10 = age + 10;

  console.log("Age now: " + age, "Age in 10 years: " + ageIn10);

  setOutput("ageResult", `Age now: ${age}\nAge in 10 years: ${ageIn10}`);
  markDone("ex02");
}

// 3. Circumference of a Circle
function circleCircumference() {
  let radius = Number(document.getElementById("radius").value);
  let circumference = 2 * Math.PI * radius;

  console.log("Circumference: " + circumference.toFixed(2));

  setOutput("circleResult", `Circumference: ${circumference.toFixed(2)}`);
  markDone("ex03");
}

// 4. Celsius to Fahrenheit
function celsiusToFahrenheit() {
  let celsius = Number(document.getElementById("celsius").value);
  let fahrenheit = (celsius * 9/5) + 32;

  console.log(celsius + "C = " + fahrenheit + "F");

  setOutput("tempResult", `${celsius}°C = ${fahrenheit}°F`);
  markDone("ex04");
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

  setOutput("gradeResult", `Letter Grade: ${result}`);
  markDone("ex05");
}
