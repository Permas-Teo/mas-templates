import React from "react";
import { getImageSrc } from "./utilities/utils";

const CardDefault = ({ card }) => {
  console.log(card);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="flex flex-wrap">
        <div className="h-24 w-72">
          <img
            src={getImageSrc(card.forecast)}
            className="h-20 w-20 mt-3 mx-auto"
            alt="forecast"
          />
        </div>
      </div>

      <div className="px-6 py-2">
        <div className="font-bold text-purple-500 text-xl mb-2">
          {card.area}
        </div>
        <ul>
          <li>
            <strong>Forecast: </strong>
            {card.forecast}
          </li>
          {/* <li>
            <span className="font-semibold float-right pb-3 ">...</span>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default CardDefault;
