import React from 'react'
import Header from '../components/header.js'
import Particles from 'react-particles-js'
import Footer from '../components/footer.js'

const About = () => (
  <>
    <div className="particles">
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
    <Header />
    <div className="about">
      <div className="row">
        <div className="about__content">
          <h1>About</h1>
          <p>
            Hello, my name is Lindsay Peters and I specialize in <strong>front-end web development</strong>.
            I'm currently based in Orange County, CA, earning a Bachelors's in journalism with a minor in web technologies & applications from Cal State University, Long Beach.
            But more so, I'm a self-taught developer constantly improving my skill set and expanding my toolkit.
          </p>
          <p>
            I have extensive knowledge in developing sites using the <strong>WordPress</strong> content management system.
            I also have experience with single-page applications using the latest JavaScript Frameworks: <strong>Vue</strong> and <strong>React</strong>.
            There's rarely a one-size-fits-all approach to web projects so I believe in getting my hands dirty with as many development processes as possible.
          </p>
          <p>
            My work history includes a daily publication as well as a full-service, digital marketing agency so its pretty clear that I excel in fast-paced working environments.
            I love what I do because it inspires my passion to constantly learn and work through problems.
          </p>
          <p>
            I'm <strong>currently looking</strong> for front-end development positions where I can continue to learn, solve puzzles, and improve my work. All while building sites that have their own story to tell.
          </p>
        </div>
      </div>
    </div>
    <Footer />
    <style jsx>{`
      .about {
        z-index:1;
        margin-top: 86px;
        padding: 0 1.8rem 1.8rem;
      }
      .about__content p {
        line-height: 1.6;
      }
      .particles {
        width: 100%;
        height: 100%;
        position: fixed;
        overflow: hidden;
        z-index: -1;
      }
    `}</style>
    <style jsx global>{`
      header.scroll {
        background: #252d3f;
      }
      .particles__wrap {
        width: 100%;
        height: 100%;
      }
    `}</style>
  </>
)

export default About;
