import React from "react";
import { Switch, Link } from "react-router-dom";
import colorthumb from './colorthumb.png';
import matchthumb from './matchthumb.png';
import snake from './snake.png'
import { GameBody, GameTitle, GameSubs, Navbar, NavA, NavUl, NavLi, H1, BioDiv, Bio, Img, GameContainer, GameCaptions } from './Styled';

function GamePage() {
    return(
      <GameBody>
      <>
    <div>
          <Navbar className="jsgames-nav">
          <NavUl>
                <NavLi> 
                  <Link to="/js-games" passHref><NavA> Home </NavA></Link>
                </NavLi>
                <NavLi> 
                  <Link to="game-page" passHref><NavA> Games </NavA></Link>
                </NavLi>
                <NavLi>
                 <Link to="code-page" passHref><NavA> Code </NavA></Link>
                </NavLi>
            </NavUl>
          </Navbar>
        <H1> JS Gaming </H1> 
      </div>
<GameTitle> Games </GameTitle>
  <GameContainer>
    <div class="color-guess-game" id="color-guess-thumb">
        <Link to="color-guess">
          <Img class="color-thumb-png" src={colorthumb}/>
          <GameSubs> Color Guess </GameSubs>
        </Link>
    </div>
    <GameCaptions> 
      Color Guess is a very simple vanilla javascript game. You will click the button to start the game 
      and the computer will prompt you for a color. Guess the correct color to win the game!
    </GameCaptions>
    <div class="face-match-game" id="face-match-thumb">
        <Link to="snake" target="_blank">
          <Img class="snake-png" src={snake}/>
          <GameSubs> Classic Snake </GameSubs> 
        </Link>
    </div>
    <GameCaptions> 
        Snake is an effortless and retro game beloved by millions ever since gaming became more mainstream. 
        Due to the age of the "Snake" idea, it is also a very uncomplicated game to create. Personally, 
        I am relatively new to React, which is why I decided to create a very simple 'React-style' game.
    </GameCaptions>
    </GameContainer>
    </>
    </GameBody>
    );
}

export default GamePage;