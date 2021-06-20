import styled from "styled-components";

// REVIEW JSGames Stylings

export const Body = styled.div`
    background: rgb(7, 0, 31);
    height: 100vh;
    width: 100%;
    overflow: hidden;
        @media only screen and (max-width: 480px) {
            overflow: hidden;
            height: 100vh;
            width: 100%;
        }
        @media only screen and (min-width: 481px) and (max-width: 540px) {
            height: 200vh
        }
        @media only screen and (min-width: 600px) and (max-width: 768px) {
            height: 200vh;
            overflow: hidden;
        }
        @media only screen and (min-width: 769px) and (max-width: 1024px) {
          overflow: hidden;
          height: 200vh;
        }
`;

export const Navbar = styled.nav`
    width: 65%;
    margin-left: 24rem;
    height: 4em;
    background-color: rgb(7, 0, 31);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
`;

export const NavUl = styled.ul`
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    border: 0;
        @media only screen and (max-width: 480px) {
            display: none;
        }
        @media only screen and (min-width: 481px) and (max-width: 540px) {
            display: none;
        }   
        @media only screen and (min-width: 600px) and (max-width: 768px) {
          margin-right: 4rem;
        }
        @media only screen and (min-width: 769px) and (max-width: 1024px) {
          margin-left: 40rem;
        }
`;

export const NavLi = styled.li`
    text-align: center;
    margin: 8rem;
`;

export const NavA = styled.a`
    color: rgb(255, 208, 0);
    display: flex;
    flex-direction: row;
    text-shadow: 2px black;
    font-size: 2rem;
    line-height: 1em;
    font-family: 'Source Code Pro', monospace;
    &:hover {
        text-decoration: underline;
    }
        @media only screen and (max-width: 480px) {
            color: white;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
            display: block;
        }
        @media only screen and (min-width: 769px) and (max-width: 1024px) {
         font-size: 5rem;
         margin-top: 4rem;
        }
`;  

export const H1 = styled.h1`
    text-align: left;
    margin-top: -2.4em;
    padding: 1em;
    font-size: 3em;
    color: rgb(255, 208, 0);
    font-family: 'Source Code Pro', monospace;
    text-shadow: 4px 2px rgb(0, 0, 0);
        @media only screen and (max-width: 480px) {
            font-size: 2rem;
        }
        @media only screen and (min-width: 600px) and (max-width: 768px) {
          margin-left: -2rem;
        }
        @media only screen and (min-width: 769px) and (max-width: 1024px) {
         margin-left: 8rem;
         font-size: 5rem;
         margin-top: -8.5rem;
        }
`;

export const BioDiv = styled.div`
    text-align: center;
    margin-top: 6rem;
        @media only screen and (max-width: 480px) {
            margin-top: 2rem;
        }
`;

export const Bio = styled.h2`
    font-size: 1.5rem;
    text-shadow: none;
    max-width: 45rem;
    margin: auto;
    font-family: 'Source Code Pro', monospace;
    text-align: center;
    color: rgb(255, 208, 0);
        @media only screen and (max-width: 480px) {
            max-width: 20rem;
            font-size: 1.5rem;
        }
        @media only screen and (min-width: 481px) and (max-width: 540px) {
            font-size: 3rem;
        }
        @media only screen and (min-width: 600px) and (max-width: 768px) {
            max-width: 50rem;
            font-size: 3.5rem;
        }
        @media only screen and (min-width: 769px) and (max-width: 1024px) {
            max-width: 60rem;
            font-size: 4.5rem;
            margin-top: 10rem;
        }
    `;

        // GAME COMPONENT   

export const GameBody = styled.div`
    background: rgb(7, 0, 31);
    height: 110vh;
    width: 100%;
        @media only screen and (max-width: 480px) {
            height: 100vh;
            width: 100%;
            overflow-x: hidden;
        }
        @media only screen and (min-width: 481px) and (max-width: 540px) {
            height: 100vh;
            width: 100%;
            overflow-x: hidden;
        }
        @media only screen and (min-width: 600px) and (max-width: 768px) {
            height: 100vh;
            width: 100%;
            overflow-x: hidden;
        }
        @media only screen and (min-width: 769px) and (max-width: 1024px) {
            height: 100vh;
            width: 100%;
            overflow-x: hidden;
        }
`;
    

export const GameTitle = styled.h2`
    text-align: center;
    color: rgb(255, 208, 0);
    text-shadow: 2px 2px black;
    font-size: 50px;
    font-family: 'Source Code Pro', monospace;
    margin-top: -2rem;
    `;

export const GameContainer = styled.div`
    display: grid;
    grid-template-columns: 20rem auto;
    column-gap: 2rem;
    padding-left: 5rem;
    padding-right: 5rem;
    margin: 3.5rem 5rem auto 5rem;
        @media only screen and (max-width: 480px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        @media only screen and (min-width: 481px) and (max-width: 540px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        @media only screen and (min-width: 600px) and (max-width: 768px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
`;

export const GameSubs = styled.p`
    text-align: center;
    font-size: 25px;
    text-shadow: 1px 1px black;
    color: rgb(255, 208, 0);
    padding: 1em;
    font-family: 'Source Code Pro', monospace;
        @media only screen and (max-width: 480px) {
            margin: 0;
            font-size: 1.5rem;
        }
        @media only screen and (min-width: 481px) and (max-width: 540px) {
                margin: 0;
        }
        @media only screen and (min-width: 600px) and (max-width: 768px) {
            margin: 0;
            font-size: 3rem;
        }
`;

