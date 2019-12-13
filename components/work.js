import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faGithub, faLink)

const Work = (props) => {
  const tryLink = (path) => {
    try {
      return path;
    } catch (err) {
      return null;
    }
  };
  return (
    <div className="work work__wrap">
      <div className="row">
        {props.entries.map((entry) => (
          <div className="card" key={entry.sys.id}>
            <div className="card__inner">
              <img className="card__img" src={entry.fields.featuredImage.fields.file.url} alt={`App Image of ${entry.fields.title}`} />
              <div className="card__content">
                <h3>{entry.fields.title}</h3>
                <p>{entry.fields.description}</p>
                <div className="card__btn-group">
                  {tryLink(entry.fields.liveLink) ? <a className="button button-card-alt" href={entry.fields.liveLink} target="_blank"><FontAwesomeIcon icon={faLink} size={'lg'} /></a> : ''}
                  {tryLink(entry.fields.repoLink) ? <a className="button button-card" href={entry.fields.repoLink} target="_blank"><FontAwesomeIcon icon={faGithub} size={'lg'} /></a> : ''}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .work {
          position: relative;
          display: -webkit-flex;
          display: flex;
          -webkit-flex-wrap: wrap;
          flex-wrap: wrap;
          flex: 1;
          padding: 250px 0.9rem 0.9rem;
        }
        .row {
          justify-content: space-between;
        }
        .card {
          flex: 1 0 100%;
          height: 90vw;
          /* flex: 1 0 33.333%;
          height: 30vw; */
          padding: 0.75rem;
        }
        .card__inner {
          position: relative;
          overflow: hidden;
          height: 100%;
          width: 100%;
          padding: 1.1rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .card__inner:before {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          background: rgba(227, 198, 191, 0.7);
        }
        .card__inner .card__img {
          filter: grayscale(100%);
          position: absolute;
          min-height: 100%;
          min-width: 100%;
          opacity: 0.7;
          transition: transform 0.5s, opacity 0.5s;
        }
        .card__inner:hover .card__img {
          transform: scale(1.2);
        }
        .card__content {
          z-index: 1;
          position: absolute;
          height: 100%;
          width: 100%;
          left: 0;
          padding: 0 1rem;
          text-align: center;
          margin: 0;
          color: #252d3f;
          font-size: 1.85em;
          line-height: 1;
          transition: transform 0.3s, opacity 0.3s;
        }
        .card__content h3 {
          margin: 50% 0 10px 0;
          font-size: 1.75rem;
          color: #252d3f;
          transition: all 0.3s;
        }
        .card__inner:hover .card__content h3 {
          margin: 10% 0 10px 0;
        }
        .card__content p {
          margin: 0;
          padding: 0 0;
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.5;
          transform: scale(0);
          transition: opacity 0.35s, transform 0.35s;
          opacity: 0;
        }
        .card__content .card__btn-group {
          padding: 1rem 0;
          display: flex;
          justify-content: center;
          transform: scale(0);
          transition: opacity 0.35s, transform 0.35s;
          opacity: 0;
        }
        .card__content .card__btn-group .button-card,
        .card__content .card__btn-group .button-card-alt,
        .card__content .card__btn-group .button-card-alt:hover {
          margin: 0 0.75rem;
          border-color:#252d3f;
          background: #252d3f;
          color:#E3C6BF;
        }
        .card__content .card__btn-group .button-card:hover,
        .card__content .card__btn-group .button-card-alt {
          background: transparent;
          color: #252d3f;
        }
        .card__inner:hover p, .card__inner:hover .card__btn-group {
          opacity: 1;
          transform: scale(1);
        }
        @media screen and (min-width: 768px) {
          .card {
            flex: 0 0 50%;
            height: 45vw;
          }
          .card__inner:hover .card__content h3 {
            margin: 20% 0 10px 0;
          }
        }
        @media screen and (min-width: 1280px ) {
          .card {
            flex: 0 0 33.333%;
            height: 30vw;
          }
          .card__inner:hover .card__content h3 {
            margin: 30% 0 10px 0;
          }
        }
      `}</style>
    </div>
  )
}
export default Work;
