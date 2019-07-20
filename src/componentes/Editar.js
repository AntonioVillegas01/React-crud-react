import React, {Component} from 'react';

class Editar extends Component {

    //crear los refs
    tituloRef = React.createRef();
    contenidoRef = React.createRef();

    editarPost = (e) => {
        e.preventDefault();

        //leer los refs
        const post = {
            title: this.tituloRef.current.value,
            body: this.contenidoRef.current.value,
            userId: 1,
            id: this.props.post.id
        };
        //console.log(post);


        //enviar por pros
        this.props.editarPost(post)
    };

    cargarFormulario = () => {
        if (!this.props.post) return null;

        const {title, body} = this.props.post;
        return (
            <form onSubmit={this.editarPost} className="col-8">
                <legend className="text-center">
                    Editar Post
                </legend>
                <div className="form-group">
                    <label>Titulo del Post:</label>
                    <input ref={this.tituloRef} type="text" className="form-control" defaultValue={title}/>
                    <label>Contenido:</label>
                    <textarea ref={this.contenidoRef} className="form-control" defaultValue={body}>
                    </textarea>
                    <br/>
                    <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                </div>
            </form>
        )
    };

    render() {
        return (
            <React.Fragment>
                {this.cargarFormulario()}
            </React.Fragment>

        );
    }
}

export default Editar;