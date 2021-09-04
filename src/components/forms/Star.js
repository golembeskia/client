// import React from "react";
// import StarRating from "react-star-ratings";

// const Star = ({ starClick, numberOfStars }) => (
//   <>
//     <StarRating
//       changeRating={() => starClick(numberOfStars)}
//       numberOfStars={numberOfStars}
//       starDimension="20px"
//       starSpacing="2px"
//       starHoverColor="#fadb14"
//       starEmptyColor="#fadb14"
//     />
//     <br />
//   </>
// );

// export default Star;

import React, { Fragment } from 'react'
import StarRating from 'react-star-ratings'

const Star = ({ starClick, num, starEmptyColor = '#fadb14' }) => (
    <Fragment>
        <StarRating
        changeRating={() => starClick(num.starNum)}
        numberOfStars={num.starNum}
        starDimension="20px"
        starSpacing="2px"
        starEmptyColor={starEmptyColor}
        starHoverColor={starEmptyColor}
        editing={false}
        />
    </Fragment>
)

export default Star
