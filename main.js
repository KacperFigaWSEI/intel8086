const registryInputs = document.querySelectorAll(
  ".register-form > div > input"
);

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
    default:
      console.log("XD");
  }
};

const registerObj = {};

const validateRegisry = (e) => {
  e.preventDefault();
  registryInputs.forEach((register, i) => {
    console.log(register.value, register.dataset.name);
    registerObj[register.dataset.name] = register.value;
    if (!register.value) {
      errorBoxes[i].textContent = errorObj("EMPTY") + register.dataset.name;
    } else if (!/^#[0-9A-F]{6}[0-9a-f]{0,2}$/i.test(register.value)) {
      console.log("truftuut");
      errorBoxes[i].textContent = errorObj("TYPE_ERROR");
    }
  });

  console.log(registerObj);
};

registrySubmit.addEventListener("click", validateRegisry);
