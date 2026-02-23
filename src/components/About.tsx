import React from "react";
import { Link } from "react-router-dom";
import vicky1 from "../assets/about/vicky1.jpg";
//import vicky2 from "../assets/about/vicky2.jpg";

const About: React.FC = () => {
  return (
    <section className="container about-container">
      {/* Hero Collage */}
      <div className="hero-collage">
        <img src={vicky1} alt="Victoria sonriendo" />
        {/* <img src={vicky2} alt="Victoria" /> */}
      </div>

      {/* Contenido */}
      <div className="page-block" style={{ textAlign: "center" }}>
        <br />
        <h2
          style={{
            fontFamily: "var(--font-title)",
            color: "var(--primary)",
            fontSize: "2rem",
          }}
        >
          🎀💅🏻 ¡Holiii! Soy Victoria 💅🏻🎀
        </h2>
        <hr />
        <div
          style={{
            lineHeight: "1.8",
            fontSize: "1.05rem",
            color: "var(--text)",
          }}
        >
          <p style={{ marginBottom: "1.2rem" }}>
            Tengo 15 años, estoy en noveno actualmente 📚✨ y soy una girl súper
            apasionada por el mundo de las uñas. Amo crear diseños que hagan
            sentir lindas, seguras y brillantes a todas mis clientas 💖.
          </p>

          <p style={{ marginBottom: "1.2rem" }}>
            Además del <em>nail art</em>, ¡me encanta la música y salir con mis
            amigos! Soy súper detallista en todo lo que hago. Soy fan #1 de los
            gatitos 🐱 y de todo lo relacionado con Hello Kitty 🎀✨, así que
            prepárate para ver mucho rosado, glitter, colores brillantes,
            escarcha y vibes súper cute en mis diseños.
          </p>

          <p style={{ marginBottom: "1.2rem" }}>
            Trabajo cada set con amor, paciencia y mucha dedicación 💅🏻💕, desde
            uñas <em>aesthetic</em> y <em>clean girl</em>, hasta diseños más
            tiernos, <em>coquette</em> y llenos de brillitos.
          </p>

          <p style={{ marginBottom: "2rem" }}>
            Si te gustan las uñas femeninas, delicadas y con un toque kawaii…
            ¡este es tu lugar! 🌸🩷 Espero que te gusten mis trabajos y si te
            parece, puedes agendar una cita para que haga mi magia en tus manos.
          </p>
          <hr />
          <h3
            style={{
              fontFamily: "var(--font-title)",
              color: "var(--primary)",
              marginBottom: "1.5rem",
            }}
          >
            ¡Nos hablamos! ❤️
          </h3>

          <Link
            to="/appointments"
            className="btn-primary"
            style={{ textDecoration: "none" }}
          >
            Agendar mi cita ✨
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
