import React from 'react';

const  OverviewGeneral = (props) => {
  const { infoArr } = props;

  return (
      

   
                         <div className='generalInfo' key={infoArr.id}>
                        <div className='generalInfoDIv'>
                         <h2>Name:</h2> 
                        <h1 >{infoArr.name} </h1>
                        </div>
                        <div className='generalInfoDIv'>
                        <h2>Email:</h2> 
                        <h1>{infoArr.email} </h1>
                        </div>
                        <div className='generalInfoDIv'>
                        <h2>Phone:</h2> 
                        <h3>{infoArr.phone}</h3>
                        </div>
                         
                      
                        </div>
  
  );
};

export default OverviewGeneral;