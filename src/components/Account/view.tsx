"use client";
import { useState } from "react";
import SignIn from "./SignIn";
import Register from "./Register";

import Home1 from "./home";

function MyComponent() {
  const [view, setView] = useState("signIn");

  const componentList = [
    {
      components: Home1,
      title: "home",
    },
    { components: SignIn, title: "signIn" },
    {
      components: Register,
      title: "register",
    },
    {
      components: ContactPage,
      title: "contact",
    },
    {
      components: AboutPage,
      title: "about",
    },
  ];

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
        {componentList.map((comp) => (
          <div key={comp.title}>
            <button onClick={() => setView(comp.title)}>{comp.title}</button>
          </div>
        ))}
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
