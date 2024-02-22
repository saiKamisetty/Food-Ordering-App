import React from "react";

// class Component 

class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log(props)

        this.state={
            count:0
        }
    }
    render(){
        const {Name}=this.props;
        const {count}=this.state;
        return(
            <div className="m-3 bg-slate-200">
                <h2 className="text-m font-bold">Count:{count}</h2>
                <button onClick={()=>{  
                    this.setState({
                        count:this.state.count + 1
                    })
                }}>Increase</button>
                <h3 className="text-lg font-bold">Name:{Name}</h3>
                <h3 className="text-sm font-bold">Location:Rajampet</h3>
                <h3 className="text-sm font-bold">Address:saimechanical</h3>
            </div>

        )
    }
};

export default UserClass;