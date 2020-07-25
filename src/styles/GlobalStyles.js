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

    }

    .dropdown-container {
        position: absolute;
        overflow: hidden;
        box-shadow: -3px -3px 5px rgba(82, 95, 127, 0.04);

        background: #fff;
        border-radius: 4px;
    }

    .dropdown-section {
        position: absolute;
    }
`;
