import React, {  useState } from 'react';
import uniquid from "uniqid";
import OverviewGeneral from "./Overview-general"

const General = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    id:uniquid()
}
);
const [infoArr, setinfoArr] = useState([])


  const handleChangeName = (e) => {
        
   setInfo({
    name: e.target.value,
    email: info.email,
    phone: info.phone,
    id: info.id
  });
  };
  const handleChangeEmail = (e) => {
        
    setInfo({
      name: info.name,
      email: e.target.value,
      phone: info.phone,
      id: info.id
     
    });
   };
   const handleChangePhone = (e) => {
        
    setInfo({
      name: info.name,
      email: info.email,
      phone: e.target.value,
      id: info.id
    });
   };
   const onSubmitInfo = (e) => {
    e.preventDefault();
    
   setinfoArr(info);
   };
   return(
    <div className="general">
        
        <form className="generalForm" onSubmit={onSubmitInfo}>
            <label htmlFor="name">Name</label>
            <input id='name' type="text" onChange={handleChangeName} value={info.name}/>
            <label htmlFor="email">Email</label>
            <input id='email' type="email" onChange={handleChangeEmail} value={info.email}/>
            <label htmlFor="phone">Phone Number</label>
            <input id='phone' type="tel" onChange={handleChangePhone} value={info.phone}/>
            
            <button className="button-1" type='submit'>submit or edit</button>


        </form>
        <OverviewGeneral infoArr={infoArr} />


    </div>

    )
  
};



/*class General extends Component {
    constructor() {
        super();
        this.state = {
           info: {
                    name: "",
                    email: "",
                    phone: "",
                    id:uniquid()
                },
            infoArr: [],
        };
       
    }

    handleChangeName = (e) => {
        
        this.setState({
        
          info: {
            name: e.target.value,
            email: this.state.info.email,
            phone: this.state.info.phone,
            id: this.state.info.id
          }
        });
      };
      handleChangeEmail = (e) => {
        
        this.setState({
        
          info: {
            name: this.state.info.name,
            email: e.target.value,
            phone: this.state.info.phone,
            id: this.state.info.id
           
          }
        });
      };
      handleChangePhone = (e) => {
        
        this.setState({
        
          info: {
            name: this.state.info.name,
            email: this.state.info.email,
            phone: e.target.value,
            id: this.state.info.id
          }
        });
      };


  onSubmitInfo = (e) => {
    e.preventDefault();
    
    this.setState({
     
      infoArr: this.state.info,
      
    });
    

  };



    render(){
        const { info, infoArr } = this.state;
        return(
        <div className="general">
            
            <form className="generalForm" onSubmit={this.onSubmitInfo}>
                <label htmlFor="name">Name</label>
                <input id='name' type="text" onChange={this.handleChangeName} value={info.name}/>
                <label htmlFor="email">Email</label>
                <input id='email' type="email" onChange={this.handleChangeEmail} value={info.email}/>
                <label htmlFor="phone">Phone Number</label>
                <input id='phone' type="tel" onChange={this.handleChangePhone} value={info.phone}/>
                
                <button className="button-1" type='submit'>submit or edit</button>


            </form>
            <OverviewGeneral infoArr={infoArr} />


        </div>

        )}
}; 
*/
export default General;