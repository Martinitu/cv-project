import React, { Component } from 'react';
import uniquid from "uniqid";
import OverviewEducation from "./Overview-education";

class Education extends Component {
    constructor() {
        super();
        this.state = {
            info: {
                    schoolName: "",
                    titleStudy: "",
                    date: "",
                    id:uniquid()
                  },
            infoArr: [],

        }
    }
    handleChangeSchoolName = (e) => {
        
        this.setState({
        
          info: {
            schoolName: e.target.value,
            titleStudy: this.state.info.email,
            date: this.state.info.phone,
            id: this.state.info.id
          }
        });
      };
      handleChangeTitle = (e) => {
        
        this.setState({
        
          info: {
            schoolName: this.state.info.schoolName,
            titleStudy: e.target.value,
            date: this.state.info.phone,
            id: this.state.info.id
          }
        });
      };
      handleChangeDate = (e) => {
        
        this.setState({
        
          info: {
            schoolName: this.state.info.schoolName,
            titleStudy: this.state.info.titleStudy,
            date: e.target.value,
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
        <div className="education">
            
            <form className="educationForm" onSubmit={this.onSubmitInfo}>
                <label htmlFor="schoolName">School Name</label>
                <input id='schoolName' type="text" onChange={this.handleChangeSchoolName} value={info.schoolName}/>
                <label htmlFor="titleStudy">Tittle of Study</label>
                <input id='titleStudy' type="text" onChange={this.handleChangeTitle} value={info.titleStudy}/>
                <label htmlFor="date">Date</label>
                <input id='date' type="date" onChange={this.handleChangeDate} value={info.date}/>
                <button className="button-1" type='submit'>submit</button>


            </form>
            <OverviewEducation infoArr={infoArr} />    

        </div>

        )}
}; 

export default Education;