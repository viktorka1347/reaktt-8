import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Details(props) {
  const { info, fetchData } = props;  
  const { id } = info;

  const [data, setData] = useState({ details: {} });
  const { name, avatar, details: { city, company, position } } = data;

  useEffect(() => {
    fetchData(`${id}.json`, data => {
      setData(data); 
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="Details"> 
      <img className="Details-image" src={avatar} alt="no avatar" width="300px"/>
      <h3 className="Details-name">{name}</h3>
      <p className="Details-item">City: {city}</p>
      <p className="Details-item">Company: {company}</p>
      <p className="Details-item">Position: {position}</p>
    </div>   
  );
};

Details.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string 
  }).isRequired,
  fetchData: PropTypes.func.isRequired
};

export default Details;