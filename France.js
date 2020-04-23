import React from "react";

export default () => (
  <div>
    <header>
      <h1>FabMob France</h1>
      <p>
        Une association loi 1901 basée à Paris, présente dans toute le pays pour
        construire les nouvelles mobilités en réunissant tous les acteurs autour
        de <mark>communs open source</mark>
      </p>
      <br />
      <p>
        <a href="./mvp.html" target="_blank">
          <i>Découvrir</i>
        </a>
        <a href="#" target="_blank">
          <b>Nous rejoindre</b>
        </a>
      </p>
    </header>
    <Présentation />
  </div>
);

let Présentation = () => (
  <main>
    <section
      css={`
        img {
          width: 12rem;
        }
      `}
    >
      <header>
        <h2>Un concept, des fabriques</h2>
        <p>
          Le modèle de la fabrique, initié en France, se répliquer dans d'autres
          pays et domaines
        </p>
      </header>
      <aside>
        <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"></img>
        <h3> FabMob France</h3>
        <p>
          Premier membre du réseau, la Fabrique des Mobilités s'est constituée
          en association, soutenue notamment par l'ADEME.
        </p>
        <p>
          <a href="#">
            <em>Découvrir↗</em>
          </a>
        </p>
      </aside>
      <aside>
        <img src="https://images.unsplash.com/photo-1558489580-faa74691fdc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"></img>
        <h3> FabMob Québec</h3>
        <p>
          La Fabrique des Mobilités s'est ensuite implantée au Québec, notamment
          autour des associations Savoir faire linux.
        </p>
        <p>
          <a href="#">
            <em>Découvrir↗</em>
          </a>
        </p>
      </aside>
    </section>
  </main>
);
