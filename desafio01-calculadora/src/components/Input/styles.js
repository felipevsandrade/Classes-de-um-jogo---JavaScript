import syled from 'styled-components';

export const InputContainer = syled.div`
    width: 100%;
    height: 75px;
    background-color: #AAAAFF; /* cor de fundo do input */

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';
    
    
    input {
        width: 100%;
        height: 75px;
        background-color: #AAAAFF; /* cor de fundo do input */
        border: 0;
        display: block;
        direction: rtl; /* texto alinhado à direita */
        padding: 0 10px;

        font-size: 24px;
        font-family: 'Roboto';
        color: #FFFFFF; /* cor do texto */
    }

`;