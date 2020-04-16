import React from 'react';
import { Media, Paper, FontIcon } from 'react-md';
import logo from '../../assets/logo_t.png'

const link = "https://pt.wikipedia.org/wiki/Ficheiro:VisualEditor_-_Icon_-_Book.svg#/media/Ficheiro:VisualEditor_-_Icon_-_Book.svg"

export default function About() {
    return (
        <div className="about-container">
            <div className="md-grid md-grid--no-spacing">
                <div className="about-container md-grid mobile-fix">

                    <Paper className="md-cell md-cell--12 md-grid" zDepth={0}>
                        <section className="md-cell">
                            <Media aspectRatio="1-1">
                                <img src={logo} alt="PocketLibLogo" />
                            </Media>
                        </section>
                        <section className="md-cell--12">
                            <p>PocketLib é um projeto tem como objetivo ser o seu marcador de páginas virtual.
                            A parte mais legal é que você não precisa de internet para isto :)
                            </p>
                            <p>É só salvar esta página em sua tela inicial e sair usando.</p>
                            <p>Ajude a incrementar esse Repositório: <a href="https://github.com/vyk1/PocketLib" target="_blank" rel="noopener noreferrer"> <FontIcon style={{ color: '#f06292' }}>favorite</FontIcon></a></p>
                            <p>Créditos de imagem: <a href={link}>Wikipedia</a></p>
                        </section>
                    </Paper>
                </div >
            </div >
        </div >
    );
}