"use client";
import { useState } from "react";
import SignIn from "./SignIn";
import Register from "./Register";

import Home1 from "./home";

function MyComponent() {
  const [view, setView] = useState("signIn");

  const Display = () => {
    switch (view) {
      case "register":
        return <Register />;
      case "signIn":
        return <SignIn />;
      case "home":
        return <Home1 />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <Home1 />;
    }
  };

  return (
    <div>
      <div className="flex gap-5">
        <button onClick={() => setView("register")}>Register</button>
        <button onClick={() => setView("signIn")}>Sign In</button>
        <button onClick={() => setView("home")}>Home</button>
        <button onClick={() => setView("about")}>About</button>
        <button onClick={() => setView("contact")}>Contact</button>
      </div>

     <h1 className="text-center">{Display()}</h1>
    </div>
  );
}

function AboutPage() {
  return <h1>About Page</h1>;
}

function ContactPage() {
  return <h1>Contact Page</h1>;
}

export default MyComponent;
