import React from "react";
import { Link } from "react-router-dom";

export default function Band({ todo }) {
  return (
    <div className="band">
      <div className="band1">
        <h1>{todo.band}</h1>
      </div>
      <div className="band2">
        <div>
          <img
            src={todo.imagen}
            alt="todo"
            style={{ width: "700px", height: "580px", borderRadius: "5px" }}
          />
        </div>
        <div className="middle">
          <h2>About:</h2>
          <div className="band3">
            <h5>
              {todo.description} Ken Babcock and his co-founders, Dan
              Giovacchini and Brian Shultz, were in the midst of Harvard
              Business School in March 2020 when they felt the call to start
              Tango, a Chrome extension that auto-captures workflow best
              practices so that teams can learn from their top performers. “This
              window of opportunity was driven by the pandemic as we saw a lot
              of companies become distributed and go remote,” CEO Babcock told
              TechCrunch. “Team leaders were remotely onboarding people, for
              perhaps the first time, and accelerating ramp times. There was no
              longer the opportunity to tap on people’s shoulders in the office,
              so much of the training was left to people’s own devices. They
              dropped out of their program to start Los Angeles-based Tango, and
              today, announced a $5.7 million seed round for its workflow
              intelligence platform. Wing Venture Capital led the round and was
              joined by General Catalyst, Global Silicon Valley, Outsiders Fund
              and Red Sea Ventures. A group of angel investors also joined,
              including former Yelp executive Michael Stoppelman, former Uber
              head of data Jai Ranganathan, KeepTruckin CEO Shoaib Makani and
              Awesome People Ventures’ Julia Lipton.
            </h5>
          </div>
          <div className="container-down">
            <div className="origBorn">
              <h3>Origin: </h3>
              <p>{todo.origin}</p>
            </div>
            <div className="origBorn">
              <h3>Born: </h3>
              <p> {todo.years} </p>
            </div>
            <div className="origBorn">
              <h3>Genero: </h3>
              <p> Timba </p>
            </div>
          </div>
        </div>
      </div>
      <div className="band4">
        <h2>Awards:</h2>
        <p>{todo.awards}</p>
        <p>{todo.award2}</p>
      </div>
      <div className="band5">
        <h2>Members: </h2>
        <Link to="/artist/members">
          <p> {todo.name} </p>
        </Link>
        <Link to="/artist/members">
          <p> {todo.name2} </p>
        </Link>
        <Link to="/artist/members">
          <p> {todo.name3} </p>
        </Link>
        <Link to="/artist/members">
          <p> {todo.name4} </p>
        </Link>
        <Link to="/artist/members">
          <p> {todo.name5} </p>
        </Link>
      </div>
    </div>
  );
}
