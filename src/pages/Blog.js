import '../App.css';
import React, { Component } from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import Anciela from '../img/Anciela.png'
import TheGreenerGood from '../img/GreenerGood.png'
import ZeroDechet from '../img/ZeroDechet.png'
import LesCurieux from '../img/LesCurieux.png'

function Blog() {

  return (
    <div className='Blog'>
      <Header />
      <div className="container">
        <div className='container'>
          <div className='row'>
          <div className="col-md-2 col-12 col-lg-2">
          </div>
          <div className="col-md-8 col-12 col-lg-8 bgBlog">
            <h1 className='textcenter'>Nos associations lyonnaises préférées</h1>
            <p className='textcenter'>Des associations qui se battent pour une vie meilleure c'est ici !</p>

          </div>
          <div className="col-md-2 col-12 col-lg-2">
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-12 col-lg-4">
            <div class="card">
              <img class="card-img-top" src={Anciela} alt="Anciela" />
              <div class="card-body">
                <h5 class="card-title">Anciela</h5>
                <h6>« Agir ensemble pour une société plus écologique et solidaire »</h6>
                <p class="card-text">Anciela est une association lyonnaise qui accompagne des initiatives solidaires. Autrement dit, si tu as une idée pour un projet solidaire en lien avec le développement durable, Anciela t’accompagne dans sa réalisation.</p>
                <a href="https://www.anciela.info" class="btn btn-outline-dark">Découvrir le site</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 col-lg-4">
            <div class="card">
              <img class="card-img-top" src={TheGreenerGood} alt="Anciela" />
              <div class="card-body">
                <h5 class="card-title">The Greener Good</h5>
                <h6>« Créer une émulation autour de la démarche éco-citoyenne »</h6>
                <p class="card-text">L’objectif de l’association est de communiquer auprès d’un large public sur toutes les solutions qui existent pour mener une vie plus écoresponsable, plus respectueuse de soi et de l’environnement, et donc plus durable.</p>
                <a href="https://www.thegreenergood.fr" class="btn btn-outline-dark">Découvrir le site</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 col-lg-4">
            <div class="card">
              <img class="card-img-top" src={ZeroDechet} alt="Anciela" />
              <div class="card-body">
                <h5 class="card-title">ZeroDéchet Lyon</h5>
                <h6>« Ensemble, tendons vers une société zéro déchet »</h6>
                <p class="card-text">Une belle ressource, immanquable pour se mettre au zéro déchet ! L'association propose des événements, des conférences, des ateliers, répertorie aussi les commerçants qui ont une démarche éthique, à Lyon.</p>
                <a href="https://zerodechetlyon.org" class="btn btn-outline-dark">Découvrir le site</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 col-lg-4">
            <div class="card">
              <img class="card-img-top" src={LesCurieux} alt="Anciela" />
              <div class="card-body">
                <h5 class="card-title">Les Curieux</h5>
                <h6>« Ici, nous sommes curieux,
                  on aime les belles choses et surtout savoir comment elles sont faites. »</h6>
                <p class="card-text">Au coeur de la Presqu’île lyonnaise, venez découvrir une vision de la mode éthique : vêtements et accessoires éthiques pour homme, femme et enfants, coiffeur zéro déchet, cosmétique végétale.</p>
                <a href="https://www.les-curieux-lyon.com" class="btn btn-outline-dark">Découvrir le site</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Blog;