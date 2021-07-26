// {
//     type:'INCREASE_COUNT'
// }
// {
//     type:'DECREASE_COUNT'
// }

//import { movies } from "../reducers";


//action types
export const ADD_MOVIES="ADD_MOVIES";
export const ADD_FAVOURITE="ADD_FAVOURITE";
export const REMOVE_FAVOURITE="REMOVE_FAVOURITE";
export const SHOW_FAV_TAB_SELECTED="SHOW_FAV_TAB_SELECTED";
export const ADD_MOVIE_TO_LIST="ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT='ADD_SEARCH_RESULT';

//action creators
export function addMovies(movies)
{
    return {
        type:ADD_MOVIES,
        movies:movies
   }
}


export function addFavourite(movie)
{
    return {
        type:ADD_FAVOURITE,
        movie:movie
   }
}

export function removeFavourite(movie)
{
    return {
        type:REMOVE_FAVOURITE,
        movie:movie
   }
}


export function showFavourite(val)
{
    return {
        type:SHOW_FAV_TAB_SELECTED,
        val:val
   }
}


export function addMovieToList(movie)
{
    return{
        type:ADD_MOVIE_TO_LIST,
        movie
    }
}

export function handleMovieSearch(movie)
{
    const url=`http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;

    return function(dispatch)
    {
        fetch(url)
        .then(response=>

            //console.log(`resposne ${response.type} ${response.text()} ${response.json()}`)
             response.json()
        )
        .then(movie=>
            {
                const movie_data=JSON.stringify(movie);
                console.log(`movie ${movie_data}`);

                //dispatch an action
                dispatch(addMovieSearchResult(movie));
            });
    }
}

export function addMovieSearchResult(movie)
{
    return{
        type:ADD_SEARCH_RESULT,
        movie 
    }
}
