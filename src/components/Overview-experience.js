import React from 'react';

const  OverviewExperience = (props) => {
  const { infoArr } = props;

  return (
      <div>
    
      {infoArr.map((info) => {
       
            return  (
                       <ul className='infoExperience' key={info.id}>
                        <li >{info.companyName} </li>
                        <li>{info.position} </li>
                        <li>{info.mainTask}</li>
                        <li> {info.startDate} </li>
                        <li>{info.endDate}</li> 
                        <button className="button-1">erase</button>
                        </ul>
                    )
        })}
       
        </div>
   
  );
};

export default OverviewExperience;