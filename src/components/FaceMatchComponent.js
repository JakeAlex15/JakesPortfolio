import React from "react";
import { GameBody } from "./Styled";

function startGame() {
return (
<>
<div>
        <h5 className="faceMatchIntructions">To play the game, simply click the extra smiley face on the left side on the screen.<br />
        As the game progresses there will be an extra smiley face added each round. <br />
        However, there will only ever be ONE extra smiley face to click on.
        </h5>
<div className="button-div">
    <button className="playFaceMatch" onClick={generateFaces}>
        Play
    </button>
    </div>
</div>
    <div class="halves" id="leftSide"></div>
    <div class="halves" id="rightSide"></div>
    </>
);
}

let numberOfFaces = 5;

function generateFaces(event){
    const theLeftSide = document.getElementById('leftSide');
    const theRightSide = document.getElementById('rightSide');
    for (let i = 0; i < numberOfFaces; i++) {
        let face = document.createElement('img');
        const randomTop = Math.floor((Math.random() * 400) + 1);
        const randomLeft = Math.floor((Math.random() * 400) + 1);
        face.style.top = randomTop + 'px';
        face.style.left = randomLeft + 'px';
        face.src = 'images/smile.png';
        theLeftSide.appendChild(face);
    }
    const leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);
    theLeftSide.lastChild.addEventListener('click' , nextLevel);
    document.body.addEventListener('click', gameOver, true); //whenever anything within the body is clicked, the gameOver function runs. Fix is to have the gameOver function run when anything BUT the extra smiley (last child) is clicked. Otherwise, just run the nectLevel function
    // theLeftSide.firstElementChild.addEventListener('click' , gameOver);
}

function nextLevel(event) { 
    const theLeftSide = document.getElementById('leftSide');
    const theRightSide = document.getElementById('rightSide');
    event.stopPropagation();
    numberOfFaces += 5;
    while (theLeftSide.firstElementChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }
    while (theRightSide.firstElementChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }
    generateFaces();
}

function gameOver(event) {
    const theLeftSide = document.getElementById('leftSide');
    alert('Try Again!');
    theLeftSide.lastChild.removeEventListener('',nextLevel);
    document.body.removeEventListener('',gameOver);
} 

export default startGame;
