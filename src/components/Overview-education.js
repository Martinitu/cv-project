import React from 'react';

const  OverviewEducation = (props) => {
  const { infoArr } = props;

  return (
      
    <div>
      {infoArr.map((info) => {
       
            return  (
                        <ul key={info.id}>
                        <li>{info.schoolName}</li>
                         <li>{info.titleStudy}</li>
                         <li> {info.date}</li> 
                        
                        <button>edit</button>
                        </ul>
                    )
        })}
    </div>
  );
};

export default OverviewEducation;