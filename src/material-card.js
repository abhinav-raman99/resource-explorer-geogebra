import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function MaterialCard(props) {
  const {material} = props;
  return (
    <li className="db w-100 pb4 fl">
      <Link to={`/details/${material.id}`} className="db color-inherit">
        <div className="dib w-20 fl">
          <img src={material.thumbUrl.replace('$1', '')} alt="Thumbnail of resource" className="w-100"/>
        </div>
        <div className="dib w-80 fl">
          <h3 className="f5 mv0">{material.title}</h3>
          <div>{material.creator.displayname}</div>
          <div>{material.type}</div>
          <div>{material.date_created}</div>
        </div>
      </Link>
    </li>
  )
}
MaterialCard.propTypes = {
  material: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbUrl: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date_created: PropTypes.number.isRequired,
    creator: PropTypes.object.isRequired,
  }).isRequired,
}