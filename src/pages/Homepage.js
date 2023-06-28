import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import axios from "axios";
import Picture from "../components/picture";
import Page404 from "./Page404";

const Homepage = () => {
  let [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState("");
  const auth = "S6VoY2btPw0HCviYp9COPcKJNHmQ3rH1FR6O7GMkBLuDCz9LjWfTxITd";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;
  const perPage = 15;

  const search = async (url) => {
    if (!input) {
      return; // 如果 input 為空，不執行搜尋
    }
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });

    setData(result.data.photos);
    setCurrentSearch(input);
  };

  const morePicture = async () => {
    let newURL;
    setPage(page + 1);
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${
        page + 1
      }&per_page=${perPage}`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=${perPage}&page=${
        page + 1
      }`;
    }

    let result = await axios.get(newURL, {
      headers: { Authorization: auth },
    });

    setData(data.concat(result.data.photos));
  };

  useEffect(() => {
    search(initialURL);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
        data={data}
      />

      {data && data.length > 0 ? (
        <div className="pictures">
          {data.map((d) => {
            return <Picture data={d} key={d.id} />;
          })}
        </div>
      ) : (
        <Page404 />
      )}

      {data && data.length > 0 && (
        <div className="morePicture">
          <button onClick={morePicture}>More</button>
        </div>
      )}
    </div>
  );
};

export default Homepage;
