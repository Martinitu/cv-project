import React from 'react';

const  OverviewExperience = (props) => {
  const { infoArr } = props;

  return (
      <div>
    
      {infoArr.map((info) => {
       
            return  (
                       <ul key={info.id}>
                        <li >{info.companyName} </li>
                        <li>{info.position} </li>
                        <li>{info.mainTask}</li>
                        <li> {info.startDate} </li>
                        <li>{info.endDate}</li> 
                        <button>edit</button>
                        </ul>
                    )
        })}
       
        </div>
   
  );
};

export default OverviewExperience;