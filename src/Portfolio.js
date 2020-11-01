import React, { Component } from "react";
 
class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio" className="flex row">
       
        <section id="website-boardgames" className="portfolio-item slideup">
          <figure>
            <img src="./img/websites/bogam.jpg" alt="BoGam" />
            <figcaption>
              <h3>Site de rencontre pour joueurs</h3>
              <p><em>en développement</em></p>
              <a className="button" href="https://binjoug.prootrecords.com/bogam/public/">Voir le site</a>
              <p><span>#Laravel</span> <span>#Bootstrap</span> <span>#JQuery</span> <span>#Leaflet</span></p>
            </figcaption>
          </figure>
        </section>

        <section id="website-artdojo" className="portfolio-item slideup">
          <figure>
            <img src="./img/websites/artdojo.jpg" alt="Art Dojo" />
            <figcaption>
              <h3>Karaté &amp; Peintures<br/><small>par Anne Goudenove</small></h3>
              <a className="button" href="http://art-dojo.com">Voir le site</a>
              <p><span>#Wix</span> <span>#Ecommerce</span> <span>#SEO</span></p>
            </figcaption>
          </figure>
        </section>
       
        <section id="website-zair" className="portfolio-item slideup">
          <figure>
            <img src="./img/websites/zair.jpg" alt="Zaïr" />
            <figcaption>
              <h3>Service à la personne et transports culturels</h3>
              <a className="button" href="http://zair.fr">Voir le site</a>
              <p><span className="tooltip"><span className="tooltip-item help">#SPA</span><span className="tooltip-content clearfix"><span className="tooltip-text"><strong>Single Page Application</strong></span></span></span> <span>#Responsive</span> <span>#HTML5/CSS3</span></p>
            </figcaption>
          </figure>
        </section>

        <section id="website-prootrecords" className="portfolio-item slideup">
          <figure>
            <img src="./img/websites/prootrecords.jpg" alt="Proot records" />
            <figcaption>
              <h3>Label de musique originale et rigolote</h3>
              <a className="button" href="http://prootrecords.com">Voir le site</a>
              <p><span>#Wordpress</span> <span>#Responsive</span> <span>#OriginalTheme</span></p>
            </figcaption>
          </figure>
        </section>

        <section id="website-thiazitch" className="portfolio-item slideup">
          <figure>
            <img src="./img/websites/thiazitch.jpg" alt="Thiaz Itch" />
            <figcaption>
              <h3>One-Man-Band cartoonesque</h3>
              <a className="button" href="http://thiazitch.com">Voir le site</a>
              <p><span>#Wordpress</span> <span>#Responsive</span> <span>#OriginalTheme</span></p>
            </figcaption>
          </figure>
        </section>

        <section id="website-indelebile" className="portfolio-item slideup">
          <figure>
            <img src="./img/websites/indelebile.jpg" alt="Indélébile" />
            <figcaption>
              <h3>Collectif de maisons d'édition de narration graphique</h3>
              <a className="button" href="https://indelebilecollectif.wordpress.com/">Voir le site</a>
              <p><span>#Wordpress</span> <span>#Responsive</span> <span>#OriginalTheme</span></p>
            </figcaption>
          </figure>
        </section>

        <section id="website-merprofonde" className="portfolio-item slideup">
          <figure>
            <img src="./img/websites/merprofonde.jpg" alt="Mer Profonde" />
            <figcaption>
              <h3>Maisons d'édition de narration graphique</h3>
              <p><span>#Wordpress</span> <span>#Responsive</span> <span>#OriginalTheme</span></p>
            </figcaption>
          </figure>
        </section>

        <section id="website-domitillethirion" className="portfolio-item slideup">
          <figure>
            <img src="./img/websites/domitillethirion.jpg" alt="Domitille Thirion" />
            <figcaption>
              <h3>Correctrice</h3>
              <p><span className="tooltip"><span className="tooltip-item help">#SPA</span><span className="tooltip-content clearfix"><span className="tooltip-text"><strong>Single Page Application</strong></span></span></span> <span>#PHP</span></p>
            </figcaption>
          </figure>
        </section>

        <section id="website-maharanicompany" className="portfolio-item slideup">
          <figure>
            <img src="./img/websites/maharani.jpg" alt="Maharani Company" />
            <figcaption>
              <h3>Compagnie de Danse Traditionelle Indienne</h3>
              <p><span>#PHP</span> <span>#AdminInterface</span> <span>#Design</span></p>
            </figcaption>
          </figure>
        </section>

        <section id="website-mamievandoren" className="portfolio-item slideup">
          <figure>
            <img src="./img/websites/mamievandoren.jpg" alt="Mamie Van Doren" />
            <figcaption>
              <h3>Asociation événementielle</h3>
              <p><span>#PHP</span> <span>#AdminInterface</span></p>
            </figcaption>
          </figure>
        </section>

        <section id="website-marionpuech" className="portfolio-item slideup">
          <figure>
            <img src="./img/websites/marionpuech.jpg" alt="Marion Puech" />
            <figcaption>
              <h3>Auteur / Illustratrice</h3>
              <p><span>#PHP</span> <span>#AdminInterface</span></p>
            </figcaption>
          </figure>
        </section>

      </section>
    );
  }
}
 
export default Portfolio;