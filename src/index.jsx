import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {  HandThumbsUp, ChatLeftText, Send } from "react-bootstrap-icons";
import iphone15 from "./iphone15.png"

const Post = ({ profileImg, name, date, text, img }) => (
  <div className="post">
    <div className="postHead">
      <img src={profileImg} width={65} height={65} alt="" />
      <div>
        <h1> {name} </h1>
        <div className="date"> {date}</div>
      </div>
    </div>
    <br />

    <p> {text}</p>

    <img className="postImg" src={img} alt="" />

    <div className="postFooter">
      <div className="button">
        <HandThumbsUp />
        Like
      </div>
      <div className="button">
        <ChatLeftText /> Comment
      </div>
      <div className="button">
        <Send /> Share
      </div>
    </div>
  </div>
);

ReactDOM.render(
  <div>
    <Post
      profileImg="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/220px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg"
      name="Elon Musk"
      date="30-Jun-2023 4:30 pm"
      text="Elon Reeve Musk (born June 28, 1971) is a business magnate and investor. Musk is the founder, chairman, CEO and chief technology officer of SpaceX; angel investor, CEO, product architect and former chairman of Tesla, Inc.; owner, chairman and CTO of X Corp.; founder of the Boring Company; co-founder of Neuralink and OpenAI; and president of the Musk Foundation. He is the wealthiest person in the world, with an estimated net worth of US$226 billion as of September 2023, according to the Bloomberg Billionaires Index, and $249 billion according to Forbes, primarily from his ownership stakes in both Tesla and SpaceX"
    />
    <Post
      profileImg="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      name="About Nature"
      date="20-Jun-2023 5:00 pm"
      img="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80"
      text="Plants communicate with neighbouring plants to activate an airborne defence against aphids. However, the genetic pathway underlying this defence mechanism is unknown. A signalling cascade centred around the gaseous form of the chemical methyl salicylate was found to control this interaction between plants.)."
    />
    <Post
      profileImg="https://www.tailorbrands.com/wp-content/uploads/2021/01/apple_logo_1988.jpg"
      name="Apple"
      date="10-Sep-2023 5:00 pm"
      img={iphone15}
      text="iPhone 15 Pro and iPhone 15 Pro Max will be available in four stunning new finishes, including black titanium, white titanium, blue titanium, and natural titanium. Pre-orders begin Friday, September 15, with availability beginning Friday, September 22.)."
    />
  </div>,
  document.querySelector("#root")
);
