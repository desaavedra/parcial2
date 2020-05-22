import React from 'react';
import { FormattedDate } from 'react-intl';
import { FormattedNumber } from 'react-intl';
export default class Movie extends React.Component {
    render() {
        return (
            <tr>
                <th scope="row">{this.props.movie.id}</th>
                <td>{this.props.movie.name}</td>
                <td>{this.props.movie.directedBy}</td>
                <td>{this.props.movie.country}</td>
                <td>{this.props.movie.budget}</td>
                <td>
                    <FormattedDate
                        value={new Date(this.props.movie.releaseDate)}
                        year='numeric'
                        month='long'
                        day='numeric'
                        weekday='long'
                    /></td>
                <td>
                    <FormattedNumber
                        value={this.props.movie.views}
                    /></td>
            </tr>
        )
    }
}