import React, { Component } from "react";
import { NavLink } from "react-router-dom";
 
class Presentation extends Component {
  render() {
    return (
      <section id="presentation">
        <p>Je vis à <strong>Toulouse</strong>.</p>
        <p>Je suis <strong>développeur/intégrateur Web</strong> plutôt spécialisé en <strong>Front-End</strong>.</p>
        <p>J'aime beaucoup travailler avec <strong>Angular</strong>, <strong>NestJS</strong> et <strong>Bootstrap</strong>.</p>
        <p>Je m'applique à coder de manière <ins>élégante</ins>, <ins>optimale</ins> et <ins>sûre</ins><br /><small>afin de faciliter la maintenance et d'obtenir les meilleures performances possibles.</small></p>
        <p>J'utilise <strong>Wordpress</strong> et <strong>WooCommerce</strong> pour faire des sites vitrine et e-commerce.</p>
        <p>J'optimise les sites web pour le <span className="tooltip"><span className="tooltip-item help"><strong>SEO</strong></span><span className="tooltip-content clearfix"><span className="tooltip-text"><strong>Search Engine Optimization</strong><br /><em>référencement naturel</em></span></span></span>.</p>
        <p><small>Je connais aussi <strong>React</strong>, <strong>NodeJS</strong>, <strong>JQuery</strong>, <strong>Laravel</strong>, <strong>Zend</strong>, <strong>Symfony</strong>, <strong>Drupal</strong>, <strong>Prestashop</strong>,<NavLink to="/competences"><span className="tooltip"><span className="tooltip-item">...</span><span className="tooltip-content clearfix"><span className="tooltip-text">aller aux compétences &gt;&gt;</span></span></span></NavLink></small></p>
      </section>
    );
  }
}
 
export default Presentation;