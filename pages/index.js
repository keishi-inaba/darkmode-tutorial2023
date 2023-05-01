import { useState, useEffect } from "react";


export default function Home() {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (e) => {
    setDarkTheme(e.target.chedked);
  };

  useEffect(() => {
    if(darkTheme !== undefined) {
      if(darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);


  return (
    <div>
      <div className="container">
        <nav>
          <div className="title">My Portfolio</div>
          <div>
            <form action="#">
              <label className="switch">
                <input
                 type="checkbox"
                 onChange={handleToggle}
                 checked={darkTheme}
                />
                <span className="slider"></span>
              </label>
            </form>
          </div>
        </nav>
        <section className="content">
          <h1>kii webdesign PortFolio</h1>
          <h3>I'm a web designer</h3>
          <p>
          I mainly create websites with no code and web design using figma.
          </p>
          <button className="primary-btn">Contact</button>
        </section>
      </div>
    </div>
  );
}
