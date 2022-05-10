import PropTypes from 'prop-types';

function List(props) {
  const { list, selected, onClick } = props;  
  
  return (
    <ul className="List">
      {list.map(({ id, name }, i) => 
        <li className={i === selected ? 'List-item List-item-selected' : 'List-item'} 
          onClick={() => onClick(id)} 
          key={id}>{name}
        </li>
      )}
    </ul>   
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string 
    })
  ).isRequired,
  selected: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default List;