import '../App.css';
import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { Marker, Popup } from 'react-leaflet';
import { render } from '@testing-library/react';
import { Outlet, Link } from "react-router-dom";

class Map extends Component {

  constructor() {
    super();
    this.state = {
      composts: []
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/compost')
      .then(response => response.json())
      .then(data => this.setState({ composts: data }));
  }

  render() {
    return (
      <div className='Map'>
        <Header />
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-12 col-lg-6">
              <br />
              <h1>TOUS LES COMPOSTS COLLECTIFS DE LYON :</h1>
              <MapContainer center={[45.75960601090755, 4.832381729701485]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {this.state.composts.map(compost => (

                  <Marker key={compost.id} position={[compost.lat, compost.long]}>

                    <Popup key={compost.id}>
                      {compost.nom} <br /> {compost.adresse}
                    </Popup>

                  </Marker>
                ))}
              </MapContainer>
            </div>
            <div class="col-md-6 col-12 col-lg-6">
              <h3>Sélectionner votre arrondissement :</h3>
              <div class=" d-flex align-items-center col-md-6 col-12 col-lg-6">

                <ul class="navbar-nav">
                  <li class="nav-item">
                  <Link class="nav-link active" to="/Lyon1">Lyon1</Link>
                  </li>
                  <li class="nav-item">
                  <Link class="nav-link active" to="/Lyon2">Lyon2</Link>
                  </li>
                  <li class="nav-item">
                  <Link class="nav-link active" to="/Lyon3">Lyon3</Link>
                  </li>
                  <li class="nav-item">
                  <Link class="nav-link active" to="/Lyon4">Lyon4</Link>
                  </li>
                  <li class="nav-item">
                  <Link class="nav-link active" to="/Lyon5">Lyon5</Link>
                  </li>
                </ul>
                <ul class="navbar-nav">
                  <li class="nav-item">
                  <Link class="nav-link active" to="/Lyon6">Lyon6</Link>
                  </li>
                  <li class="nav-item">
                  <Link class="nav-link active" to="/Lyon7">Lyon7</Link>
                  </li>
                  <li class="nav-item">
                  <Link class="nav-link active" to="/Lyon8">Lyon8</Link>
                  </li>
                  <li class="nav-item">
                  <Link class="nav-link active" to="/Lyon9">Lyon9</Link>
                  </li>

                </ul>

              </div>
            </div>
          </div>
        </div>

        <Footer />
        <Outlet />
      </div>
    );
  }

}


export default Map;