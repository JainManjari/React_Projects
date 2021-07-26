import React from 'react';
import {handleMovieSearch,addMovieToList} from '../actions';
//import {StoreContext} from '../index';
//import {data} from '../data';
// import {connect} from '../index';
import {connect} from 'react-redux';

class NavBar extends React.Component {

  constructor(props)
  {
      super(props);
      this.state={
        searchText:''
      }
  }

  handleChange = (e) => {
    this.setState({
      searchText:e.target.value
    })
  }


  handleAddToMovies = (movie) => 
  {
      this.props.dispatch(addMovieToList(movie));
      this.setState({
        showSearchResults:false
      })
  }

  handleSearch = () => {
    const {searchText}=this.state;
    console.log("search button ",searchText);
    this.props.dispatch(handleMovieSearch(searchText));
  }

  render()
  {
    const {search}=this.props;
    const {result:movie,showSearchResults} =search;
    console.log("navbar ",this.props);
    return (
        <div className="nav">
            <div className="search-container">
                <input onChange={this.handleChange} />
                <button id="search-btn" 
                onClick={this.handleSearch}>
                  Search
                </button>

                {showSearchResults && 
                  <div className="search-results">
                      <div className="search-result">
                          <img src={movie.Poster} alter="search-pic"/>
                          <div className="movie-info">
                               <span>{movie.Title}</span>
                               <button onClick={()=>this.handleAddToMovies(movie)}>Add to Movies</button>
                          </div>
                      </div>
                  </div>
                }
            </div>
        </div>
      );
  }  
}

// class NavBarWrapper extends React.Component{

//   render()
//   {
//        return(
//          <StoreContext.Consumer>
//            {(store)=><NavBar dispatch={store.dispatch}
//                       search={this.props.search}/>}
//          </StoreContext.Consumer>
//        )
//   }

// }

function mapStateToProps({search})
{
    return {
      search
    }
}

const connectedNavBarComponent=connect(mapStateToProps)(NavBar);

export default connectedNavBarComponent;
