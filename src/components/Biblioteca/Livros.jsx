import React from 'react';
import { PropTypes } from 'prop-types';
import { Card, CardTitle, CardText, Button, GridList, Cell, FontIcon } from 'react-md';

// const style = { maxWidth: 320 };
const Livros = ({ livro, id, handleDeleteLivro, handleAddPage }) =>

    // https://github.com/assuncaocharles/react-indexed-db
    <div className="md-grid md-grid--no-spacing md-cell--middle">
        <div className="md-grid md-cell--8 mobile-fix">
            <Card key={id} raise className="md-grid md-cell md-cell--12">
                <CardTitle title={livro.titulo} subtitle="Nome da Obra" />
                <CardText>
                    <p>Páginas totais: {livro.paginas}</p>
                    <p>Lidas: {livro.lidas}</p>
                    <GridList container="pictures" size={1} component="section" className="md-text-center">
                        <Cell size={4} key={1}>
                            <Button onClick={() => handleAddPage(id, livro, 1)} raised primary> <FontIcon className="fa fa-tag"></FontIcon>++1</Button>
                        </Cell>
                        <Cell size={4} key={2}>
                            <Button onClick={() => handleAddPage(id, livro, 5)} raised secondary><FontIcon className="fa fa-star-o"></FontIcon>++5</Button>
                        </Cell>
                        <Cell size={4} key={3}>
                            <Button onClick={() => handleDeleteLivro(id)} raised tertiary><FontIcon className="fa fa-trash"></FontIcon>Apagar</Button>
                        </Cell>
                    </GridList>
                </CardText>
            </Card>
        </div>
    </div>

Livros.propTypes = {
    titulo: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    handleDeleteLivro: PropTypes.func.isRequired,
    handleAddPage: PropTypes.func.isRequired,
};

export default Livros;