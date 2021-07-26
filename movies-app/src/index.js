import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

//curried funct =>logger(obj,next,action)
//logger(obj)(next)(action)
// const logger=function({dispatch,getState})
// {
//       return function(next)
//       {
//           return function(action)
//           {
//               //middleware code
//               console.log('ACTION_TYPE=',action.type);
//               next(action)
//           }
//       }
// }

const logger = ({dispatch,getState}) => (next) => (action) => {
  //logger code
  if(typeof action !== 'function')
  {
    console.log('ACTION_TYPE=',action.type);
  }
  next(action);
}

// const thunk = ({dispatch,getState}) => (next) => (action) => {
  
//   if(typeof action ==='function')
//   {
//     action(dispatch);
//     return;
//   }
//   next(action);

// }

const store=createStore(rootReducer,applyMiddleware(logger,thunk));
console.log('store',store);

// export const StoreContext=createContext();
// console.log('StoreContext',StoreContext);

// class Provider extends React.Component
// {
//     render()
//     {
//         const {store}=this.props;
//         return (
//           <StoreContext.Provider value={store}>
//             {this.props.children}
//           </StoreContext.Provider>
//         )
//     }
// }

//const connectedAppComponent=connect(callback)(App);
// export function connect(callback)
// {
//     console.log("connect funt");
//     return function(Component)
//     {
//         class ConnectComponent extends React.Component
//         {
//              constructor(props)
//              {
//                 console.log("Connect Comp Const",props);
//                 super(props);
//                 this.unsubcribe=this.props.store.subscribe(()=>{this.forceUpdate();});
//              }
//              componentWillUnmount()
//              {
//                 this.unsubcribe();
//              }
//              render()
//              {
//                   const {store}=this.props;
//                   const state=store.getState();
//                   console.log("Connect Comp",store);
//                   const dataToBePassedAsProps=callback(state);
//                   return (
//                                 <Component 
//                                   {...dataToBePassedAsProps}
//                                   dispatch={store.dispatch}
//                                 />
//                   )
//              }
//         }

//         class ConnectComponentWrapper extends React.Component
//         {
//             render()
//             {
//                   console.log("Connect Wrapper Comp");
//                   return (
//                     <StoreContext.Consumer>
//                         {(store) => {
//                                       return  <ConnectComponent store={store}/>
//                                     }
//                         }
//                     </StoreContext.Consumer>
//                   )
//             }
//         }
//         return ConnectComponentWrapper;
//     }
// }

ReactDOM.render(
  <Provider store={store}>
    <App  />
  </Provider>,
  document.getElementById('root')
);

