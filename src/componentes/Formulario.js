import React, {Component} from 'react';

class Formulario extends Component {

    //crear los refs
    tituloRef = React.createRef();
    contenidoRef = React.createRef();

    crearPost = (e) => {
        e.preventDefault();

        //leer los refs
        const post ={
            title: this.tituloRef.current.value,
            body: this.contenidoRef.current.value,
            userId: 1
        };
        console.log(post);


        //enviar por pros
        this.props.crearPost(post)


    }

    render() {
        return (
            <form onSubmit={this.crearPost} className="col-8">
                <legend className="text-center">
                    Crea un Nuevo Post
                </legend>
                <div className="form-group">
                    <label >Titulo del Post:</label>
                    <input ref={this.tituloRef} type="text" className="form-control" placeholder="Titulo del Post"/>
                    <label >Contenido:</label>
                    <textarea ref={this.contenidoRef} className="form-control" placeholder="Contenido">
                    </textarea>
                    <br/>
                    <button type="submit" className="btn btn-primary">Crear</button>
                </div>
            </form>
        );
    }
}

export default Formulario;