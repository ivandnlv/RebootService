function forms() {
  const form1 = document.querySelector('.modals__consult-form'),
    form2 = document.querySelector('.modals__checklist-form'),
    form3 = document.querySelector('.write__form');

  let error = 0;

  //Consult
  form1.addEventListener('submit', (e) => {
    e.preventDefault();
    formSend('.modals__consult-form', '.modals', '.modals__consult-complete');
  });

  //Checklist
  form2.addEventListener('submit', (e) => {
    e.preventDefault();
    formSend('.modals__checklist-form', '.modals', '.modals__checklist-complete');
  });

  //Write
  form3.addEventListener('submit', (e) => {
    e.preventDefault();
    formSend('.write__form', '.write', '.write__form-complete');
  });

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');

    if (input.getAttribute('type') === 'checkbox') {
    } else {
      let errorText = document.createElement('div');
      errorText.classList.add('error__text');
      errorText.innerHTML = `Заполните поле`;
      input.after(errorText);
    }
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  function emailTest(input) {
    return !/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i.test(input.value);
  }

  function formValidate(form) {
    const formReq = form.querySelectorAll('._req');

    formReq.forEach((item) => {
      const input = item;
      formRemoveError(input);

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
        formAddError(input);
        error++;
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
      if (!input.classList.contains('_error')) {
        error = 0;
      }
    });
  }

  async function formSend(formSelector, formParentSelector, formCompleteSelector) {
    const form = document.querySelector(formSelector),
      formParent = document.querySelector(formParentSelector),
      formComplete = document.querySelector(formCompleteSelector),
      str = formParentSelector;

    formValidate(form);

    if (error === 0) {
      let formData = new FormData(form);
      form.classList.add('_sending');
      let response = await fetch('../php/sendmail.php', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        let result = await response.json();
        if (str.includes('modal')) {
          form.reset();
          form.classList.remove('_sending');
          formComplete.classList.remove('modals-hidden');
        } else {
          formComplete.style.display = 'block';
          form.reset();
          form.classList.remove('_sending');
        }
      } else {
        alert('Что-то пошло не так');
        form.classList.remove('_sending');
      }
    } else {
      alert('Заполните поля, выделенные красным');
    }
  }
}

export default forms;
