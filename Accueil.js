import React from "react";

export default () => (
  <div>
    <div css={``}>
      <header>
        <nav>
          <a href="https://andybrewer.github.io/mvp/">
            <img
              css="width: 10rem"
              src="http://lafabriquedesmobilites.fr/wp-content/themes/fabmob/images/fabmob-logo.svg"
            ></img>
          </a>
          <ul>
            <li>
              <a href="#docs">A propos</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="https://www.github.com/andybrewer/mvp/" target="_blank">
                Wiki ↗
              </a>
            </li>
          </ul>
        </nav>
        <h1>
          Révolutionner la mobilité via les <u>communs</u>
        </h1>
        <p>
          Une association 1901 pour construire les nouvelles formes de mobilité
          en réunissant tous les acteurs autour de{" "}
          <mark>communs open source</mark>
        </p>
        <br />
        <p>
          <a download="mvp.html" href="./mvp.html" target="_blank">
            <i>HTML Template ↗</i>
          </a>
          <a download="mvp.css" href="./mvp.css" target="_blank">
            <b>MVP.css (8kb) ↗</b>
          </a>
        </p>
      </header>
    </div>
    <Présentation />
  </div>
);

let Présentation = () => (
  <main>
    <section>
      <header>
        <h2>Un concept, des fabriques</h2>
        <p>
          Le modèle de la fabrique, initié en France, se répliquer dans d'autres
          pays et domaines
        </p>
      </header>
      <aside>
        <img
          css="width: 10rem"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/320px-Flag_of_France.svg.png?uselang=fr"
        ></img>
        <h3> FabMob France</h3>
        <p>Blablabla </p>
        <p>
          <a href="#">
            <em>Découvrir↗</em>
          </a>
        </p>
      </aside>
      <aside>
        <img
          css="width: 10rem"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Flag_of_Quebec.svg/640px-Flag_of_Quebec.svg.png"
        ></img>
        <h3> FabMob Québec 🏴</h3>
        <p>Blablabla </p>
        <p>
          <a href="#">
            <em>Découvrir↗</em>
          </a>
        </p>
      </aside>
    </section>
  </main>
);
