import { useState, useEffect, useRef } from "react";

export default function SpaceXLaunches() {
  const [launches, setLaunches] = useState([]);
  const [filteredLaunches, setFilteredLaunches] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const fetchLaunches = async (pageNumber) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.spacexdata.com/v3/launches?limit=10&offset=${
          (pageNumber - 1) * 10
        }`
      );
      const data = await response.json();

      if (data.length === 0) {
        setHasMore(false);
      } else {
        setLaunches((prevLaunches) => [...prevLaunches, ...data]);
        setFilteredLaunches((prevLaunches) => [...prevLaunches, ...data]); // Update filtered list
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching launches:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLaunches(page);
  }, [page]);

  const lastLaunchRef = useRef();
  useEffect(() => {
    if (loading) return;

    const callback = (entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    const observerInstance = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    if (lastLaunchRef.current) {
      observerInstance.observe(lastLaunchRef.current);
    }

    return () => {
      if (lastLaunchRef.current) {
        observerInstance.unobserve(lastLaunchRef.current);
      }
    };
  }, [loading, hasMore]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredLaunches(launches);
    } else {
      const filtered = launches.filter((launch) =>
        launch.mission_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLaunches(filtered);
    }
  }, [searchTerm, launches]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>SpaceX Launches</h1>

      <input
        type="text"
        placeholder="Search by mission name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          marginBottom: "20px",
          padding: "10px",
          width: "100%",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      />
      <div
        style={{
          height: "400px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <ul>
          {filteredLaunches.map((launch, index) => {
            const isLastItem = index === filteredLaunches.length - 1;
            return (
              <li
                key={launch.flight_number}
                ref={isLastItem ? lastLaunchRef : null}
                style={{ marginBottom: "10px" }}
              >
                <strong>{launch.mission_name}</strong> - {launch.launch_year}
              </li>
            );
          })}
        </ul>
        {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
        {!hasMore && !loading && (
          <p style={{ textAlign: "center", color: "gray" }}>
            No more data to load.
          </p>
        )}
        {filteredLaunches.length === 0 && !loading && (
          <p style={{ textAlign: "center", color: "gray" }}>
            No results found for "{searchTerm}".
          </p>
        )}
      </div>
    </div>
  );
}
