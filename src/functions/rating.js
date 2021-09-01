import React from 'react'
import StarRating from 'react-star-ratings'
// [1, 4, 6, 7]
// 1 + 4 = 5
// 5 + 6 = 11
// 11 + 7 = 18
export const showAverage = (p) => {
  if (p && p.ratings) {
    const ratingsArray = p && p.ratings
    const total = []
    const length = ratingsArray.length
    // console.log("length", length);

    ratingsArray.map((r) => total.push(r.star))
    const totalReduced = total.reduce((p, n) => p + n, 0)
    // console.log("totalReduced", totalReduced);

    const highest = length * 5
    // console.log("highest", highest);

    const result = (totalReduced * 5) / highest
    // console.log("result", result);

    return (
      <div className="text-center pt-1 pb-3">
        <span>
          <StarRating
            starDimension="20px"
            starSpacing="2px"
            starRatedColor="#fadb14"
            rating={result}
            editing={false}
          />{' '}
          ({p.ratings.length})
        </span>
      </div>
    )
  }
}
