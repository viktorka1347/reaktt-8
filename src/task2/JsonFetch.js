import PropTypes from 'prop-types';
import useJsonFetch from './useJsonFetch';

function JsonFetch(props) {
  const { path } = props;  

  const [data, loading, error] = useJsonFetch(process.env.REACT_APP_JSON_SERVER + path);

  const outputData = (
    <div className="JsonFetch-data">
      {typeof data === 'object' && Object.keys(data).map((key, i) => <p key={i}>{key + ': ' + data[key]}</p>)}
    </div>
  ) 

  const outputError = error && error.message ? error.message : 'Server Not Found';
  
  return (
    <div className="JsonFetch"> 
      {error ? <p className="JsonFetch-error">{outputError}</p> : outputData}
      {loading && (
        <div className="JsonFetch-loading">
          <p className="JsonFetch-loading-text">Loading...</p>
        </div>
      )}
    </div>
  );
};

JsonFetch.propTypes = {
  path: PropTypes.string.isRequired
};

export default JsonFetch;