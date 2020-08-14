import React, { useState, useEffect } from "react";

export const Bio = () => {
  return (
    <div className="card text-white bg-dark w-75">
      <div className="card-header h5 text-left">About José Larralde:</div>
      <div className="card-text text-justify p-3">
        José Larralde (born in Huanguelén, Buenos Aires, 1937) is an Argentine
        singer-songwriter of folk music. <br /> At the early age of 7 Larralde
        had already written songs with social content. Throughout the years he
        would write various songs about crafts, situations and people he had
        stumbled upon in his life.
        <br /> Of Iraqi and Basque descent, José Larralde has been a bricklayer,
        a rural worker, a solderer, a mechanic, and a guitarist and songwriter.
        Larralde is not as well known as other folklore argentino artists
        because of his shunning of promotions and massive concentrations.
        Notwithstanding, his singing crossed the national boundaries and
        triumphed in countries such as Germany, Australia, Mexico, Brazil,
        Uruguay, Paraguay, Chile and Spain among others. His lyrics deal with
        social and political injustices and inequities.
      </div>
    </div>
  );
};
export default Bio;
