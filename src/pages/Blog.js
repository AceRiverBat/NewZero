import '../App.css';
import React, { Component } from 'react';
import Header from '../components/header'
import Footer from '../components/footer'

class Articles extends Component {

  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/articles')
      .then(response => response.json())
      .then(data => this.setState({ articles: data }));
  }

  render() {
    return (
      <div className='Blog'>
      <Header />
      <div className="container">
          <div className="row">
      {this.state.articles.map(article => (
            <div className="col-md-4 col-12 col-lg-4">
            <div class="card">
            <img class="card-img-top" src={ article.image } alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">{ article.titre }</h5>
              <p class="card-text">{ article.description }</p>
              <a href="#" class="btn btn-outline-dark">Voir</a>
            </div>
            </div>
          </div>
      ))}; 
       </div>
        </div>
          <Footer />
      </div>
    );
  }
  }
  export default Articles;