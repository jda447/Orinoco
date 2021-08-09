"use strict";
//Strict mode makes it easier to write "secure" JavaScript.
//In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

const name = document.getElementById('cameraName');
const price = document.getElementById('price');
const img = document.getElementById('img');
const description = document.getElementById('description');

const addToCart = document.getElementById('addToCart');
let product = {};

