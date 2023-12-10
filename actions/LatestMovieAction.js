import axios from 'axios'
export const FETCH_MOVIE_BEGIN   = 'FETCH_FAT_BEGIN';
export const FETCH_MOVIE_SUCCESS = 'FETCH_FAT_SUCCESS';
export const FETCH_MOVIE_FAILURE = 'FETCH_FAT_FAILURE';

export const fetchMovieBegin = () => ({
    type: FETCH_MOVIE_BEGIN
  });
 
 export const fetchMovieSuccess = products => ({
   type: FETCH_MOVIE_SUCCESS,

   
   payload:  products 
 });
 
 export const fetchMovieFailure = error => ({
   type: FETCH_MOVIE_FAILURE,
   payload: { error }
 });

 export function fetchMovies(){
   console.log("in fetchproducts!!")
   return dispatch=>{
     dispatch(fetchMovieBegin());
    return axios.get('http://192.168.0.103:6500/latestmovies')
     .then(resp=>{
       const products= resp.data;
       dispatch(fetchMovieSuccess(products))
     })
     .catch(error=>{
       dispatch(fetchMovieFailure(error.message))
     })

   }
 }

 