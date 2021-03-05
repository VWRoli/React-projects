import crypto from '../img/crypto.png';

const Project = () => {
  return (
    <div className="project">
      <div className="img-wrapper">
        <h3>Guitar Practice Assistant</h3>
        <img src={crypto} alt="Guitar Practice Assistant" />
        <a href="" target="_blank" className="live-btn">
          Live Demo
        </a>
        <a href="" target="_blank" className="code-btn">
          View Code
        </a>
      </div>
      <div className="tags">
        <h3>Technologies:</h3>
        <span className="html-tag tag">HTML</span>
        <span className="css-tag tag">CSS</span>
        <span className="js-tag tag">JavaScript</span>
        <span className="oop-tag tag">OOP</span>
      </div>
      <div className="description">
        <h3>Description:</h3>
        <p>
          Guitar practice assistant app, with a built in metronome, and
          fretboard memorizer. You can add new excercises on the left side,
          which will be saved for your next visit. For creating the metronome I
          used the Tone JS library which is built on top of the Web Audio Api.
          The fretboard memorizer is a simple guessing game built with Vanilla
          JS.
        </p>
      </div>
    </div>
  );
};

export default Project;
