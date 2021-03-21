import React, { useState, useEffect } from 'react';
import axios from 'axios';


const WikiSearch = () => {
  const [searchTerm, setsearchTerm] = useState('');
  const [result, setresult] = useState([]);
  const [debounceTerm, setdebounceTerm] = useState(searchTerm);


  useEffect(() => {
    const setTimeOutIdentifier = setTimeout(() => {
      if (searchTerm) {
        setdebounceTerm(searchTerm);
      }
    }, 1000);
    return () => {
        clearTimeout(setTimeOutIdentifier);
    };
  }, [searchTerm]);

  useEffect(() => {
    const searhAxios = async () => {
      const response = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debounceTerm,
        },
      });
      setresult(response.data.query.search);
    };
    if (debounceTerm) {
      searhAxios();
    }
  }, [debounceTerm]);

  // useEffect(() => {
  //  const searhAxios = async () => {
  //   const response = await axios.get("https://en.wikipedia.org/w/api.php", {
  //     params: {
  //       action: "query",
  //       list: "search",
  //       origin: "*",
  //       format: "json",
  //       srsearch: searchTerm,
  //     },
  //   });
  //  setresult(response.data.query.search);
  //  };
  //  const setTimeOutIdentifier = setTimeout(() => {
  //   if (searchTerm) {
  //     searhAxios();
  //   }
  //  }, 500);
  //   return () => {
  //     clearTimeout(setTimeOutIdentifier);
  //   };
  // }, [searchTerm]);

  const renderResultList = result.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="_blank"
            rel="noreferrer"
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Wiki Search Term</label>
          <input value={searchTerm} onChange={(e) => setsearchTerm(e.target.value)} className="input" />
        </div>
      </div>
      <div className='ui celled list'>{renderResultList}</div>
    </div>
  );
};

export default WikiSearch;