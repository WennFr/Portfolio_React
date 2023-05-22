const nodemailer = require('nodemailer');
const { google } = require('google-auth-library');





function validate(event) {

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

function validateName(element) {
  const regEx = /^[A-Za-z\u00C0-\u017F]+(?:[-\s][A-Za-z\u00C0-\u017F]+)?(?:[-\s][A-Za-z\u00C0-\u017F]+)?$/;
  const errorElement = document.getElementById(`error-${element.id}`)

  if (!regEx.test(element.value)) {

    errorElement.innerHTML = `Måste vara ett giltigt namn.`
    return false

  }

  errorElement.innerHTML = ``
  return true

}

function validateEmail(element) {
  const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const errorElement = document.getElementById(`error-${element.id}`)

  if (!regEx.test(element.value)) {

    errorElement.innerHTML = `Måste vara en giltig e-mailadress.`
    return false

  }

  errorElement.innerHTML = ``
  return true

}

function validateComment(element) {
  const regEx = /^(?=.*[A-Za-z])[A-Za-z0-9\såäöÅÄÖ!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{1,500}$/
  const errorElement = document.getElementById(`error-${element.id}`)

  if (!regEx.test(element.value)) {

    errorElement.innerHTML = `Måste vara en giltig kommentar.`
    return false

  }

  errorElement.innerHTML = ``
  return true

}

async function handlePostComment(e) {
  e.preventDefault()
  const errors = []
  const errorMessage = document.getElementById('errorMessage')
  const confirmMessage = document.getElementById('confirmMessage')

  errorMessage.innerHTML = ''
  confirmMessage.innerHTML = ''

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

    }


    try {
        const oauth2Client = new google.auth.OAuth2(
          'CLIENT_ID',
          'CLIENT_SECRET',
          'REDIRECT_URL'
        );
  
        oauth2Client.setCredentials({
          refresh_token: 'REFRESH_TOKEN',
        });
  
        // Generate an access token using the refresh token
        const getAccessToken = async () => {
          try {
            const { res } = await oauth2Client.refreshAccessToken();
            return res.data.access_token;
          } catch (error) {
            console.error('Error refreshing access token:', error);
            throw error;
          }
        };
  
        // Configure Nodemailer transporter with OAuth2 authentication
        const transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            type: 'OAuth2',
            user: 'your-email@gmail.com',
            clientId: 'CLIENT_ID',
            clientSecret: 'CLIENT_SECRET',
            refreshToken: 'REFRESH_TOKEN',
            accessToken: await getAccessToken(),
          },
        });
  
        const mailOptions = {
          from: `${form.email}`,
          to: 'your-email@gmail.com',
          subject: `Contact Form Submission: ${form.name}`,
          text: `${form.comments}`,
        };
  
        // Function to send the email
        const sendEmail = async (mailOptions) => {
          try {
            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
          } catch (error) {
            console.error('Error sending email:', error);
            throw error;
          }
        };
  
        await sendEmail(mailOptions);
        // Handle success...
      } catch (error) {
        errorMessage.innerHTML = 'Something went wrong. Try again later.';
      }
    }
  }

