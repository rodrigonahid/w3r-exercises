"use strict";
const Triangle = () => {
    const sideOne = document.querySelector('#side-one');
    const sideTwo = document.querySelector('#side-two');
    const sideThree = document.querySelector('#side-three');
    const button = document.querySelector('#submit');
    button.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(`${sideOne}/${sideTwo}/${sideThree}`);
        const triangleArea = (Number(sideOne.value) + Number(sideTwo.value) + Number(sideThree.value)) / 2;
        const element = document.createElement('span');
        element.innerHTML = `The triangle area is ${triangleArea} <br>`;
        app.appendChild(element);
    });
};
Triangle();
