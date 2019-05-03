import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const init = () => {

  const settings = {
    gameTime: 7,
    mistakesCount: 4,
  };

  ReactDOM.render(
      <App gameTime={settings.gameTime} mistakesCount={settings.mistakesCount} />,
      document.querySelector(`.main`)
  );
};

init();
