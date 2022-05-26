import React from "react";
import Foods from "../components/Foods";
import foods from "../fooddata";

function Homepage() {
  return (
    <div>
      <div className="row">
        {foods.map((food) => (
          <div className="col-md-3">
            <Foods food={food} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
