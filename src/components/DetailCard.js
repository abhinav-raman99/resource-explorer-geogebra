import React from "react";
import { _dateToString } from "./MaterialCard";

const DetailCard = ({ materialData }) => {
  const { thumbUrl, type, title, creator, date_created, contributors, tags } =
    materialData;

  //    (thumbnail, type, name of author and creation date),
  // along with all the names of the contributors, the description and a simple listing of all the tags (which includes
  // categories, tags and topics).

  const getContributorsList = (arr) => {
    return arr.map((e) => e.displayname).join(", ");
  };

  return (
    <div className="w-100 tc pa4 br4 detail-card">
      <h2 className="ma2">{title}</h2>
      <p>
        <i>
          {type === "book" ? "Book" : "Worksheet"} by {creator.displayname}
        </i>
      </p>
      <p>{_dateToString(date_created)}</p>
      <div className="w-100 tc">
        <img className="vh-50 br4" src={thumbUrl} alt="thumbnail" />
      </div>
      <div className="mt4">
        <b>Contributors:</b>{" "}
        {contributors.length > 0 ? (
          getContributorsList(contributors)
        ) : (
          <i>none</i>
        )}
      </div>
      <div>
        <b>Tags:</b> {tags.length > 0 ? tags.join(", ") : "none"}
      </div>
    </div>
  );
};

export default DetailCard;