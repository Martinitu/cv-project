import React from 'react';

const  OverviewGeneral = (props) => {
  const { infoArr } = props;

  return (
      

   
                         <div key={infoArr.id}>
                        <h1 >{infoArr.name} </h1>
                        <h2>{infoArr.email} </h2>
                        <h3>{infoArr.phone}</h3>
                         
                      
                        </div>
  
  );
};

export default OverviewGeneral;