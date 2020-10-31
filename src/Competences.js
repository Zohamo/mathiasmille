import React, { Component } from "react";
 
class Competences extends Component {
  render() {
    return (
      <section id="competences">
        <section id="competences-legend" className="flex row">
          <div className="star">
              <p>maîtrise</p>
          </div>
          <div className="other">
              <p>connaissances</p>
          </div>
        </section>
        <section id="competences-content" className="flex row">
          <section id="langages" className="competences-item flex col slideup">
              <h3>Langages</h3>
              <div className="star">
                  <p><span className="lang-html">HTML5</span> <span className="lang-css">CSS3</span> <span className="lang-javascript">JavaScript</span> <span className="lang-php">PHP</span> <span className="lang-mysql">MySQL</span></p>
              </div>
              <div className="other">
                  <p><span className="lang-css">Less</span> <span className="lang-css">Sass/Scss</span> <span className="lang-javascript">JSX</span> <span className="lang-typescript">TypeScript</span> <span className="lang-twig">Twig</span></p>
              </div>
          </section>
          <section id="frameworks" className="competences-item flex col slideup">
              <h3>Frameworks</h3>
              <div className="star">
                  <p><span className="lang-javascript">JQuery</span> <span className="lang-css">Bootstrap</span></p>
              </div>
              <div className="other">
                  <p><span className="lang-javascript">NodeJS</span> <span className="lang-javascript">ReactJS</span> <span className="lang-typescript">Angular</span> <span className="lang-php">Laravel</span> <span className="lang-php">Zend</span> <span className="lang-php">Symfony</span> <span className="lang-css">Knacss</span> <span className="lang-css">Bulma</span> <span className="lang-css">Picnic</span></p>
              </div>
          </section>
          <section id="cms" className="competences-item flex col slideup">
              <h3>CMS</h3>
              <div className="star">
                  <p><span>Wordpress</span></p>
              </div>
              <div className="other">
                  <p><span>Drupal</span> <span>Prestashop</span> <span>Wix</span></p>
              </div>
          </section>
          <section id="architecture" className="competences-item flex col slideup">
              <h3>Architecture</h3>
              <div className="star">
                  <p><span>Responsive</span> <span>POO</span> <span>MVC</span> <span>AJAX</span></p>
              </div>
              <div className="other">
                  <p><span>Doctrine</span> <span>REST</span> <span>SOAP</span></p>
              </div>
          </section>
          <section id="autres" className="competences-item flex col slideup">
              <h3>autres</h3>
              <div className="star">
                  <p><span>SEO</span></p>
              </div>
              <div className="other">
                  <p><span>Canvas</span> <span>SVG</span> <span>Photoshop</span> <span>Illustrator</span> <span>Premiere</span></p>
              </div>
          </section>
        </section>
      </section>
    );
  }
}
 
export default Competences;