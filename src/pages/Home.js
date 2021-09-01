import React from 'react'
import Jumbotron from '../components/cards/Jumbotron'
import NewArrivals from '../components/home/NewArrivals'
import BestSellers from '../components/home/BestSellers'

const Home = () => {
  return (
    <>
      <div className="jumbotron text-primary h1 font-weight-bold text-center">
        <Jumbotron text={['Research Food', 'Compare Food', 'Find The Food That Fits Your Needs']} />
      </div>

      <h4
        // style={{ backgroundColor: "#69c0ff", color: "white" }}
        className="text-left font-weight-bold p-3 mt-2 mb-2 display-7 jumbotron"
      >
        New Items
      </h4>
      <NewArrivals />

      <h4
        // style={{ backgroundColor: "#69c0ff", color: "white" }}
        className="text-left font-weight-bold p-3 mt-2 mb-2 display-7 jumbotron"
      >
        Most Viewed
      </h4>
      <BestSellers />

      {/* <h4
        // style={{ backgroundColor: "#69c0ff", color: "white" }}
        className="text-left font-weight-bold p-3 mt-2 mb-2 display-7 jumbotron"
      >
        Categories
      </h4>
      <CategoryList />

      <h4
        // style={{ backgroundColor: "#69c0ff", color: "white" }}
        className="text-left font-weight-bold p-3 mt-2 mb-2 display-7 jumbotron"
      >
        Sub Categories
      </h4>
      <SubList /> */}

      <br />
      <br />
    </>
  )
}

export default Home
