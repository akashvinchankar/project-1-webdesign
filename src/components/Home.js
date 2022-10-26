import React from 'react';
import vg from '../assets/2.webp';
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from 'react-icons/ai';

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ut
            nulla quos reiciendis odio earum quasi consequuntur ducimus iste
            esse voluptatibus sequi numquam inventore fugiat amet eum cum,
            maxime ab, soluta quae repudiandae eius? Eaque minus iure, nostrum
            ratione saepe dolores deserunt id quasi non voluptas repudiandae aut
            ipsum. Earum quaerat, aut quibusdam voluptatum sunt placeat,
            laboriosam in pariatur adipisci temporibus natus aspernatur sed
            voluptatibus minus deserunt corporis praesentium corrupti omnis
            nihil? Odio enim vel illum blanditiis consectetur itaque nostrum.
            Similique nam iusto velit sunt mollitia minus, libero officiis ut
            ducimus ipsa repudiandae odit inventore dignissimos recusandae!
            Repellendus, cum autem?
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: '0.3s' }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: '0.5s' }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: '0.7s' }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: '1s' }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
