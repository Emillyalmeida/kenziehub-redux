import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0; box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}
:root{
    --pink : #FF577F;
    --pink-hover : #FF427F;
    --disable: #59323F;
    --gray-black: #121214;
    --gray-dark: #212529;
    --gray-medium: #343B41;
    --gray-ligth: #868E96;
    --gray-white:#F8F9FA;
    --red-pink:#E83F5B;
    --green: #3FE864
}
body{
    background-color: var(--gray-black);
    font-family: 'Inter', serif;
    height: 100vh;
    width: 100vw;
}

h1,h2,h3,h4{
    color: var(--gray-white);
    font-weight: 700;
}
p,span {
    color: var(--gray-ligth);
}
button{
    cursor: pointer;
}
label {
    color: var(--gray-white);
    font-size: 0.85rem;
    margin-bottom: 3px;
  }


`;
