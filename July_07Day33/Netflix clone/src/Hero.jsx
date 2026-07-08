import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay">
        <h1>Unlimited movies</h1>
        
        <h2>Starts at ₹149. Cancel anytime.</h2>

        <p>Ready to watch? 
            Enter your email to create or restart yourmembership.</p>

        <div className="email-box">
          <input
            type="email"
            placeholder="Email address"
          />

          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
}