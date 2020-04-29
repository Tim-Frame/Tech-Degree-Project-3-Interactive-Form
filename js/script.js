
//Global variables declared
const form = document.querySelector("form");
const jobTitle = document.getElementById('title');
const otherJobRole = document.getElementById('other-title');
const colorDiv = document.getElementById('colors-js-puns')
const color = document.getElementById('color');
const design = document.getElementById('design');
const themes = color.querySelectorAll('option[value]');
const activities = document.querySelector('.activities');
let totalCost = 0;
const checkBox = document.querySelectorAll('.activities input')
const costDiv = document.createElement('div');
const payment = document.getElementById('payment');
const paymentOptions = payment.querySelectorAll('option[value]');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
//const name = document.querySelector('fieldset legend');


//Function below focuses on the 'Name' text field in index.html
function nameFocus() {
  document.getElementById('name').focus();
}

nameFocus()

/* Styling below disbales the 'Your Job Role' text input field while
javascript is active and disables when it is not. Tested in browser */
otherJobRole.style.display = "none";

title.addEventListener('change', (e) => {
const select = e.target;
if ( select.value === "other"){
  otherJobRole.style.display = 'block';
} else {
  otherJobRole.style.display = 'none';
}
})





const colorMessage = document.createElement('p');
const colorMessageLocation = color.previousElementSibling
colorMessage.textContent = 'Please select a T-shirt theme';
design.append(colorMessage);

//Sets the color select box to hidden
colorDiv.hidden = true;

/*The eventListner below listens for changes in the design select menu. when
a user selects the 'js Puns t shirts' the color select menu appears and only they
conflourblue, darkslategrey and gold tshirt options are visible. If the Users
selects the 'heart js' theme the only visible color options are tomato, steeleblue
and dimgrey. The selectIndex of the color menu default is chhanged to tomato. */
design.addEventListener('change', (e) => {
  select = e.target;
  if ( select.value === "js puns"){
    colorDiv.hidden = false
    for (let i = 0; i < themes.length; i += 1 ){
        color.selectedIndex = 0;
        themes[0].hidden = false;
        themes[1].hidden = false;
        themes[2].hidden = false;
        themes[3].hidden = true;
        themes[4].hidden = true;
        themes[5].hidden = true;
      }
    } else if(select.value === "heart js"){
      colorDiv.hidden = false;
      color.selectedIndex = 3;
        for(let i = 0; i < themes.length; i += 1){
          themes[0].hidden = true;
          themes[1].hidden = true;
          themes[2].hidden = true;
          themes[3].hidden = false;
          themes[4].hidden = false;
          themes[5].hidden = false;
        }
      } else {
        colorDiv.hidden = true;
      }
});

// appending text to div displaying running cost total associated to Activities checkboxes
costDiv.textContent = 'Total cost $' + totalCost;
activities.append(costDiv);

/* EventListner below listens for when a user checks a check box in the
activities section of the page. Firstly an activity is selected and the cost of that
activity is added to the 'costDIV' total. Secondly the selected activity is
compared to the other activity checkboxes using a condtional statemnt and for loop
to see if the selected activity conflicts with the date and time of any other
checkbox activities. If so the activity the selected activity conflicts with is
disabled. */
activities.addEventListener('change', (e) => {
const cost = parseInt(e.target.getAttribute('data-cost'));
const click = e.target;
const checkType = click.getAttribute('data-day-and-time')

//condtional statemnet: adding amount to cost div if box is checked and remving amount if the box is unchecked
if (click.checked) {
totalCost += cost;
} else {
totalCost -= cost;
}

/*For loop and condtional statement testing if activies conflict when a check box
in the activity is selected*/
for( let i = 0; i < checkBox.length; i += 1){
  const checkBoxType = checkBox[i].getAttribute('data-day-and-time');
  if( checkType === checkBoxType && click !== checkBox[i] ){
    if (click.checked){
    checkBox[i].disabled = true;
  } else {
    checkBox[i].disabled = false;
    }
  }
}
costDiv.textContent = 'Total cost $' + totalCost;
});

//hides  'paypal' and 'bitcoin' div
paypal.hidden = true;
bitcoin.hidden = true;

//sets credit card as selectedIndex in payment menu
payment.selectedIndex = 1;

//Hides 'select payment method'
const selectPayment = payment.querySelector('option[value="select method"]');
selectPayment.hidden = true;

/* event listner below listens for user to select a payment method. If User
selects 'credit card', the 'paypal' and 'bitcoin' div are hidden. If 'PayPal
is selected 'paypal is made visible, 'credit card' and 'bitcoin' are hidden and
lastly if user selects bitcoin the 'credit card' and 'paypal' divs are hidden*/
payment.addEventListener('change', (e) => {
  if ( e.target.value === "credit card"){
      creditCard.hidden = false;
      paypal.hidden = true;
      bitcoin.hidden = true;
  } else if ( e.target.value === "paypal"){
      paypal.hidden = false;
      creditCard.hidden = true;
      bitcoin.hidden = true;
  } else if (e.target.value === "bitcoin"){
      bitcoin.hidden = false;
      creditCard.hidden = true;
      paypal.hidden = true;
  } else {
      creditCard.hidden = false;
      bitcoin.hidden = true;
      paypal.hidden = true;
    }
});

/* The following code blocks are creating 6 differnt p class elements, adding textContent
to the newly created elements, appending each p element to a differnt location in the DOM.
Each p element is an error message called when a form element is invaild*/

