import { connect } from "react-redux";

const MovieDetails = (props) => {
    return (
        <div>
            {Object.keys(props.selectedMovie).length > 0 &&
                <div>
                    <h2>MovieDetails</h2>
                    <p>Title: {props.selectedMovie.title}</p>
                    <p>Release Date: {props.selectedMovie.releaseDate}</p>
                    <p>Rating: {props.selectedMovie.rating}</p>
                </div>
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(MovieDetails);
