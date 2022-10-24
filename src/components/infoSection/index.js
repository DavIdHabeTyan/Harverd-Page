import React from 'react';

const InfoSection = ({ info }) => {
   return (
      <div>
         <h3>Records: {info.totalrecords}</h3>
      </div>
   );
};

export default InfoSection;