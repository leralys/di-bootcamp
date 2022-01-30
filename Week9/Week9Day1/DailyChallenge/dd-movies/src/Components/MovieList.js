import { connect } from 'react-redux';
import { handleClickSelectMovie } from '../redux/actions';



const MovieList = (props) => {
  // console.log(props);
  return (
    <>
      <h2>Movie List</h2>
      {
        props.moviesArr.map((movie, index) => {
          return <div key={index}>
            {movie.title}
            <button onClick={() => props.selectMovie(movie)}>Details</button>
          </div>
        })
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return state.movies
}
const mapDispatchToProps = (dispatch) => {
  return {
    selectMovie: (movie) => dispatch(handleClickSelectMovie(movie)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
