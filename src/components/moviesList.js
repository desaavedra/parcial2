import React from 'react';
import Movie from "./movie";
import Detalle from "./detalle";
import { FormattedMessage } from 'react-intl';

export default class MovieList extends React.Component {
    state = {
        "movies": this.props.state,
        "imageUrl": '',
        "titulo":'',
        "descripcion":'',
        "cast":'',
        "cambio":false
    }
    movieSelected = (img,titulo, descripcion, cast)  => {
        console.log(img)
        this.setState({
            imageUrl: img,
            titulo: titulo,
            descripcion: descripcion,
            cast: cast,
            cambio: true
        });
    }
    render() {
        var componente = ""
        if(this.state.cambio)
        {
            componente = <Detalle url={this.state.imageUrl} titulo={this.state.titulo} descripcion={this.state.descripcion}
            cast={this.state.cast}/>
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <table className="table table-striped">
                            <FormattedMessage id="table">{txt =>
                                <thead className={txt}>
                                    < tr >
                                        <th scope="col">#</th>
                                        <th scope="col">Name></th>
                                        <th scope="col">Direct By</th>
                                        <th scope="col">Country</th>
                                        <th scope="col">Bugget</th>
                                        <th scope="col">Release</th>
                                        <th scope="col">Views</th>
                                    </tr>
                                </thead>
                            }
                            </FormattedMessage>

                            <tbody>
                                {this.state.movies.map((e, i) => <Movie key={i} movie={e} movieSelected={this.movieSelected} />)}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-5">
                        {componente}
                    </div>
                </div>
            </div >

        )
    }
}