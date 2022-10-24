import React from 'react';
import GalleryDivision from "../main/galaryDivision";

function DivisionContainer({records}) {
   return (
      <div>
         {records.map(({
                          id,
                          images,
                          division,
                          copyright,
                          creditline,
                          totaluniquepageviews,
                          verificationleveldescription
                       }) =>
            <GalleryDivision
               {...{
                  id,
                  images,
                  division,
                  copyright,
                  creditline,
                  totaluniquepageviews,
                  verificationleveldescription
               }}/>
         )}

      </div>
   );
}

export default DivisionContainer;