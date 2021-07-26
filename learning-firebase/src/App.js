import React from 'react';

class App extends React.Component {

  constructor()
  {
    super();
    console.log("CONSTRUCTOR");

    this.state={
      count:0
    }
  }

  handleClick=()=>{
    this.setState((prevState)=>{
      return{
        count:prevState.count+1
      }
    });
  }

  componentDidMount()
  {
    console.log("COMPONENT_DID_MOUNT"); // this function is only called once inspite of changing this.setState and render 
                                        // function is called again. This is only called once at last when the page is
                                        // fully rendered
                                        // This function is used to make APIs call, event listener, timers
  }



  componentDidUpdate(prevProps,prevState) // this function will always be called when we are changing the state of the object
  {                                      //  by using setState                              
      console.log("Compomentdidupdate"); // This function is right now triggered by the button onClick={this.handleclick}
     // console.log("prev props ",prevProps);
      console.log("prev State",prevState);
      //console.log("current props",this.props);
      console.log("present state",this.state);

      if (prevState.count===0 && this.state.count===1)
      {
        this.setState({
          count:100
        })
      }

      // this.setState({  // if use setState without any conditions the commentDidUpdate will be stuck in an infinite loop
      //                  // becuz this.setState will again call commentDidUpdate and commentDidUpdate will again call this
      //                  // func
      //   count:100
      // })
  }

  componentWillUnmount()
  {
    //cleanup
    // This component is just triggered when our component is being removed from the DOM
    // We can remove eventListeners, timers, cancel API calls
  }

  render()
  {
    console.log("RENDER");
    return (
      <div className="App">
         Count <br/>
        {this.state.count} <br/>
        <button onClick={this.handleClick}> Inc Count </button>

      </div>
    );
  }
}

export default App;
