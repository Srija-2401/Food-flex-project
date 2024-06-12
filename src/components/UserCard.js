import React from "react"
import UserContext from "../utils/UserContext";

class UserCard extends React.Component{

    constructor(props){
        super(props);
       this.state={
        count : 0
       }
    }
    render(){
        
        const {name,location} = this.props;
        const {count} = this.state;
        return(<div className="user-card">
           <h1>Name : {name}</h1>
           <h2>Location : {location}</h2>
           {/* <h3>Count : {count}</h3> */}
           {/* <p><UserContext.Consumer>
            {(data)=>data.loggedInUser}
            </UserContext.Consumer></p> */}
           {/* <button onClick={()=>{
            this.setState({
                count:this.state.count+1
            })

           }}>Yass</button> */}
           {/* <h3>Contact : srija_2424</h3> */}
        </div>)
    }
}
export default UserCard;