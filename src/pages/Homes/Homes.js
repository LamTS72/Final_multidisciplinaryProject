import React, { Component } from 'react';
import Carousel from '../../component/Carousel/Carousel';
import ListFilm from '../../component/ListFilms/ListFilm';
import Media from '../../component/Media/Media';
import MainApp from '../../component/MainApp/MainApp'; 
import Footer from '../../component/Footer/Footer';
import Modal from '../../component/Modal/Modal';

export default class Homes extends Component {
    render(){
        return (
            <div>
                <Carousel />
                <ListFilm />
                <Media />
                <MainApp />
                <Footer />
                <Modal />
            </div>
        );
    }
}