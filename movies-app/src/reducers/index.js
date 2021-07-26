import {combineReducers} from 'redux';
import {ADD_MOVIES,
    ADD_FAVOURITE,
    REMOVE_FAVOURITE,
    SHOW_FAV_TAB_SELECTED,
    ADD_MOVIE_TO_LIST,
    ADD_SEARCH_RESULT
} from '../actions/index';

const initialMovieState={
    list:[],
    favourites:[],
    showFav:false
}

export function movies(state=initialMovieState,action)
{
    // if(action.type===ADD_MOVIES)
    // {
    //     return {...state,list:action.movies};
    // }
    // return state;

    console.log('MOVIES REDUCERS');
    switch(action.type)
    {
        case ADD_MOVIES:
        {
                return {...state,list:action.movies};
        }
        case ADD_FAVOURITE:
        {
                return {...state,favourites:[action.movie,...state.favourites]}
        }
        case REMOVE_FAVOURITE:
        {
            const fav=state.favourites.filter((item)=>item.Title!==action.movie.Title);
            return {...state,favourites:fav}
        }
        case SHOW_FAV_TAB_SELECTED:
        {
            return {...state,showFav:action.val}
        }
        case ADD_MOVIE_TO_LIST:
        {
              return {...state,list:[action.movie,...state.list]}  
        }
        default:
        {
                return state;
        }
        
    }
}

const initialSearchState={
    result:{

    },
    showSearchResults:false
};

export function search(state=initialSearchState,action)
{
    console.log('SEARCH REDUCERS');
    switch(action.type)
    {
        case ADD_SEARCH_RESULT:
        {
            return {...state,result:action.movie,showSearchResults:true}
        }
        case ADD_MOVIE_TO_LIST:
        {
              return {...state,result:{},showSearchResults:false}  
        }
        default:
        {
            return state;
        }
    }
}

// const initialRootState={
//     movies:initialMovieState,
//     search:initialSearchState
// }

// export default function rootReducer(state=initialRootState,action)
// {
//     console.log('ROOT REDUCERS');
//     return {
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }

export default combineReducers({
    movies,
    search
})