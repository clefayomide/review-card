import React from "react";
import "./Cards.css";

const Card = ({ review, next, prev, random }) => {
  const { image, name, position, text } = review;
  return (
    <>
      <section className="review-card-container">
        <div className="img-container">
          <img src={image} alt={name} className="img" />
        </div>
        <p className="name">{name}</p>
        <p className="position">{position}</p>
        <p className="review">{text}</p>
        <div className="nav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-left-square-fill"
            viewBox="0 0 16 16"
            onClick={() => prev(1)}
          >
            <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-right-square-fill"
            viewBox="0 0 16 16"
            onClick={() => next(1)}
          >
            <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
          </svg>
        </div>

        <div className="surprise-btn-container">
          <button className="surprise" onClick={() => random(1)}>
            Surprise Me
          </button>
        </div>
      </section>
    </>
  );
};

export default Card;
