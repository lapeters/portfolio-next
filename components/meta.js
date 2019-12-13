import Head from 'next/head'

const Meta = () => (
  <div>
    <Head>
      <title>Lindsay Peters | Front End Web Developer Orange County, CA</title>
      <meta name="description" content="Front end web developer in Orange County, CA specializing in WordPress sites and single page applications." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Montserrat:300,400,600&display=swap');
      *, *:after, *:before {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }
      :root {
        font-size: 14px;
      }
      body {
        background:  #36415c;
        font: 1rem 'Montserrat', sans-serif;
        color: #fff;
        margin:0;
        overflow-y: scroll;
        overflow-x: hidden;
      }
      #__next {
        position: absolute;
        z-index: 100;
        height: auto;
        min-height:100vh;
        width:100%;
        opacity: 1;
        pointer-events: auto;
        overflow:hidden;
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: 'Abril Fatface', cursive;
        font-weight: 400;
        margin-top:0;
        margin-bottom: 1rem;
      }
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1.25rem;
      }
      p {
        margin-top:0;
        line-height: 1.6;
      }
      a {
        text-decoration: none;
      }
      header {
        position: fixed;
        top:0;
        width:100%;
        z-index:11;
      }
      span, strong {
        color: #E3C6BF;
      }
      input, textarea, button {
        font: 1rem 'Montserrat', sans-serif;
      }
      button, .button {
        border: 2px solid #E3C6BF;
        background: transparent;
        font-size: 1rem;
        text-transform: uppercase;
        color: #E3C6BF;
        padding:0.5rem 1rem;
        transition: all 0.3s, transform 0.6s;
        cursor: pointer;
      }
      button:focus, .button:focus {
        outline: none;
      }
      button:hover, .button:hover {
        background: #E3C6BF;
        color: #36415c;
      }
      .row {
        flex: 1;
        flex-wrap: wrap;
        max-width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      .row > * {
        max-width: 100%;
      }
      @media screen and (min-width: 768px) {
        :root {
          font-size: 15px;
        }
        h1 {
          font-size: 2rem;
        }
        h2 {
          font-size: 1.75rem;
        }
      }
      @media screen and (min-width: 1280px) {
        :root {
          font-size: 16px;
        }
        h1 {
          font-size: 2.5rem;
        }
        h2 {
          font-size: 2.25rem;
        }
      }
      @media screen and (min-width: 1440px) {
        h1 {
          font-size: 2.75rem;
        }
        h2 {
          font-size: 2.5rem;
        }
      }
      @media screen and (min-width: 1920px) {
        :root {
          font-size: 18px;
        }
      }
    `}</style>
  </div>
)
export default Meta;
