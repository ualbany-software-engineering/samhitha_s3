import paginate from "paginate-array";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { getList } from "../utils/Api";
import Profile from "./Profile";

const Profiles = (props) => {
  const [profiles, setProfiles] = useState(null);
  const [renderlist, setrenderlist] = useState([]);
  const [hasMoreItems, sethasMoreItems] = useState(true);
  const [initialLoad, setinitialLoad] = useState(true);

  useEffect(() => {
    const fetchAndSetProfiles = async () => {
      const result = await getList(props.storytype);
      if (result.resolved) {
        setProfiles(result.data);
      }
    };
    fetchAndSetProfiles();
  }, [props.storytype]);

  const loadItems = (pageNumber) => {
    const pageItems = paginate(profiles, pageNumber, 10); //10 items per page
    setrenderlist([...renderlist, ...pageItems.data]);
    setinitialLoad(false);
    sethasMoreItems(
      pageItems.currentPage !== pageItems.totalPages &&
        pageItems.data.length !== 0
    );
  };

  if (!profiles) {
    return null;
  }
  const loader = (
    <div className="loader" key={0}>
      Loading ...
    </div>
  );

  return (
    <div className="profiles">
      <InfiniteScroll
        pageStart={0}
        loadMore={loadItems}
        hasMore={hasMoreItems}
        initialLoad={initialLoad}
        loader={loader}
      >
        {renderlist.map((item, index) => (
          <Profile key={index} item={item} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Profiles;
