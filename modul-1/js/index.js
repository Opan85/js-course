'use strict'


const adminLogin = 'admin';
const adminPassword = 'password';

const cancel = 'Отменено пользователем!';
const passwordInvalid = 'Доступ запрещен, неверный пароль!';
const passwordValid = 'Добро пожаловать!';

let userName = prompt('Ваш логин:');

if (userName === false) {
   alert(cancel);
} else if (userName === adminLogin) {
   let password = prompt('Ваш пароль:');

   if (password === false) {
       alert (passwordInvalid);
   } else if (password === adminPassword) {
       alert (passwordValid);
   } else {
       alert(passwordInvalid);
   }
} else {
   alert(passwordInvalid);
}