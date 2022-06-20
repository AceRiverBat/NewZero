import '../../App.css';
import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { Marker, Popup } from 'react-leaflet';
import { render } from '@testing-library/react';

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
                        <div class="col-md-12 col-12 col-lg-12">
                            <br />
                            <h1>Lyon 4 :</h1>
                            <MapContainer center={[45.7802338,4.8232918]} zoom={16} scrollWheelZoom={false}>
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