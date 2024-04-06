"use strict";
// Question104:Create a function that generates a random hexa decimal color code
function getRandomHexacolor() {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color;
}
console.log(getRandomHexacolor());
