import { useNavigate, useSearchParams } from "react-router-dom";

export default function Map() {
  const [searchParams, set_searchParams] = useSearchParams();
  const navigate = useNavigate();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div
      onClick={() => {
        console.log(`map clicked`);
        navigate("form");
      }}
    >
      Position
      {`lat=${lat}`}
      {`lng=${lng}`}
      <button
        onClick={() => {
          set_searchParams({ lat: 69, lng: 69 });
        }}
      >
        change
      </button>
    </div>
  );
}
