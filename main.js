console.log("hello");

const registryInputs = document.querySelectorAll(".register-form > input");

const registrySubmit = document.querySelector(".register-form > button");

const errorBoxes = document.querySelectorAll(".error-message");

const validateRegisry = (e) => {
  e.preventDefault();
  registryInputs.forEach((register, i) => {
    console.log(register.value, register.dataset.name);
    registerObj[register.dataset.name] = register.value;
    if (!register.value) {
      console.log(errorBoxes[i]);
    }
  });

  console.log(registerObj);
};

registrySubmit.addEventListener("click", validateRegisry);
