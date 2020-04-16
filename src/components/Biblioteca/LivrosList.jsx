import React from 'react';
import { PropTypes } from 'prop-types';

import Livros from './Livros';

const LivrosList = ({ livros, handleAddPage, handleDeleteLivro }) =>
  <span>
    {livros.map((livro) =>
      <Livros
        key={livro.id}
        {...livro}
        handleAddPage={handleAddPage}
        handleDeleteLivro={handleDeleteLivro}
      />)}
  </span>;

LivrosList.propTypes = {
  livros: PropTypes.arrayOf(PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    paginas: PropTypes.string.isRequired,
    lidas: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })),
  handleAddPage: PropTypes.func.isRequired,
  handleDeleteLivro: PropTypes.func.isRequired
};

export default LivrosList;