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

    --toastify-color-light : var(--gray-dark);
    --toastify-text-color-light: var(--gray-white);
    --toastify-toast-background :var(--gray-dark);
    --toastify-icon-color-success : var( --green ) ; 
    --toastify-icon-color-error : var(--red-pink) ;
}

html {
    overflow-y: scroll;
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
    font-size: 1rem;
    margin-bottom: 3px;
  }

  ::-webkit-scrollbar {
display: none;
}


.Toastify__toast-theme--light { 
      background-color: var(--gray-medium);
      svg {
        fill: var(--green)
      }
}

`;
