// eslint-disable-next-line import/no-named-as-default
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubConer from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

// const BackgroundImage = styled.div `
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

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
        }}
        >
          <Input
            name="NomeDoCampo"
            onChange={(e) => setName(e.target.value)}
            placeholder="Informe o seu nome"
            value={name}
          />
          <Button type="submit" disabled={name.length <= 0}>
            {`Jogar ${name}`}
          </Button>
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