//Name error message
const name = document.getElementById('name');
const nameLabel = name.previousElementSibling;
const nameError = document.createElement('p');
nameError.textContent = 'Please enter a name'
nameError.style.color = "rgb(143, 51, 16)";
nameLabel.appendChild(nameError);
nameError.hidden = true;

//Email Error message
const mail = document.getElementById('mail');
const mailLabel = mail.previousElementSibling;
const mailError = document.createElement('p');
mailError.textContent = 'Please enter a vaild email'
mailError.style.color = "rgb(143, 51, 16)";
mailLabel.appendChild(mailError);
mailError.hidden = true;

//Activites error message
const activitiesError = document.createElement('p');
activitiesError.textContent = 'Please select at least one activity'
activitiesError.style.color = "rgb(143, 51, 16)";
activities.appendChild(activitiesError);
activitiesError.hidden = true;

 //Credit card number error message
const creditCardNumber = document.getElementById('cc-num');
const creditCarrdErrorLocation = creditCardNumber.previousElementSibling;
const creditCardNumberError = document.createElement('p');
creditCardNumberError.textContent = 'Please enter a credit card number between 13-16 digits'
creditCardNumberError.style.color = "rgb(143, 51, 16)";
creditCarrdErrorLocation.append(creditCardNumberError);
creditCardNumberError.hidden = true;

//Credit card zipcode error message
const zipCode = document.getElementById('zip');
const zipCodeErrorLocation = zipCode.previousElementSibling;
const zipCodeError = document.createElement('p');
zipCodeError.textContent = 'Please enter a 5 digit zipcode'
zipCodeError.style.color = "rgb(143, 51, 16)";
zipCodeErrorLocation.appendChild(zipCodeError);
zipCodeError.hidden = true;

//Credit card CVV error message
const cvv = document.getElementById('cvv');
const cvvErrorLocation = cvv.previousElementSibling;
const cvvError = document.createElement('p');
cvvError.textContent = 'Please enter a 3 digit CVV number'
cvvError.style.color = "rgb(143, 51, 16)";
cvvErrorLocation.appendChild(cvvError);
cvvError.hidden = true;

//Valdates name text field to make sure user has entered a name and logs message if incorrect.
const nameValidator = () => {
  const nameVaule = name.value;
    if(nameVaule.length > 0){
      nameError.hidden = true;
      return true;
    } else {
      nameError.hidden = false;
      return false;
  }
}

//Validates email address entered by user in email field and logs error message if the there is no email .
const emailValidator = () => {
  const email = document.getElementById('mail');
  const emailVaule = email.value;
  const regexTest = /^[^@]+@[a-z]+\.[a-z]+$/i.test(emailVaule)
    if (regexTest === true){
      mailError.hidden = true;
      return true;
    } else {
      mailError.hidden = false;
      return false;
    }
}

//Checks to make sure at least one activity checkbox has been selected by user. If not error message is given to user.
const activitiesValidator = () => {
    if (totalCost  > 0){
      activitiesError.hidden = true;
      return true;
  } else {
      activitiesError.hidden = false;
      return false;
    }
}

//Checks to see if user has entered a credit card number between 13-16 digits. If not error message is supplied to the user.
const creditCardNumberValidator = () =>{
  const creditCardNumberValue = creditCardNumber.value;
  const regexTest = /^\d{13,16}$/.test(creditCardNumberValue);
    if(regexTest === true){
      creditCardNumberError.hidden = true;
      return true;
    } else {
      creditCardNumberError.hidden = false;
      return false;
    }
}

//Checks to see if a 5 digit zipcode has been eneterd by user. If not error message is supplied to user.
const zipCodeValidator = () => {
  const zipCodeValue = zipCode.value;
  const regexTest = /^\d{5}$/.test(zipCodeValue);
    if(regexTest === true){
      zipCodeError.hidden = true;
      return true;
    } else {
      zipCodeError.hidden = false;
      return false;
    }
}

//Checks to see if a 3 digit cvv has been entered by user. If not a error message is suppled to user.
const cvvValidator = () => {
  const cvvValue = cvv.value;
  const regexTest = /^\d{3}$/.test(cvvValue);
    if(regexTest === true){
      cvvError.hidden = true;
      return true;
    } else {
      cvvError.hidden = false;
      return false;
    }
}

/*The event listner below checks name, email, activity, credit card number, credit card zipCodeError
and credit card cvv have been entered. All the areas a tested with an if/else statement. If any areas
returns a false value, the preventDefault() method is called and the form will not be submitted. The
fields that have not been correctly completed will be supplied error messages*/
form.addEventListener('submit', (e) => {
const paymentValue = payment.value;
    if(paymentValue === 'credit card'){
      creditCardNumberValidator();
      zipCodeValidator();
      cvvValidator();
      if( creditCardNumberValidator() === false || zipCodeValidator() === false || cvvValidator() === false){
          e.preventDefault();
        }
      }
    nameValidator();
    emailValidator();
    activitiesValidator();
    if(nameValidator() !== true || emailValidator() !== true || activitiesValidator() !== true){
      e.preventDefault();
    }
});

//Realtime name validation
name.addEventListener('blur', () =>{
  nameValidator();
});

//Realtime email validation
mail.addEventListener('blur', () =>{
  emailValidator();
});

//Realtime activities validation
activities.addEventListener('mouseover', () => {
  activitiesValidator();
});

//Realtime credit card number validation
creditCardNumber.addEventListener('blur', () => {
  creditCardNumberValidator();
});

//Realtime zipcode validation
zipCode.addEventListener('blur', () => {
  zipCodeValidator();
})

//Realtime cvv validation
cvv.addEventListener('blur', () => {
  cvvValidator();
})
