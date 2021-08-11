import React from "react";
import { Switch, Link } from "react-router-dom";
import colorthumb from './colorthumb.png';
import snake from './snake.png'
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
      <a href="https://github.com/JakeAlex15/Classic-Snake" target="_blank">
          <Img class="snake-png" src={snake}/>
          <GameSubs> Classic Snake </GameSubs>
        </a>
      </div>
      <GameCaptions> 
          Snake is the more difficult of the two games to create. Snake uses slightly more advanced concepts, but I did try to keep it as simple as possible. This game can be created more efficiently by cutting out the simpler aspects, but will inheritely lose the beginner aspects of Javascript.
          <br /> <br />(Difficulty: 2/10)
        </GameCaptions>
      </GameContainer>
      </div>
      </GameBody>
    );
}

export default CodePage;