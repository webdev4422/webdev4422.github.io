const layout = `
    <style>
      /****************************** LAYOUT STYLES ******************************/
      /*
      // COLORS
        Main color - Mine Shaft (approx.) #202020

      // FONTS
        Marck Script
      */

      /****************************** GENERAL ******************************/
      /* @import url('https://fonts.googleapis.com/css2?family=Marck+Script&display=swap'); */
      @font-face {
        font-family: 'Marck Script';
        src: url('/src/assets/fonts/Marck_Script/MarckScript-Regular.ttf') format('truetype');
        font-display: swap; /* avoid showing invisible text */
        /* https://developer.chrome.com/docs/lighthouse/performance/font-display/?utm_source=lighthouse&utm_medium=devtools */
      }

      :root {
        --black: #202020;
        --light-grey: #cecece;
        --dark-grey: #bababa;
      }

      /****************************** CSS RESET START ******************************/
      /* prettier-ignore */
      *, *::before, *::after {box-sizing: border-box; margin: 0; border: 0; padding: 0;}
      /* prettier-ignore */
      body {line-height: 1.5; -webkit-font-smoothing: antialiased; overflow-x: hidden; font-family: sans-serif;}
      /* prettier-ignore */
      img, picture, video, canvas, svg {display: block; max-width: 100%;}
      /* prettier-ignore */
      input, button, textarea, select {font: inherit;}
      /* prettier-ignore */
      p, h1, h2, h3, h4, h5, h6 {overflow-wrap: break-word;}
      /****************************** CSS RESET END ******************************/

      body {
        font-family: 'Marck Script', cursive;
        font-size: 1.5rem;
        background: var(--black);
        color: var(--light-grey);
        max-width: 768px;
        margin: 0 auto;
        overflow-x: hidden;
      }
      main {
        margin: 4rem auto;
        display: grid;
        place-items: center;
      }
      h1, h2, h3 {
        text-align: center;
        margin: 2rem 1rem;
        padding: 2rem 0;
      }
      p {
        text-align: center;
        margin: 3rem 1rem;
      }
      a {
        text-decoration: none;
        color: #54b3d6;
        transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
      }
      a:hover {
        color: white;
        filter: drop-shadow(0 0 2rem rgba(255, 255, 255, 0.5));
      }

      /* Scrollbar Styling */
      @media (min-width: 768px) {
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background-color: #303030;
          -webkit-border-radius: 10px;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          -webkit-border-radius: 10px;
          border-radius: 10px;
          background: #6d6d6d;
        }
      }
    </style>
  `
document.head.innerHTML += layout
