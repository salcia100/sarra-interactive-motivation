import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import motivations from "./motivations.jsx";

const PORTFOLIO = "https://sarra-portfolio-psi.vercel.app/";

const params = new URLSearchParams(window.location.search);

const companyKey = params.get("company") || "default";

const motivation =
  motivations[companyKey] || motivations.default;

function App() {

  const [screen, setScreen] = useState("opening");

  const [revealedCards, setRevealedCards] = useState([]);

  const [noPosition, setNoPosition] = useState({
    x: 0,
    y: 0
  });

  const [noAttempts, setNoAttempts] = useState(0);

  const [accepted, setAccepted] = useState(false);


  /* =========================
     CARD REVEAL
  ========================= */

  const toggleCard = (index) => {

    setRevealedCards((previous) => {

      if (previous.includes(index)) {

        return previous.filter(
          (item) => item !== index
        );

      }

      return [...previous, index];

    });

  };


  /* =========================
     MOVE NO BUTTON
  ========================= */

  const moveNo = () => {

    setNoAttempts((previous) => previous + 1);

    setNoPosition({
      x: Math.random() * 260 - 130,
      y: Math.random() * 150 - 75
    });

  };


  return (
    <main className="app">

      {/* Background */}

      <div className="glow glow-pink" />
      <div className="glow glow-peach" />

      <div className="grain" />


      {/* =====================================
          OPENING
      ===================================== */}

      {screen === "opening" && (

        <section className="screen opening">

          <div className="top-label">
            SARRA HADDAD
            <span>✦</span>
            SOFTWARE DEVELOPER
          </div>


          <div className="opening-center">

            <div className="spark-symbol">
              ✦
            </div>


            <div className="hello">
              Hi, I'm <span>Sarra</span>
            </div>


            <h1>
              Instead of sending
              <br />
              you another <span>PDF...</span>
            </h1>


            <p>
              I wanted to show you why I would
              <br />
              love to join your team.
            </p>


            <button
              className="main-button"
              onClick={() => setScreen("cards")}
            >
              Open my motivation
              <span>→</span>
            </button>

          </div>


          <div className="bottom-label">
            AN INTERACTIVE MOTIVATION LETTER
          </div>

        </section>

      )}


      {/* =====================================
          FOUR CARDS
      ===================================== */}

      {screen === "cards" && (

        <section className="screen cards-screen">
          <button
            className="back-button"
            onClick={() => setScreen("opening")}
          >
            <span>←</span>
            Back
          </button>

          <div className="top-label">
            <span className="label-number">
              01 — 04
            </span>

            MY MOTIVATION

            <span>✦</span>
          </div>


          <div className="cards-container">

            <div className="cards-heading">

              <div className="spark-small">
                ✦
              </div>

              <h1>
                A little about
                <br />
                <span>me.</span>
              </h1>

              <p>
                Four questions. Four answers.
                <br />
                Click each card to discover them.
              </p>

            </div>


            <div className="cards-grid">

              {motivation.cards.map((card, index) => {

                const revealed =
                  revealedCards.includes(index);

                return (

                  <div
                    key={card.number}
                    className={`flashcard ${
                      revealed ? "is-revealed" : ""
                    }`}
                    onClick={() =>
                      toggleCard(index)
                    }
                  >

                    <div className="flashcard-inner">


                      {/* FRONT */}

                      <div className="flashcard-face card-front">

                        <span className="card-number">
                          {card.number}
                        </span>


                        <div className="card-spark">
                          ✦
                        </div>


                        <h2>
                          {card.question}
                        </h2>


                        <span className="click-hint">
                          CLICK TO REVEAL
                          <b>↗</b>
                        </span>

                      </div>


                      {/* BACK */}

                      <div className="flashcard-face card-back">

                        <span className="card-number">
                          {card.number}
                        </span>


                        <div className="back-spark">
                          ✦
                        </div>


                        <p>
                          {card.answer}
                        </p>


                        <span className="answer-label">
                          MY ANSWER
                        </span>

                      </div>

                    </div>

                  </div>

                );

              })}

            </div>


            <button
              className="continue-button"
              onClick={() => setScreen("portfolio")}
            >
              Continue
              <span>→</span>
            </button>

          </div>

        </section>

      )}


     {/* ===================================== 
          PORTFOLIO 
      ===================================== */} 
 
{screen === "portfolio" && ( 
 
  <section className="screen portfolio-screen"> 
 
    <button 
      className="back-button" 
      onClick={() => setScreen("cards")} 
    > 
      <span>←</span> 
      Back 
    </button> 
 
    <div className="top-label"> 
      02 — BEYOND THE LETTER 
      <span>✦</span> 
    </div> 
 
 
    <div className="portfolio-center"> 
 
      <div className="big-spark"> 
        ✦ 
      </div> 
 
 
      <p className="small-title"> 
        WANT TO KNOW MORE ABOUT ME? 
      </p> 
 
 
      <h1> 
        Don't just take 
        <br /> 
        my <span>word</span> for it. 
      </h1> 
 
 
      <p className="portfolio-description"> 
        Have a look at what I've built, 
        <br /> 
        explored and learned. 
      </p> 
 
 
      {/* Portfolio + Continue buttons */} 
      <div className="portfolio-actions"> 
 
        <a 
          href={PORTFOLIO} 
          target="_blank" 
          rel="noreferrer" 
          className="portfolio-button" 
        > 
          Visit my portfolio 
          <span>↗</span> 
        </a> 
 
        <button 
          className="continue-button" 
          onClick={() => setScreen("final")} 
        > 
          Continue → 
        </button> 
 
      </div> 
 
    </div> 
 
  </section> 
 
)}


      {/* =====================================
          FINAL
      ===================================== */}

      {screen === "final" && (

        <section className="screen final-screen">

          <button
            className="back-button"
            onClick={() => setScreen("portfolio")}
          >
            <span>←</span>
            Back
          </button>

          {!accepted ? (

            <>

              <div className="final-spark">
                ✦
              </div>


              <p className="small-title">
                ONE LAST QUESTION
              </p>


              <h1>
                So... shall we build
                <br />
                something <span>amazing</span>
                <br />
                together?
              </h1>


              <div className="final-buttons">

                <button
                  className="yes-button"
                  onClick={() => setAccepted(true)}
                >
                  YES
                  <span>✦</span>
                </button>


                <button
                  className="no-button"
                  onMouseEnter={moveNo}
                  onClick={moveNo}
                  style={{
                    transform:
                      `translate(${noPosition.x}px, ${noPosition.y}px)`
                  }}
                >
                  {noAttempts > 2
                    ? "Maybe? 😏"
                    : "NO 😏"}
                </button>

              </div>


              <p className="no-message">

                {noAttempts === 0
                  ? "You can try the other button..."
                  : "Hmm... looks like NO isn't an option 😌"}

              </p>

            </>

          ) : (

            <div className="success">

              <div className="success-spark">
                ✦
              </div>


              <p className="small-title">
                PERFECT ✦
              </p>


              <h1>
                Let's talk.
              </h1>


              <p>
                Thank you for making it this far.
                <br />
                I hope we get to meet soon.
              </p>


              <a
                href={PORTFOLIO}
                target="_blank"
                rel="noreferrer"
                className="portfolio-button"
              >
                Portfolio ↗
              </a>

            </div>

          )}

        </section>

      )}

    </main>
  );
}


createRoot(
  document.getElementById("root")
).render(<App />);