import React, { Component } from "react";
 
class Presentation extends Component {
  render() {
    return (
      <section id="presentation">
        <p>Je vis à <strong>Toulouse</strong>.</p>
        <p>Je fais de la <strong>Programmation Orientée Objet</strong> en <strong>PHP</strong> et <strong>JavaScript</strong>.</p>
        <p>Je sais faire de jolis effets en <strong>CSS3</strong> et <strong>JQuery</strong>.</p>
        <p>Je connais bien <strong>Wordpress</strong> et <strong>WooCommerce</strong>.</p>
        <p>J'optimise mes sites pour le <span className="tooltip"><span className="tooltip-item help"><strong>SEO</strong></span><span className="tooltip-content clearfix"><span className="tooltip-text"><strong>Search Engine Optimization</strong><br /><em>référencement naturel</em></span></span></span>.</p>
        <p><small>Je connais aussi (un peu) <strong>NodeJS</strong>, <strong>Angular</strong>, <strong>React</strong>, <strong>Laravel</strong>, <strong>Zend</strong>, <strong>Symfony</strong>, <strong>Drupal</strong> et <strong>Prestashop</strong>.</small></p>
      </section>
    );
  }
}
 
export default Presentation;