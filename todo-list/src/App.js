import React from "react";

class App extends React.Component {

  constructor()
  {
     super();
     this.state={
       notes:[],
       title:"",
       status:"",
       activeNotes:[],
       completedNotes:[],
       showAll:true,
       showActive:false,
       showCompleted:false
     }
  }

  changeTitle=(e)=>{
    this.setState({
      title:e.target.value
    })
  }

  changeStatus=(e)=>{
    this.setState({
      status:e.target.value
    })
  }


  addNote=()=>{
       const {title,status,activeNotes,completedNotes,notes}=this.state;

       if(title==="" || status==="")
       {
           return;
       }

       let newnode={
         title,
         status
       }

       if(status==="active" || status==="completed")
       {


            if(status==="active")
            {
              activeNotes.push(newnode);
              this.setState({
                activeNotes:activeNotes
              })
            }
            else
            {
              completedNotes.push(newnode);
              this.setState({
                completedNotes:completedNotes
              })
            }
       
            let newNotes=[];

            for(let note of activeNotes)
            {
                newNotes.push(note);
            }

            for(let note of completedNotes)
            {
              newNotes.push(note);
            }

            for(let i=activeNotes.length+completedNotes.length-1;i<notes.length;i++)
            {
                newNotes.push(notes[i]);
            }
            this.setState({
              notes:newNotes
            })

      


       }
       else
       {
            notes.push(newnode);
            this.setState({
              notes:notes
            })
       }
  }


  showAllTab=()=>{
    this.setState({
      showAll:true,
      showActive:false,
      showCompleted:false
    })
  }

  showActiveTab=()=>{
    this.setState({
      showAll:false,
      showActive:true,
      showCompleted:false
    })
  }

  showCompletedTab=()=>{
    this.setState({
      showAll:false,
      showActive:false,
      showCompleted:true
    })
  }

  render()
  {
    const {notes,activeNotes,completedNotes,showAll,showActive}=this.state;

    let displayNotes;

    if(showAll)
    {
        displayNotes=notes;
    }
    else if(showActive)
    {
        displayNotes=activeNotes;
    }
    else
    {
        displayNotes=completedNotes;
    }

    return (
      <div className="App">

          <form>

               <input type="text" required placeholder="Enter Title" onChange={this.changeTitle}/>
               <input type="text" required placeholder="Enter Status" onChange={this.changeStatus}/>

               <button type="button" onClick={this.addNote}>Submit</button>

          </form>

          <div>
                <div onClick={this.showAllTab}>
                     ALL
                </div>
                <div onClick={this.showActiveTab}>
                  Active
                </div>
                <div onClick={this.showCompletedTab}>
                  Completed
                </div>
              
          </div>


          <div className="display-list">

               {displayNotes.map((note)=>{
                 return (
                      <li>
                          {note.title} {note.status}
                      </li>)
        
               })}

          </div>
        
      </div>
    );
  }

}

export default App;
