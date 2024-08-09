// hamburger menu 
const hamburgerButton = document.getElementById('hamburger')
const navbar =document.getElementById('navbar')

function toggleButton(){
    navbar.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)


// To get started, let's received the form element from our document.
const CPayment = document.getElementById("#CPayment")

// Now let's grab the onsubmit event (that will run when we press the submit button).
//  And add our on callback handler to it.
CPayment.onsubmit = (ev) => {
    // PreventDefault will prevent the page from changing.
    ev.preventDefault();
    // All code in here will be executed when we press the submit button.

    const FullName = CPayment.elements.nameItem("fullname").value
    const PhoneNumber = CPayment.elements.nameItem("phonenumber").value
    const Address = CPayment.elements.nameItem("address").value
    const CardNumber = CPayment.elements.nameItem("cardnumber").value
    const ExpireDate = CPayment.elements.nameItem("expiredate").value
    const CC = CPayment.elements.nameItem("cc").value

    console.log("FullName: " + fullname)
    console.log("PhoneNumber: " + phonenumber)
    console.log("Address: " + address)
    console.log("CardNumber: " + cardnumber)
    console.log("ExpireDate: " + expiredate)
    console.log("CC: " + cc)
}

// To get started, let's received the form element from our document.
const Signup = document.getElementById("#Signup")

// Now let's grab the onsubmit event (that will run when we press the submit button).
//  And add our on callback handler to it.
Signup.onsubmit = (ev) => {
    // PreventDefault will prevent the page from changing.
    ev.preventDefault();
    // All code in here will be executed when we press the submit button.

    const emailAddress = Signup.elements.nameItem("emailAddress").value
    const username = Signup.elements.nameItem("username").value
    const password = Signup.elements.nameItem("password").value

    console.log("Email Address: " + emailAddress)
    console.log("Username:  " + username)
    console.log("Password: " + password )

}

// To get started, let's received the form element from our document.
const Login = document.getElementById("#Login")
// Hamburger 

const bar = document.getElementById('bar');
const close = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('activate');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// Now let's grab the onsubmit event (that will run when we press the submit button).
//  And add our on callback handler to it.
Login.onsubmit = (ev) => {
    // PreventDefault will prevent the page from changing.
    ev.preventDefault();
    // All code in here will be executed when we press the submit button.

    const emailAddress = Login.elements.nameItem("emailAddress").value
    const password = Login.elements.nameItem("password").value


    console.log("EmailAddress:  " + emailAddress)
    console.log("Password:  " + password)
}

// To get started, let's received the form element from our document.
const Contact = document.getElementById("#Contact")

// Now let's grab the onsubmit event (that will run when we press the submit button).
//  And add our on callback handler to it.
Contact.onsubmit = (ev) => {
    // PreventDefault will prevent the page from changing.
    ev.preventDefault();
    // All code in here will be executed when we press the submit button.

    const name = Contact.elements.nameItem("name").value
    const emailAddress = Contact.elements.nameItem("emailAddress").value
    const message = Contact.elements.nameItem("message").value


    console.log("Name:  " + name)
    console.log("EmailAdress:  " + emailAddress)
    console.log("Message:  " + message)
}

BuyButton.addEventListener("click",()=>{
    Payment.style.display="flex"
})

close.addEventListener("click",()=> {
    payment.style.display="flex"
})