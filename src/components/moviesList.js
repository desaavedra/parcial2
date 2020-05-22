import React from 'react';
import Movie from "./movie";
import { FormattedMessage } from 'react-intl';

export default class MovieList extends React.Component {
    state = {
        "movies" : this.props.state
    }
    render() {
        return (
            <div className="container">
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
                        {this.state.movies.map((e, i) => <Movie key={i} movie={e} />)}
                    </tbody>
                </table>
            </div >
            
        )
    }
}