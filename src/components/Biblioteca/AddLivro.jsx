import React, { Component } from "react";
import { Card } from "react-md";
import PropTypes from 'prop-types';
import { TextField, Button } from "react-md";


class AddLivro extends Component {
  initialState = {
    titulo: "",
    paginas: "",
    lidas: ""
  }
  constructor() {
    super();
    this.state = this.initialState
    this.addLivro = this.addLivro.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  addLivro() {
    this.props.handleAddLivro(this.state);
  }

  handleInputChange = (value, name) => {
    this.setState({
      [name]: value
    });
  }

  render() {
    return (

      <div className="about-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <h1 className="md-text-center">Adição de Livro</h1>
          {/* onSubmit={this.handleSubmit} onReset={this.handleReset} */}
          <form className="md-grid md-text-container snackbars__interactive">
            <TextField
              id="interactive-snackbar-text"
              type="text"
              name="titulo"
              label="Título"
              placeholder="Título"
              required
              className="md-cell md-cell--4 md-cell--6-desktop"
              value={this.state.titulo}
              onChange={(e) => this.handleInputChange(e, 'titulo')} />
            <TextField
              id="interactive-snackbar-action"
              label="Número de páginas da obra"
              name="paginas"
              type="number"
              placeholder="Número de páginas lidas"
              className="md-cell md-cell--4 md-cell--6-desktop"
              value={this.state.paginas}
              onChange={(e) => this.handleInputChange(e, 'paginas')} />
            <TextField
              id="interactive-snackbar-autohide-timeout"
              label="Número de páginas lidas"
              type="number"
              name="lidas"
              placeholder="Número de páginas lidas"
              className="md-cell"
              required
              value={this.state.lidas}
              onChange={(e) => this.handleInputChange(e, 'lidas')}
            />
          </form>
          <Button raised onClick={this.addLivro}>Adicionar</Button>
        </Card>
      </div>
    );
  }
}

AddLivro.propTypes = {
  handleAddLivro: PropTypes.func.isRequired,
};

export default AddLivro;
