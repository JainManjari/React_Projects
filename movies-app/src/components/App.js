import React from 'react';
import {data} from '../data';
import NavBar from './NavBar';
import MovieCard from './MovieCard';
import {addMovies,showFavourite} from '../actions';
//import {StoreContext} from '../index';
// import {connect} from '../index';
import {connect} from 'react-redux';


class App extends React.Component {

  constructor()
  {
      super();
      this.state={
          moviesTab:true
      }
  }

  // movieTabClick = () => {
      
  //   // this.setState({
  //   //   moviesTab:true
  //   // });

  //   this.props.store.dispatch(showFavourite(false));
  // }

  // favouriteTabClick = () => {

  //   // this.setState({
  //   //   moviesTab:false
  //   // })

  //   this.props.store.dispatch(showFavourite(true));

  // }

  changeTab = (val) => {
    this.props.dispatch(showFavourite(val));
  }

  componentDidMount()
  {

    this.props.dispatch(addMovies(data))
    console.log('app state',this.props);
  }


  isMovieFavourite = (movie) => {
      const {movies}=this.props;
      console.log("isMovieFav"+movies.list+" "+movies.favourites);
      const index=movies.favourites.indexOf(movie);

      if(index!==-1)
      {
        return true;
      }
      return false;
  }

  render()
  {
    //const {moviesTab}=this.state;
    const {movies}=this.props; //{movies:{list:[],favoruites:[]},search:{result:{}}}
    const {list,favourites,showFav}=movies;
    console.log("RENDER",this.props);

    const displayMovies=showFav ? favourites : list;

    return (
      <div className="App">
        <NavBar/>
        <div className="main">
  
              <div className="tabs">
  
                  <div className={`tab ${showFav ? '' : 'active-tabs'}`} onClick={()=>this.changeTab(false)}>
                        Movies
                  </div>
  
                  <button className={`tab ${showFav ? 'active-tabs' : ''}`} onClick={()=>this.changeTab(true)}>
                        Favourites
                  </button>
  
              </div>
  
  
              <div className="list">
                  {displayMovies.map((movie)=>{
                    return(<  MovieCard 
                              movie={movie} 
                              key={movie.imdbID} 
                              isMovieFavourite={this.isMovieFavourite(movie)}
                              dispatch={this.props.dispatch}
                          
                          />)
                  })}
                  
              </div>

              {displayMovies.length===0 ? <div className="no-movies">No movies to display</div> : null}
  
        </div>
      </div>
    );
  }
  
}



// class AppWrapper extends React.Component{
//   render()
//   {
//        return(
       
//             <StoreContext.Consumer>
//                 {(store)=> <App store={store}/>}
//             </StoreContext.Consumer>
//        )
//   }
// }

function mapStateToProps(state)
{
    return {
      movies:state.movies,
      search:state.search
    }
}

const connectedAppComponent=connect(mapStateToProps)(App);

export default connectedAppComponent;
