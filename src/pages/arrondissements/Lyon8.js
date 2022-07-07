import '../../App.css';
import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { Marker, Popup } from 'react-leaflet';
import { render } from '@testing-library/react';
import Navbar from '../../components/navbar'

class Map extends Component {

    constructor() {
        super();
        this.state = {
            composts: []
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8001/compost')
            .then(response => response.json())
            .then(data => this.setState({ composts: data }));
    }

    render() {
        return (
            <div className='Map'>
                <Header />
                <div class="container">
                <div className='container'>
                        <div className='row'>
                            <div className="col-md-2 col-12 col-lg-2">
                            </div>
                            <div className="col-md-8 col-12 col-lg-8 bgBlog">
                                <h1 className='textcenter'>Lyon 8</h1>
                                <div className='navarr'>
                                <Navbar />
                            </div>
                            </div>
                            <div className="col-md-2 col-12 col-lg-2">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 col-12 col-lg-12">
                            <MapContainer center={[45.7376941,4.8678851]} zoom={15} scrollWheelZoom={false}>
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
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

}


export default Map;