import crypto from '../img/crypto.png';

const Project = () => {
  return (
    <div class="project">
      <div class="img-wrapper">
        <h2>Guitar Practice Assistant</h2>
        <img src={crypto} alt="Guitar Practice Assistant" />
        <a href="" target="_blank" class="live-btn">
          Live Demo
        </a>
        <a href="" target="_blank" class="code-btn">
          View Code
        </a>
      </div>
      <div class="tags">
        <h3>Technologies:</h3>
        <span class="html-tag tag">HTML</span>
        <span class="css-tag tag">CSS</span>
        <span class="js-tag tag">JavaScript</span>
        <span class="oop-tag tag">OOP</span>
      </div>
      <div class="description">
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
