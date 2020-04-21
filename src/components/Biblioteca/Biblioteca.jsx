import React, { Component } from "react";
import AddLivro from "./AddLivro";
import LivrosList from "./LivrosList";
import { useIndexedDB } from 'react-indexed-db'

class BibliotecaPage extends Component {
    constructor(props) {
        super(props);
        this.state = { livros: [] };
        this.handleAddLivro = this.handleAddLivro.bind(this);
        this.handleDeleteLivro = this.handleDeleteLivro.bind(this);
        this.handleAddPage = this.handleAddPage.bind(this);
    }

    componentDidMount() {
        useIndexedDB('livros').getAll().then(livros => {
            console.log(livros);
            this.setState({ livros })
        })
    }

    handleAddLivro(livro) {
        try {
            useIndexedDB('livros').add({ livro })
                .then(e => {
                    console.log(e);
                })
        } catch (error) {
            console.log(error);
        } finally {
            console.log('acabou');
            this.componentDidMount()
        }
    }

    handleDeleteLivro(id) {
        useIndexedDB('livros')
            .deleteRecord(id)
            .then(e => {
                alert('Deletado!')
                this.componentDidMount()
            })
    }
    
    handleAddPage(id, livro1, qtd) {
        let pI = parseInt(livro1.lidas) + qtd

        if (pI > livro1.paginas) {
            return alert("O número de páginas lidas não pode ser maior que as totais...")
        }

        const livro = { ...livro1, lidas: pI }
        useIndexedDB('livros')
            .update({ id, livro })
            .then(e => {
                alert('Adicionado!')
                this.componentDidMount()
            })
    }

    render() {
        return (
            <div className="about-container">
                <AddLivro handleAddLivro={this.handleAddLivro} />
                <LivrosList
                    livros={this.state.livros}
                    handleDeleteLivro={this.handleDeleteLivro}
                    handleAddPage={this.handleAddPage}
                />
            </div>
        );
    }
}

export default BibliotecaPage;
