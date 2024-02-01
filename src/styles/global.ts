import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #202024;
        --bg-secondary: #121214;

        --red: #F75A68;
        --green: #015F43;
        --green-light: #00875F;
        --green-shape: #00B37E;
        --text-title: #C4C4CC;
        --text-body: #7C7C8A;
        --shape:#E1E1E6;
        --shape-secondary: #323238;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size: 16px (desktop)
    // % conforme a fonte configurada pelo usuario
    // acessibilidade
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }    

        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }   
    }

    // REM = 1rem = font-size = 16px

    body{
        background: var(--background);
        --webkit-font-smoothing: antialiased; 
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;

    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;

    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }

    }



`