import React from 'react';

export default class Detalle extends React.Component {
    render() {
        return (

            <div className="card">
                <img className="card-img-top" src={this.props.url} alt={this.props.titulo} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.titulo}</h5>
                    <p className="card-text">{this.props.descripcion}</p>
                    <h6 className="card-title">Cast: {this.props.cast}</h6>
                </div>
            </div>
        )
    }
}