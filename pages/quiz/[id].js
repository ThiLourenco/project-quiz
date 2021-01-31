/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';// renderizando dados recebidos

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>

  // {/* <pre style={{ color: 'black' }}>
  // {JSON.stringify(dbExterno.questions, null, 4)}
  // </pre> */}
  );
}

export async function getServerSideProps(context) {
  try {
    const [projectName, githubUser] = context.query.id.split('___');
    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Falha em obter os dados!');
      })
      .then((data) => data);
      // .catch((err) => console.log('Error', err));
      // console.log(dbExterno);
      // console.log('Infos que o NextJS retorna', context.query.id);

    return {
      props: {
        dbExterno,
      },
    };
  } catch (err) {
    throw new Error('Falha na requisição', err);
  }
}
