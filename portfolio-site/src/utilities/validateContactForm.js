
export function validate(event) {

  switch (event.target.id) {

    case 'name':
      validateName(event.target)
      break;

    case 'email':
      validateEmail(event.target)
      break;

    case 'comments':
      validateComment(event.target)
      break;
  }

}

export function validateName(element) {
  const regEx = /^[A-Za-z\u00C0-\u017F]+(?:[-\s][A-Za-z\u00C0-\u017F]+)?(?:[-\s][A-Za-z\u00C0-\u017F]+)?$/;
  const errorElement = document.getElementById(`error-${element.id}`)

  if (!regEx.test(element.value)) {

    errorElement.innerHTML = `Måste vara ett giltigt namn.`
    return false

  }

  errorElement.innerHTML = ``
  return true

}

export function validateEmail(element) {
  const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const errorElement = document.getElementById(`error-${element.id}`)

  if (!regEx.test(element.value)) {

    errorElement.innerHTML = `Måste vara en giltig e-mailadress.`
    return false

  }

  errorElement.innerHTML = ``
  return true

}

export function validateComment(element) {
  const regEx = /^(?=.*[A-Za-z])[A-Za-z0-9\såäöÅÄÖ!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{1,500}$/
  const errorElement = document.getElementById(`error-${element.id}`)

  if (!regEx.test(element.value)) {

    errorElement.innerHTML = `Måste vara en giltig kommentar.`
    return false
  }

  errorElement.innerHTML = ``
  return true
}

export async function handlePostComment(e) {
  e.preventDefault()
  const errors = []
  const errorMessage = document.getElementById('errorMessage')
  const confirmMessage = document.getElementById('confirmMessage')


  for (let element of e.target) {

    if (element.required) {
      const errorElement = document.getElementById(`error-${element.id}`)

      if (element.value.length === 0) {
        errorElement.innerHTML = `${element.id} is required.`
        errors.push(false)
      }
      else {
        errorElement.innerHTML = ``

        switch (element.id) {
          case 'name':
            errors.push(validateName(element))
            break;
          case 'email':
            errors.push(validateEmail(element))
            break;
          case 'comments':
            errors.push(validateComment(element))
            break;
        }
      }
    }
  }

  if (!errors.includes(false)) {

    const form = {
      name: e.target['name'].value,
      email: e.target['email'].value,
      comments: e.target['comments'].value

    };
    console.log('Form submitted:', form);

    const mailtoLink = `mailto:frederick.wennborgh@gmail.com?subject=Contact Form Submission:${form.name} &body=${encodeURIComponent(
      `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0AComments: ${form.comments}`
    )}`;

    window.location.href = mailtoLink;
  }





}

