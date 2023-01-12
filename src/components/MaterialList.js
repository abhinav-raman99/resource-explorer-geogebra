import { fetchMaterials } from '../services/material-service';
import React, { useEffect, useRef, useState } from 'react';
import MaterialCard from './MaterialCard';
import NotifyingLoader from './NotifyingLoader';

export function MaterialList() {
  const [data, setData] = useState([]);
  const page = useRef(0);

  function _loadNextBatch() {
    const pageIndex = page.current++;

    fetchMaterials({
      type: 'featured',
      embed: 'creator',
      limit: 12,
      offset: pageIndex * 11,
    }).then((materials) => {
      setData((data) => data.concat(materials));
    });
  }

  useEffect(() => {
    _loadNextBatch();
  }, []);

  if (!data.length) {
    return <div>The materials are loading...</div>;
  }

  return (
    <div className='mt6'>
      <ul className="list pl0 cf">
        {data.map((material) => (
          <MaterialCard key={material.id} material={material} />
        ))}
      </ul>
      <NotifyingLoader onEnterViewport={_loadNextBatch} />
    </div>
  );
}
