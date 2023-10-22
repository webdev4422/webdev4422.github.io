// Encapsulate code for interoparability with other script imports
// IMPORTANT THIS MAY CAUSE PERFORMANCE ISSUES!
function makeTemplate() {
  const template = document.createElement('template')
  template.innerHTML = `
  <style>
    /****************************** MAIN ******************************/
    section {
      margin: 6rem auto;
      display: grid;
      place-items: center;
      overflow-x: hidden;
    }
    h1, h2, h3 {
      text-align: center;
      margin: 3rem 0;
    }
    p {
      margin: 2rem 1rem;
      text-align: center;
    }
    svg {
      cursor: pointer;
      transition: 0.5s ease;
      filter: drop-shadow(0 0 0.4rem rgba(255, 255, 255, 0.5));
    }
    svg:hover {
      transition: 0.25s ease;
      filter: drop-shadow(0 0 0.2rem rgba(255, 255, 255, 1));
    }

    /****************************** SECTIONS ******************************/
    /* SECTION-HOME */
    section#home{
      margin-top: 20rem;
      margin-bottom: 10rem;
    }

    /* SECTION-WORKS */
    .work-item {
      width: 100%;
      overflow: hidden;
      margin: 2rem 0;
      display: grid;
      place-items: center;
    }
    img {
      width: 20rem;
      height: auto;
      margin: 1rem;
      /* object-fit: contain; */
      filter: drop-shadow(0 0 0.5rem rgba(100, 100, 100, 0.25));
      /* filter: grayscale(1); */
      border-radius: 1rem;
    }
    img:hover{
      transition: 0.25s ease;
      filter: drop-shadow(0 0 0.2rem rgba(255, 255, 255, 1));
    }
    @media (min-width: 768px) {
      img {
        width: 25rem;
      }
    }
    .work-item p {
      margin-top: 0.5rem;
    }

    /* SECTION-ABOUT */
    .web-core {
      width: 100%;
      height: 100%;
      margin: 2rem 0;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
    .jamstack-logo {
      margin: 2rem auto;
    }
  </style>

    <!-- HOME -->
    <section id="home">
      <p>
        It is an exciting time to work on the web. The pace of change is daunting, but there is
        great opportunity for those with open, curious minds.
      </p>
    </section>

    <!-- WORKS -->
    <section id="works">
      <h2>MY WORKS</h2>

      <div class="work-item">
        <a href="https://www.x-drive.ua/" aria-label="x-drive.ua">
          <img src="/src/assets/img/webp/compressed/x-drive.webp" alt="x-drive"/>
        </a>
        <p>X-drive.ua - smooth and fast with nuxt.js</p>
      </div>

      <div class="work-item">
        <a href="https://solomia-portfolio.netlify.app/" aria-label="Solomia portfolio">
          <img src="/src/assets/img/webp/compressed/solomia.webp" alt="solomia-portfolio"/>
        </a>
        <p>Artful portfolio</p>
      </div>

      <div class="work-item">
        <a href="/src/pages/playground.html" aria-label="Playground">
          <img src="/src/assets/img/webp/compressed/playground.webp" alt="playground"/>
        </a>
        <p>An interactive playground</p>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about">
      <h2>ABOUT</h2>

      <p>Building responsive mobile first websites.</p>

      <p>
        You can't build what you can't imagine. The opposite is also true, with modern web
        technologies, you can make what ever you want.
      </p>

      <div class="web-core">
        <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" aria-label="HTML5">
          <div>
            <svg
              fill="none"
              height="50"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 124 141.532"
            >
              <path d="M10.383 126.894 0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e34f26" />
              <path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ef652a" />
              <path
                d="m99.49 41.362 1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
                fill="#fff"
              />
            </svg>
          </div>
        </a>

        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" aria-label="CSS3">
          <div>
            <svg
              fill="none"
              height="50"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 124 141.53"
            >
              <path d="M10.383 126.892 0 0l124 .255-10.979 126.637-50.553 14.638z" fill="#1b73ba" />
              <path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7" />
              <path
                d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
                fill="#fff"
              />
            </svg>
          </div>
        </a>


        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" aria-label="JavaScript">
          <div>
            <svg height="50" width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">
              <path fill="#f7df1e" d="M0 0h630v630H0z" />
              <path
                d="M423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"
              />
            </svg>
          </div>
        </a>

      </div>


      <p>
        Learning and working with JAMstack, most rapid and advanced web technologies stack for
        increased speed and reliability.
      </p>

      <div class="svg jamstack-logo">
        <a href="https://jamstack.org" aria-label="JAMstack">
          <svg
            width="300"
            height="150"
            viewBox="150 -50 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h602v173H0z" />
            <path
              d="M196.8 89.487v-35.76h-15.12v39.52c0 3.28-.24 7.52-4.56 7.52-3.84 0-4.4-3.92-4.56-6.88h-16.08c0 8.64 3.52 15.68 11.92 18.72 2.48.96 5.28 1.44 8 1.44 6.32 0 12.72-2.8 16.72-7.76 3.68-4.64 3.68-11.12 3.68-16.8Zm55.328 23.44v-44.4h-13.28v4.72h-.16c-2.64-4.4-8.08-6.24-12.96-6.24-13.36 0-22.32 10.72-22.32 23.68 0 13.2 8.64 23.76 22.32 23.76 4.8 0 10.56-1.76 12.96-6.32h.16v4.8h13.28Zm-13.28-22.24c0 6.4-4.64 11.36-11.12 11.36-6.24 0-11.04-5.04-11.04-11.2 0-6.32 4.48-11.44 10.96-11.44s11.2 4.8 11.2 11.28Zm91.128 22.24v-24.24c0-6.8.24-12.08-4.8-17.2-3.12-3.2-7.28-4.48-11.68-4.48-6 0-10.88 2.88-14.08 7.92-2.72-5.04-7.04-7.92-12.8-7.92-5.04 0-9.68 1.68-12.24 6.24h-.16v-4.72h-12.4v44.4h13.28v-23.6c0-5.2 1.36-9.84 7.52-9.84 5.6 0 6.64 4.72 6.64 9.28v24.16h13.28v-24.24c0-5.04 1.44-9.2 7.36-9.2 6.16 0 6.8 4.96 6.8 9.84v23.6h13.28Zm42.62-13.6c0-15.68-22.32-11.76-22.32-18.72 0-2 2-2.96 3.76-2.96 2.32 0 4.08.88 4.16 3.36h13.04c-.88-9.44-8.16-14-17.04-14-8.56 0-17.2 5.36-17.2 14.64 0 6.24 5.28 9.68 10.56 11.6 1.92.72 3.84 1.36 5.76 2 2.4.96 6 1.92 6 5.12 0 2.32-2.64 3.44-4.64 3.44-2.64 0-4.64-1.36-5.04-4.08h-13.2c1.04 9.76 8.8 14.72 18.08 14.72 9.04 0 18.08-5.12 18.08-15.12Zm28.962-20.72v-10.08h-6.4v-14.8h-13.28v14.8h-6.56v10.08h6.56v34.32h13.28v-34.32h6.4Zm51.195 34.32v-44.4h-13.28v4.72h-.16c-2.64-4.4-8.08-6.24-12.96-6.24-13.36 0-22.32 10.72-22.32 23.68 0 13.2 8.64 23.76 22.32 23.76 4.8 0 10.56-1.76 12.96-6.32h.16v4.8h13.28Zm-13.28-22.24c0 6.4-4.64 11.36-11.12 11.36-6.24 0-11.04-5.04-11.04-11.2 0-6.32 4.48-11.44 10.96-11.44s11.2 4.8 11.2 11.28Zm67.848 5.36h-13.52c-2 3.84-5.2 5.92-9.6 5.92-6.48 0-10.56-5.04-10.56-11.28 0-6 3.84-11.28 10.24-11.28 4.56 0 8 2.08 9.92 6.24h13.44c-2.32-11.28-12.16-18.64-23.52-18.64-13.2 0-23.44 10.48-23.44 23.6 0 13.28 10.48 23.76 23.76 23.76 11.2 0 20.72-7.44 23.28-18.32Zm48.135-27.52h-15.76l-12.32 16.08h-.16v-30.88h-13.28v59.2h13.28v-21.36h.16l12.56 21.36h15.04l-16.24-24.88 16.72-19.52Z"
              fill="#fff"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M81.7 38.23c-26.802 0-48.47 21.668-48.47 48.47s21.668 48.47 48.47 48.47 48.47-21.668 48.47-48.47V38.23H81.7Zm-2.067 83.429c-17.719-1.012-31.947-15.24-32.959-32.959h32.96v32.959ZM83.7 88.767h32.959c-1.012 17.719-15.24 31.947-32.959 32.959v-32.96Zm0-37.136h33.003v33.002H83.7V51.631Z"
              fill="#fff"
            />
          </svg>
        </a>
      </div>
    </section>
  `
  return template
}

class Main extends HTMLElement {
  constructor() {
    super()
    const template = makeTemplate()

    // Append template with shadow DOM to DOM
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(template.content.cloneNode(true))
  }
}
window.customElements.define('main-x', Main)
