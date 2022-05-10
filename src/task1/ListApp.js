import { useState, useEffect } from 'react';
import List from './List';
import Details from './Details';

function ListApp() {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData('users.json', data => {
      setList(data);
      setSelected(-1);  
    });
  },[]);

  const fetchData = async (file, getData) => {
    setLoading(true);
    try {
      const response = await fetch(process.env.REACT_APP_USERS_DATA + file);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      setError(null);
      getData(data);

    } catch (error) {
      setError(error);

    } finally {
      setLoading(false);
    }
  }

  const onClick = id => {
    setSelected(list.findIndex(item => item.id === id));
  }

  return (
    <div className="ListApp">
      <div className="ListApp-container">
        <List list={list} selected={selected} onClick={onClick}/>
        {selected >= 0 && <Details info={list[selected]} fetchData={fetchData} />}
      </div>
      {loading && (
        <div className="ListApp-loading">
          <p className="ListApp-loading-text">Loading...</p>
        </div>
      )}
      {error && <p className="ListApp-error">{error.message ? error.message : 'Server not found'}</p>}
    </div>
  );
}

export default ListApp;