import React, { Component } from 'react'
import Header from '../components/header.js'
import Work from '../components/work.js'
import Footer from '../components/footer.js'
import Particles from 'react-particles-js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faAngleDown, faTimes)

const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_TOKEN
})

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    const { open } = this.state;
    const currentState = open;
    this.setState({ open: !currentState })
  }

  render() {
    const { open } = this.state;
    const { toggleClass } = this;
    const { entries } = this.props;
    const num = 100;
    const black = { r: 0, g: 0, b: 0, a: 0 };
    return (
      <>
        <Header/>
        <div className={`hero hero__wrap ${open ? 'open' : ''}`}>
          <div className="hero__particles">
            <Particles
              params={{
                "particles": {
                    "number": {
                        "value": 70,
                        "density": {
                            "enable": true,
                            "value_area": 1500
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "opacity": 0.1
                    },
                    "move": {
                        "direction": "none",
                        "speed": 0.1
                    },
                    "size": {
                        "value": 1.5
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "speed": 1,
                            "opacity_min": 0.05
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onclick": {
                            "enable": false,
                            "mode": "push"
                        }
                    },
                    "modes": {
                        "push": {
                            "particles_nb": 1
                        }
                    }
                },
                "retina_detect": true
            }}
            style={{
              flex: 1
            }}
            className={'particles__wrap'} />
          </div>
          <div className="hero__content">
            <h1 className="hero__title">Hello!<br /> My name is <span>Lindsay Peters</span></h1>
            <div className="hero__desc">
              <p>I'm a <strong>front-end developer</strong> based in Southern California. View my <strong>projects</strong> by clicking the button to the right.</p>
              <button className="button button-hero" onClick={toggleClass}>
                <FontAwesomeIcon icon={open ? faTimes : faAngleDown} size='2x'/>
              </button>
            </div>
          </div>
        </div>
        <Work entries={entries} />
        <Footer />
        <style jsx>{`
          .hero {
            position: fixed;
            z-index: 10;
            overflow: hidden;
            width: 100%;
            height: 100%;
            background:   #36415c;
            transition: transform 0.6s;
            transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
          }
          .hero:before {
            content: '';
            display: block;
            position: absolute;
            height: 100%;
            width: 100%;
            top:0;
            left:0;
            transition: all 0.6s;
            background: linear-gradient(to bottom, #252d3f 0%, #36415c 100%);
          }
          .hero.open {
            transform: translate3d(0, -100%, 0) translate3d(0, 250px, 0);
          }
          .hero.open:before {
            opacity: 0;
          }
          .hero__particles {
            position: relative;
            overflow: hidden;
            height: 100%;
            transition: opacity 0.6s;
          }
          .hero.open .hero__particles {
            opacity:0;
          }
          .hero__content {
            position: absolute;
            bottom: 0;
            padding: 0.9rem 1.8rem 1.8rem;
            width: 100%;
            font-size: 1em;
            text-align: left;
          }
          .hero__title {
            width: 100%;
            line-height: 1.15;
          }
          .hero__desc {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
          }
          .hero__desc p {
            flex: 1;
            line-height: 1.2;
          }
          .button-hero {
            border-color: #D09039;
            color: #D09039;
            display: block;
            height: 30px;
            width: 30px;
            font-size: 0.75rem;
            padding: 0;
            align-self: flex-end;
          }
          .button-hero:hover {
            background: #D09039;
            color: #36415c;
          }


          @media screen and (min-width: 768px) {
            .hero__desc {
              flex-direction: row;
            }
            .hero__desc p {
              margin: 0;
              font-size: 1.15rem;
            }
            .button-hero {
              align-self: center;
            }
          }
          @media screen and (min-width: 768px) {
            .button-hero {
              height: 40px;
              width: 40px;
            }
          }
          @media screen and (min-width: 1920px) {
            .hero.open {
              transform: translate3d(0, -100%, 0) translate3d(0, 300px, 0);
            }
          }

        `}</style>
        <style jsx global>{`
          .hero__particles .particles__wrap {
            height: 100%;
          }
          .hero__particles canvas {
            width: 100%;
            height: 100%;
          }
        `}</style>
      </>
    )
  }
}
Home.getInitialProps = async function() {
  const { items: entries } = await client.getEntries({
    'content_type': 'work',
    'order': 'sys.createdAt'
  })
  const titles = entries.map((entry) => entry.fields.title)
  return {
    entries,
    titles
  }
};
export default Home
