import React from 'react';
import { Lottie } from '@crello/react-lottie';
import loadingAnimation from './animations/loading.json';
import Widget from '../Widget/index';

export default function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        <div>
          <Lottie
            className="lottie-container basic"
            config={{ animationData: loadingAnimation, loop: true, autoplay: true }}
          />
        </div>
      </Widget.Content>
    </Widget>
  );
}
