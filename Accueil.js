import React from "react";

export default () => (
  <div>
    <div
      css={`
        height: 100vh;
        box-shadow: 0 12px 12px -10px rgba(48, 41, 41, 0.1);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      `}
    >
      <div
        css={`
          width: 80%;
          margin: 0 auto;
          h1 {
            font-size: 350%;
            font-weight: 600;
            margin: 1.2rem 0;
          }
          p {
            font-size: 150%;
          }

          @media (max-width: 800px) {
          }
        `}
      >
        <header>
          <img
            css="width: 20rem"
            src="http://lafabriquedesmobilites.fr/wp-content/themes/fabmob/images/fabmob-logo.svg"
          ></img>
          <p>Révolutionner la mobilité autour des communs !</p>
        </header>
      </div>

      <div
        href="#quoi"
        css={`
          width: 100%;
          a {
            display: block;
            background: white;
            border-radius: 0.3rem;
            width: 7rem;
            text-align: center;
            cursor: pointer;
            text-decoration: none;
            padding: 0.2rem 0.6rem;
            font-size: 130%;
            color: black;
            text-transform: uppercase;
            font-weight: 600;
            margin: 1rem auto;
          }
        `}
      >
        <a href="#quoi">Découvrir</a>
      </div>
    </div>
    <Présentation />
  </div>
);

let Présentation = () => (
  <div
    id="quoi"
    css={`
      margin: 0 auto;
      max-width: 40rem;
      padding: 0.3rem 1rem;
      ul {
        list-style-type: none;
        padding-left: 1rem;
      }
      em {
        color: #6c5ce7;
        font-style: normal;
      }
      h2 {
        font-weight: 600;
        font-size: 140%;
        padding-right: 2rem;
        margin: 3rem 0 1.2rem;
        line-height: 1.4rem;
      }
      .illustration {
        font-size: 3rem;
        display: block;
        margin: 0 auto;
      }
      @media (max-width: 800px) {
        .illustration {
          text-align: center;
        }
      }
    `}
  >
    <h2>Blablabla</h2>
  </div>
);
