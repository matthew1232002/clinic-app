// const form = document.querySelector('.form');
// const firstName = document.querySelector('#firstName');
// const lastName = document.querySelector('#lastName');
// const email = document.querySelector('#email');
// const password = document.querySelector('#password');
// const password2 = document.querySelector('#password2');
// function isValid(first, last, email, password, password2) {
//     let state = true;
//     const inputs = [first, last, email, password, password2];
//     const inputsArray = inputs.filter(input => input !== null);
//     for (let input of inputsArray) {
//         if (input.value.trim() === '') {
//             // this.setError(this.input, 'Field cannot be blank')
//             state = false;
//         }
//     }
//     if (state) {
//         let arrValues = [];
//         for (let input of inputsArray) {
//             // deleteErrorClass(input)
//             arrValues.push(input)
//         }
//         console.log(arrValues)
//         return arrValues
//         // handler(arrValues)
//         // resetInputs(inputsArray)
//     }
// }
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     isValid(firstName,lastName, email, password, password2)
// })

// //First Name validation
// if (this._firstNameValue === '') {
//     this.setError(this.firstName, 'First name cannot be blank')
// }
//
// if (this._firstNameValue) {
//     this.deleteErrorClass(this.firstName)
//     handler(this._firstNameValue)
//     this._resetFirstName()
// }
// //Last Name validation
// if (this._lastNameValue === '') {
//     this.setError(this.lastName, 'Last name cannot be blank')
// }
//
// if (this._lastNameValue) {
//     this.deleteErrorClass(this.lastName)
//     handler(this._lastNameValue)
//     this._resetLastName()
// }
// //Email validation
// if (this._emailValue === '') {
//     this.setError(this.email, 'Email cannot be blank')
// }
//
// if (this._emailValue) {
//     this.deleteErrorClass(this.email)
//     handler(this._emailValue)
//     this._resetEmail()
// }
// //Password validation
// if (this._passwordValue === '') {
//     this.setError(this.password, 'Password cannot be blank')
// }
//
// if (this._passwordValue) {
//     this.deleteErrorClass(this.password)
//     handler(this._passwordValue)
//     this._resetPassword()
// }
// //Confirm Password validation
// if (this._password2Value === '') {
//     this.setError(this.password2, 'Password cannot be blank')
// } else if (this._passwordValue !== this._password2Value) {
//     setErrorFor(password2, 'Passwords does not match');
// }
// if (this._password2Value) {
//     this.deleteErrorClass(this.password2)
//     handler(this._password2Value)
//     this._password2Value()
// }