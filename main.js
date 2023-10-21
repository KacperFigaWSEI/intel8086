const registryInputs = document.querySelectorAll(
  ".register-form > div > input"
);

const selectedRegisterA = document.querySelector("#selected-register-a");
const selectedRegisterB = document.querySelector("#selected-register-b");
const selectedOperation = document.querySelector("#selected-operation");
const execButton = document.querySelector(".execute");

const registrySubmit = document.querySelector(".submit-register");

const errorBoxes = document.querySelectorAll(".error-message");

const errorObj = (err) => {
  switch (err) {
    case "EMPTY":
      return "Wprowadź wartość dla ";
      break;
    case "TYPE_ERROR":
      return "Błędna wartość, wprwadź wartość w systemie heksadecymalnym";
      break;
  }
};

const registerObj = {};

const validateRegisry = (e) => {
  e.preventDefault();
  registryInputs.forEach((register, i) => {
    console.log(register.value, register.dataset.name);
    registerObj[register.dataset.name] = register.value;
    console.log(register.value);
    if (!register.value) {
      errorBoxes[i].textContent = errorObj("EMPTY") + register.dataset.name;
    } else if (!/^[0-9A-Fa-f]+$/g.test(register.value)) {
      console.log("truftuut");
      errorBoxes[i].textContent = errorObj("TYPE_ERROR");
    } else {
      errorBoxes[i].textContent = "";
    }
  });

  console.log(registerObj);
};

const xchgExecution = (regA, regB) => {
  const _regA = document.querySelector('[data-name="' + regA + '"]');
  const _regB = document.querySelector('[data-name="' + regB + '"]');
  const tempA = _regA.value;

  _regA.value = _regB.value;
  _regB.value = tempA;
};

const MOVexecution = (regA, regB) => {
  const _regA = document.querySelector('[data-name="' + regA + '"]');
  const _regB = document.querySelector('[data-name="' + regB + '"]');
  _regB.value = _regA.value;
};

const execute = () => {
  const operation = selectedOperation.value;
  const regA = selectedRegisterA.value;
  const regB = selectedRegisterB.value;

  switch (operation) {
    case "XCHG":
      xchgExecution(regA, regB);
      break;
    case "MOV":
      MOVexecution(regA, regB);
      break;
  }
  console.log(operation);
};

registrySubmit.addEventListener("click", validateRegisry);
execButton.addEventListener("click", execute);
