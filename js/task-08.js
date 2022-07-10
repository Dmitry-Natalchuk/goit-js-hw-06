const form = document.querySelector('.login-form');
//console.log(form)

function formSubmit(event) {
    event.preventDefault();

   /*  const {
       elements :
        { email, password } = event.currentTarget
       } */

    const elements = event.currentTarget.elements;
    //console.log(elements)
    const email = elements.email.value;
    const password = elements.password.value;
    //console.log(password)

    /* if (email.length === 0 || password.length === 0) {
      return alert("Не заповнили форму")
    } */
    if(email.length === 0){
      return alert("Вкажіть email")
    }
    if(password.length === 0) {
      return alert ("Вкажіть пароль")
    }
      
    const formData = new FormData(event.currentTarget);  
    //console.log(formData)
    let formUser = {
        Email: elements.email.value,
        Password: elements.password.value,
    }; 
    
    console.log(formUser);
    event.currentTarget.reset()
  }

  form.addEventListener('submit', formSubmit);