export const GameCaptions = styled.h3`
    color: rgb(255, 208, 0);
    max-width: 40rem;
        @media only screen and (max-width: 480px) {
            display: none;
        }
        @media only screen and (min-width: 481px) and (max-width: 540px) {
            font-size: 1rem;
            margin: 0 0 2rem 0;
        }
        @media only screen and (min-width: 600px) and (max-width: 768px) {
            margin: 0 0 3rem 0;
            font-size: 2rem;
        }
    `;

export const Img = styled.img`
    padding: 2px;
    height: auto; 
    width: 300px; 
    display: flex;  
    justify-content: space-between;
    border: 2px solid black;
    margin: auto;
    &:hover {
        box-shadow: 0 0 5px 5px rgb(255, 208, 0);
        transition: 0.4s;
    }
        @media only screen and (max-width: 480px) {
            height: 13rem;
            width: 20rem;
        }
        @media only screen and (min-width: 600px) and (max-width: 768px) {
            height: 20rem;
            width: 30rem;
        }
`;

// REVIEW Color Guess Styling

export const CGNav = styled.nav`
    background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);
    width: 100%;
    height: 4em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    border: 1px solid black;
`;

export const CGNavA = styled.a`
    color: black;
    display: flex;
    flex-direction: row;
    text-shadow: 2px black;
    font-size: 2rem;
    padding: 4em;
`;

export const CGTitle = styled.h1`
    margin-top: 1rem;
    background: -webkit-linear-gradient(right, red,orange,blue,indigo,violet);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: none;
    text-align: center;
    font-size: 5.5rem;
    font-family: 'Yusei Magic', sans-serif;
`;

export const CGButton = styled.button`
    margin: 0 auto;
    display: block;
    background: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);
    height: 4rem;
    width: 12rem;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
        width: 14rem;
        height: 5rem;
        font-size: 2rem;
    }
`;

export const InstructionsTitle = styled.h2`
    background: -webkit-linear-gradient(right, red,orange,green,blue,indigo,violet);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: none;
    font-family: 'Yusei Magic', sans-serif;
    font-size: 2rem;
`;

export const Instructions = styled.h3`
    max-width: 40rem;
    margin: auto;
    text-transform: capitalize;
    background: -webkit-linear-gradient(right, red,orange,green,blue,indigo,violet);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: none;
    font-family: 'Yusei Magic', sans-serif;
    font-size: 1.5rem;
`;

// REVIEW Menu Stylings

export const MenuBody = styled.body`
background-image:
linear-gradient(45deg, #ccc 25%, transparent 25%), 
linear-gradient(135deg, #ccc 25%, transparent 25%),
linear-gradient(45deg, transparent 75%, #ccc 75%),
linear-gradient(135deg, transparent 75%, #ccc 75%);
background-size: 90px 90px; /* Must be a square */
background-position:0 0, 45px 0, 45px -45px, 0px 45px; /* Must be half of one side of the square */
    height: 180rem;
    background-color: white;
`;

export const MenuNav = styled.nav`
background-color: red;
display: flex;
flex-direction: row;
justify-content: space-around;
height: 4rem;
`;

export const MenuUl = styled.ul`
display: flex;
flex-direction: row;
padding: 0.5em;
margin: auto;
`;

export const MenuLi = styled.li`
display: flex;
justify-content: space-around;
`;

export const MenuA = styled.a`
font-size: 2rem;
display: flex;
color: white;
margin: 0 10rem 0 10rem;
font-family: 'Cherry Cream Soda', cursive;
`;

export const TitleDiv = styled.div`
text-align: center;
  margin-bottom: 2rem;
`;

export const MenuTitle = styled.h1`
    color: red;
    text-align: center;
    font-size: 4rem;
    text-shadow: none;
    margin: 2rem 1rem 1rem 1rem;
    font-family: 'Cherry Cream Soda', cursive;
`;

export const SpecialsTitle = styled.h2`
color: hsl(205, 86%, 17%);
text-align: center;
margin: 0 0 1rem 0;
font-family: 'Roboto', sans-serif;
text-shadow: none;
`;

export const Underlines = styled.div`
width: 12rem;
  height: 0.75rem;
  background-image: linear-gradient(to right, rgba(34, 248, 130, 0.603), rgba(34, 248, 130, 0.603), gray 50%, red, red);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
`;

export const Underline = styled.div`
width: 5rem;
height: 0.25rem;
background: #c59d5f;
margin-left: auto;
margin-right: auto;
`;

export const SectionCenter = styled.div`
width: 90vw;
margin: 0 auto;
max-width: 1170px;
display: grid;
gap: 3rem 2rem;
justify-items: center;
`;

export const MenuItem = styled.article`
display: grid;
gap: 1rem 2rem;
max-width: 25rem;
`;

export const Photo = styled.img`
object-fit: cover;
height: 300px;
border: 0.25rem solid #c59d5f;
&:hover {
    box-shadow: none;
}
`;

export const MenuSection = styled.section`
padding: 3rem 0;
`;

export const MenuImage = styled.img`
padding: 2px;
height: auto; 
width: 100px; 
display: flex;  
justify-content: space-between;
border: 2px solid black;
margin: auto;
&:hover {
    box-shadow: 0 0 5px 5px rgb(255, 208, 0);
    transition: 0.4s;
}
    @media only screen and (max-width: 480px) {
        height: 13rem;
        width: 20rem;
    }
    @media only screen and (min-width: 600px) and (max-width: 768px) {
        height: 20rem;
        width: 30rem;
    }
`;

// BREAKPOINTS

// Mobile: 320px - 480px
// Ipads, Tablets: 481px - 768px
// Small Screens, Laptops: 769px - 1024px
// Desktops, Large Screens: 1025px - 1200px
// Extra Large TV Screens: 1201px+