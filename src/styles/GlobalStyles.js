import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        min-height: 100%;
        background: #202020;
    }
    *, button, input {
        border: 0;
        background: none;
        font-family: 'Roboto', -apple-system, system-ui, sans-serif;
    }
    ul {
        list-style: none;
        padding-left: 0;
    }

    .dropdown-root {
        z-index: 10;
        position: absolute;
    }

    .dropdown-arrow {
        position: relative;
        
        &::before {
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;
            background: #fff;

            top: -6.5px;
            left: -8px;
            border-radius: 4px 0 0 0;

            transform: rotate(45deg);
        }
    }

    .dropdown-container {
        position: absolute;
        overflow: hidden;
        box-shadow: -3px -3px 5px rgba(50, 50, 93, 0.25);

        background: #fff;
        border-radius: 4px;
    }

    .dropdown-section {
        position: absolute;
    }

    .dropdown-background {
        position: absolute;
        bottom: 0;
        background: #c9c9c9;
        width: 100%;
    }
`;
