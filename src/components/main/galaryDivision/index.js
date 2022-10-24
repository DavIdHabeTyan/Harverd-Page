import React from 'react';
import "./style.css"
function GalleryDivision(props) {
   const {
      id,
      images,
      division,
      copyright,
      creditline,
      totaluniquepageviews,
      verificationleveldescription
   } = props
   return (
      <div className={"division"}>
         <h4> {verificationleveldescription} </h4>
         <div className="imageGrid">
            {images.map(({imageid, baseimageurl}) => <img key={imageid} className={"galleryItem"} src={baseimageurl} alt=""/>)}
         </div>

         <div className="divisionInfo">

            <div>Division: {division}</div>
            <div>Copy right : {copyright}</div>

            <div>Total unique page views : {totaluniquepageviews}</div>
            <div>Credit line : {creditline}</div>

         </div>
      </div>
   );
}

export default GalleryDivision;