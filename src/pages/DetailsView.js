import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DetailCard from "../components/DetailCard";
import { fetchMaterial } from "../services/material-service";
const DetailsView = (props) => {
   const { pathname } = useLocation();
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
         {data ? (
            <div><DetailCard materialData={data} /> </div>
         ) : (
            <div className="tc f3">Loading...</div>
         )}
      </div>
   );
};

export default DetailsView;
