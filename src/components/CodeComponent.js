import React from "react";
import { Switch, Link } from "react-router-dom";
import colorthumb from './colorthumb.png';
import matchthumb from './matchthumb.png';
import { GameBody, GameTitle, GameSubs, Navbar, NavA, NavUl, NavLi, H1, BioDiv, Bio, Img, GameContainer, GameCaptions } from './Styled';


function CodePage () {
    return (
<GameBody>
<div class="topnav">
    <Navbar>
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
    <GameTitle> Code </GameTitle>
    <GameContainer>
      <div>
      <a href="https://github.com/JakeAlex15/ColorGuess/blob/main/explanation.html"  target="_blank">
          <Img class="color-thumb-png" src={colorthumb}/>
          <GameSubs> Color Guess </GameSubs>
        </a>
      </div>
      <GameCaptions> 
          My Github link for Color Guess. Included are in-depth //comments for how the javascript works. This is the simpler of the two games to understand. 
          <br /> <br />(Difficulty: 1/10)
        </GameCaptions>
      <div>
      <a href="https://github.com/JakeAlex15/Face-Match/blob/main/matching-game.html" target="_blank">
          <Img class="match-thumb-png" src={matchthumb}/>
          <GameSubs> Face Match </GameSubs>
        </a>
      </div>
      <GameCaptions> 
          Face Match is the more difficult of the two games. Face Match does not
          have comments explaining the javascript, but the Color Guess comments should give you a good introduction of how 
          the basic functions work. 
          <br /> <br />(Difficulty: 2/10)
        </GameCaptions>
      </GameContainer>
      </div>
      </GameBody>
    );
}

export default CodePage;