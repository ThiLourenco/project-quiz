import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
// eslint-disable-next-line import/no-named-as-default
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubConer from '../src/components/GitHubCorner';

// const BackgroundImage = styled.div `
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Quiz Nodejs</h1>
          </Widget.Header>

          <Widget.Content>
            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <form onSubmit={function (e) {
          e.preventDefault();
          router.push(`/quiz?name=${name}`);
          console.log('fazendo uma submissão com react');
        }}
        >
          <input
            onChange={function (e) {
              // state
              // name = e.target.value;
              setName(e.target.value);
            }}
            placeholder="Informe o seu nome"
          />
          <button
            type="submit"
            disabled={name.length === 0}
          >
            Jogar
            {name}
          </button>
        </form>
        <Widget>
          <Widget.Header>
            <h1>Quiz da Galera</h1>
          </Widget.Header>

          <Widget.Content>
            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubConer projectUrl="https://github.com/ThiLourenco" />
    </QuizBackground>
  );
}
