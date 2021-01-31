/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #00000095;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
      color: #82CD28;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Criado com ❤ durante
        {' '}
        a
        {' '}
        <a href="https://www.alura.com.br/" target="_blank" rel="noreferrer">
          <span>Imersão React da Alura</span>
        </a>
        {' '}
        por
        {' '}
        <a href="https://github.com/ThiLourenco" target="_blank" rel="noreferrer">
          <span>Thiago Lourenço</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
