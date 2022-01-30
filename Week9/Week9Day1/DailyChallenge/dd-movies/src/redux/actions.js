export const handleClickSelectMovie = (movie) => {
    return {
        type: 'MOVIE_SELECTED',
        payload: movie
    }
}
