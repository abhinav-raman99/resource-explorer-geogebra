import useSWR from "swr";
import {fetchMaterials} from "../material-service";
import React from "react";
import MaterialCard from "../material-card";

export function MaterialList() {
  const {data, error} = useSWR(['/materials', 'featured', 'creator', 10], fetchMaterials);

  if (!data) {
    return <div>The materials are loading...</div>
  }

  return (
    <ul className="list pl0 cf">
      {data.map((material) => <MaterialCard key={material.id} material={material}/>)}
    </ul>
  )
}