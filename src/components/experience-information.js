import React, { useState } from 'react';
import uniquid from "uniqid";
import OverviewExperience from './Overview-experience'

const Experience = () => {
  const [info, setInfo] = useState({
                companyName: "",
                position: "",
                mainTask: "",
                startDate: "",
                endDate: "",
                id:uniquid()
}
);
const [infoArr, setinfoArr] = useState([]);

const  handleChangeCompanyName = (e) => {
        
  setInfo({
      companyName: e.target.value,
      position: info.position,
      mainTask: info.mainTask,
      startDate: info.startDate,
      endDate: info.endDate,
      id: info.id
         });
};
const handleChangePosition = (e) => {
        
  setInfo({
      companyName: info.companyName,
      position: e.target.value,
      mainTask: info.mainTask,
      startDate:info.startDate,
      endDate: info.endDate,
      id: info.id
    
  });
};

  const handleChangeMainTask = (e) => {
        
      setInfo({
        companyName: info.companyName,
        position: info.position,
        mainTask: e.target.value,
        startDate: info.startDate,
        endDate: info.endDate,
        id: info.id
      });
  };
  const handleChangeStartDate = (e) => {
        
    setInfo({
        companyName: info.companyName,
        position: info.position,
        mainTask: info.mainTask,
        startDate: e.target.value,
        endDate: info.endDate,
        id: info.id
      
    });
  };
 const  handleChangeEndDate = (e) => {
        
    setInfo({
    
        companyName: info.companyName,
        position: info.position,
        mainTask: info.mainTask,
        startDate: info.startDate,
        endDate: e.target.value,
        id: info.id
      
    });
  };
  const onSubmitInfo = (e) => {
    e.preventDefault();
    
    setinfoArr(infoArr.concat(info));
  };
  return(
    <div className="experience" onSubmit={onSubmitInfo}>
        
        <form className="experienceForm">
            <label htmlFor="companyName">Company Name</label>
            <input id='companyName' type="text" onChange={handleChangeCompanyName} value={info.companyName}/>
            <label htmlFor="position">Position</label>
            <input id='position' type="text" onChange={handleChangePosition} value={info.position}/>
            <label htmlFor="mainTask">Main Task</label>
            <input id='mainTask' type="text" onChange={handleChangeMainTask} value={info.mainTask}/>
            <label htmlFor="startDate"> Start Date</label>
            <input id='startDate' type="date" onChange={handleChangeStartDate} value={info.startDate}/>
            <label htmlFor="endDate"> End Date</label>
            <input id='endDate' type="date" onChange={handleChangeEndDate} value={info.endDate}/>
            
            <button className="button-1" type='submit'>submit</button>


        </form>
        <div className="experienceInfoDiv">
        <ul className='infoTitleExperience'>
                    <li>Company Name</li>
                     <li>Position</li>
                     <li>Role</li> 
                     <li>Start Date</li>
                     <li>End Date</li>
          </ul>
        <OverviewExperience infoArr={infoArr} />
        </div>

    </div>

    )


};





/*
class Experience extends Component {
    constructor() {
        super();
        this.state = {
            info: {
                companyName: "",
                position: "",
                mainTask: "",
                startDate: "",
                endDate: "",
                id:uniquid()
                 },
            infoArr: [],
         };
    }
    handleChangeCompanyName = (e) => {
        
        this.setState({
        
          info: {
            companyName: e.target.value,
            position: this.state.info.position,
            mainTask: this.state.info.mainTask,
            startDate: this.state.info.startDate,
            endDate: this.state.info.endDate,
            id: this.state.info.id
          }
        });
      };

      handleChangePosition = (e) => {
        
        this.setState({
        
          info: {
            companyName: this.state.info.companyName,
            position: e.target.value,
            mainTask: this.state.info.mainTask,
            startDate: this.state.info.startDate,
            endDate: this.state.info.endDate,
            id: this.state.info.id
          }
        });
      };


      handleChangeMainTask = (e) => {
        
        this.setState({
        
          info: {
            companyName: this.state.info.companyName,
            position: this.state.info.position,
            mainTask: e.target.value,
            startDate: this.state.info.startDate,
            endDate: this.state.info.endDate,
            id: this.state.info.id
          }
        });
      };

      handleChangeStartDate = (e) => {
        
        this.setState({
        
          info: {
            companyName: this.state.info.companyName,
            position: this.state.info.position,
            mainTask: this.state.info.mainTask,
            startDate: e.target.value,
            endDate: this.state.info.endDate,
            id: this.state.info.id
          }
        });
      };

      handleChangeEndDate = (e) => {
        
        this.setState({
        
          info: {
            companyName: this.state.info.companyName,
            position: this.state.info.position,
            mainTask: this.state.info.mainTask,
            startDate: this.state.info.startDate,
            endDate: e.target.value,
            id: this.state.info.id
          }
        });
      };

      onSubmitInfo = (e) => {
        e.preventDefault();
        
        this.setState({
            
          infoArr: this.state.infoArr.concat(this.state.info),
          
        });
      };

    render(){
        const { info, infoArr } = this.state;
        return(
        <div className="experience" onSubmit={this.onSubmitInfo}>
            
            <form className="experienceForm">
                <label htmlFor="companyName">Company Name</label>
                <input id='companyName' type="text" onChange={this.handleChangeCompanyName} value={info.companyName}/>
                <label htmlFor="position">Position</label>
                <input id='position' type="text" onChange={this.handleChangePosition} value={info.position}/>
                <label htmlFor="mainTask">Main Task</label>
                <input id='mainTask' type="text" onChange={this.handleChangeMainTask} value={info.mainTask}/>
                <label htmlFor="startDate"> Start Date</label>
                <input id='startDate' type="date" onChange={this.handleChangeStartDate} value={info.startDate}/>
                <label htmlFor="endDate"> End Date</label>
                <input id='endDate' type="date" onChange={this.handleChangeEndDate} value={info.endDate}/>
                
                <button className="button-1" type='submit'>submit</button>


            </form>
            <div className="experienceInfoDiv">
            <ul className='infoTitleExperience'>
                        <li>Company Name</li>
                         <li>Position</li>
                         <li>Role</li> 
                         <li>Start Date</li>
                         <li>End Date</li>
              </ul>
            <OverviewExperience infoArr={infoArr} />
            </div>

        </div>

        )}
}; 
*/
export default Experience;