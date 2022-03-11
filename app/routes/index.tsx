import React, { useLayoutEffect } from 'react'
import { gsap } from 'gsap';


export default function Index() {
  const load = React.createRef<HTMLInputElement>();
  useLayoutEffect(() => {
    gsap.from(load.current, { opacity: 0, duration: 3 })
    gsap.to(load.current, { opacity: 1, color: '#fafafa', duration: 3 })
  }, [load])
  return (
    <div ref={load} className="page">
      <h1>Hey! I'm Edwin.</h1>
      <figcaption className="indexImage">
        <img src='character.svg' alt='man drinking coffee' width="200" height="200" />
      </figcaption>
      <p>Check out some helpful links about me.</p>
      <ul className="links">
        <li>
          <a
            target="_blank"
            href="https://www.github.com/etuned/"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ebartunek"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/edwinbartunek" rel="noreferrer">
            Twitter
          </a>
        </li>
      </ul>
    </div>
  );
}
