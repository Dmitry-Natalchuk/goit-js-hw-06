

const form = document.querySelector(".login-form")
//console.log(form)


function formSubmit (event) {
    event.preventDefault();
    const {
        elements: { email, password }
      } = event.currentTarget;

      /* if(email.value === "" || password.value === ""){
        return alert ("Заповніть форму реєстрації")
      } */
      if (email.value === "") {
      return alert("Вкажіть email")
      }
      if (password.value === "") {
        return alert ("Не вказали ваш пароль")
      }
      event.currentTarget.reset();
      console.log(`Email : ${email.value} \nPassword : ${password.value}`);
      
}


form.addEventListener("submit",formSubmit)


