import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import DetailCard from "../components/DetailCard";
import { fetchMaterial } from "../services/material-service";
const DetailsView = (props) => {
  const { pathname } = useLocation();
  const { goBack } = useHistory()
  const [data, setData] = useState(null);

  useEffect(() => {
    const materialId = pathname.split("/")[2];
    fetchMaterial(materialId, {
      scope: "extended",
      embed: "creator,contributors,tags",
    }).then((res) => {
      console.log(res);
      setData(res);
    });
  }, [pathname]);

  return (
    <div className="mt6">
      <button className="bg-white b--transparent pointer absolute bg-transparent pa4" onClick={goBack} title="Go back">
        <svg
          height="40px"
          width="40px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
        >
          <path d="M189.3,128.4L89,233.4c-6,5.8-9,13.7-9,22.4c0,8.7,3,16.5,9,22.4l100.3,105.4c11.9,12.5,31.3,12.5,43.2,0  c11.9-12.5,11.9-32.7,0-45.2L184.4,288h217c16.9,0,30.6-14.3,30.6-32c0-17.7-13.7-32-30.6-32h-217l48.2-50.4  c11.9-12.5,11.9-32.7,0-45.2C220.6,115.9,201.3,115.9,189.3,128.4z" />
        </svg>
      </button>
      {data ? (
        <div>
          <DetailCard materialData={data} />{" "}
        </div>
      ) : (
        <div className="tc f3">Loading...</div>
      )}
    </div>
  );
};

export default DetailsView;
