import React from "react";
import { Switch, Link } from "react-router-dom";
import { CGNav, CGNavA, CGButton, NavUl, H1,  CGTitle, InstructionsTitle, Instructions } from './Styled';

function ColorGuessing() {
    return(
<>
<div>
        <CGNav>
            <NavUl>
                <li> 
                  <Link passHref to="/js-games"><CGNavA> Home </CGNavA></Link>
                </li>
                <li> 
                  <Link passHref to="game-page"> <CGNavA> Games </CGNavA></Link>
                </li>
                <li> 
                 <Link passHref to="code-page"> <CGNavA> Code </CGNavA></Link>
                </li>
            </NavUl>
        </CGNav>
    </div>
        <div class="container">
            <CGTitle >Guess the Color! </CGTitle>
            <CGButton class="button-success pure-button" onClick={runGame}><strong>Click to Start!</strong></CGButton>
        </div>
        <div class="page-container">
            <InstructionsTitle> Instructions -- </InstructionsTitle>
            <Instructions>
              
                To begin the game, click the 'start' button and type in your guess. <br /> <br />
                the computer will let you know if you guessed the correct color. <br /> <br />
                you have unlimited guesses and you'll be given the final amount of attempts at the end. <br /> <br />
                have fun!
                
            </Instructions>
        </div>
            <footer id="footer"></footer>
    </>
    );
}

const COLORS_ARRAY = ['blue' , 'cyan' , 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];
        
        function runGame() {
            let guess = "";
            let correct = false;
            let numTries = 0;
            const targetIndex = COLORS_ARRAY[Math.floor(Math.random() * COLORS_ARRAY.length)];
            const target = COLORS_ARRAY.indexOf(targetIndex);
            
          do {
                
                guess = prompt('I am thinking of one of these colors:\n\n' + (COLORS_ARRAY)+ '\nWhat color am I thinking of?\n'); 
                if (guess === null) {
                    numTries = ++numTries
                    alert("Thanks for playing, it took you " + numTries + " attempt(s)");
                    return numTries;
                }
           correct = checkGuess(guess, targetIndex)
           console.log(correct)
           if (correct == true) {
            numTries = ++numTries
            document.body.style.background = guess;
               alert("Good work! You got the correct color in " + numTries + " attempt(s)!")
               return;
           } else {
               numTries = ++numTries
               console.log(numTries)
           }
               //alert("Nice work!! You guessed the right answer in" + numTries);
        } while (!correct)
    }
    function checkGuess(guess, target) {
           let correct = false;
            if(!COLORS_ARRAY.includes(guess)) {
                alert("Your guess is not on the list")
            } else if(guess.length > target.length) {
               alert("Your guess is longer than the answer.")
            }else if(guess.length < target.length) {
                alert("Your guess is shorter than the answer.")
            }else {
                if(guess == target) {
                    correct = true;
                    console.log(guess, target)
                    return correct;
                }else {
                    console.log("answer is not correct", guess, target)
                }
                return correct;
               
            }
            return correct;
        }

export default ColorGuessing;



    