import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IntlProvider } from 'react-intl';
import MovieList from "./components/moviesList";

import App from './App';
import * as serviceWorker from './serviceWorker';

console.log(navigator.language)
const locale = navigator.language;
if (locale === "es-ES") {
  

	fetch("https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json")
    .then(res => {
        return res.json();
    }).then(res => {      

        ReactDOM.render(
          <IntlProvider locale={locale} messages={res}>
            <MovieList state={res} />
          </IntlProvider>, document.getElementById("root")
        );
    });
}
else{
  fetch("https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json")
    .then(res => {
        return res.json();
    }).then(res => {
      console.log(res)
        ReactDOM.render(
          <IntlProvider locale={locale} messages={res}>
            <MovieList state={res} />
          </IntlProvider>, document.getElementById("root")
        );
    });

  }


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
