import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function MaterialCard(props) {
  const {material} = props;
  return (
    <li className="db w-100 pb4 fl">
      <Link to={`/details/${material.id}`} className="db color-inherit">
        <div className="dib w-20 fl">
          <img src={material.thumbUrl} alt="Thumbnail of resource" className="w-100"/>
        </div>
        <div className="dib w-80 fl pl2">
          <h3 className="f5 mt0 mb2">{material.title}</h3>
          <div className="mb2">
            {material.type === 'book' ? 'Book' : 'Worksheet'} by {material.creator.displayname}
          </div>
          <div>Created on {_dateToString(material.date_created)}</div>
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

function _dateToString(dateTime) {
  const date = new Date(dateTime * 1000);
  const intl = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
  return intl.format(date);
}