import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './componets/Header';
import Post from './componets/Post';

import './style.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Woopa',
        picture: 'https://api.adorable.io/avatars/face/eyes1/nose3/mouth1/9e971f',
        content:
          'Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a crescente influência da mídia estimula a padronização dos procedimentos normalmente adotados.',
        time: 'há 22 minutos',
      },
      {
        id: 2,
        name: 'Toonga',
        picture: 'https://api.adorable.io/avatars/face/eyes3/nose1/mouth4/2a5bcc',
        content:
          'O cuidado em identificar pontos críticos no fenômeno da Internet talvez venha a ressaltar a relatividade das diretrizes de desenvolvimento para o futuro.',
        time: 'há 7 horas',
      },
      {
        id: 3,
        name: 'Yoha',
        picture: 'https://api.adorable.io/avatars/face/eyes4/nose7/mouth2/cc2c2a',
        content:
          'Ainda assim, existem dúvidas a respeito de como a percepção das dificuldades agrega valor ao estabelecimento do orçamento setorial.',
        time: 'há 2 dias',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <div>
        <Header />
        <div className="post-box">
          {posts && posts.map(post => <Post key={post.id} post={post} />)}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
