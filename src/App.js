import { useGiphy } from "./hooks/giphyHook";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const { gifs } = useGiphy(offset, 10, search);

  const handleOnChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleOnClean = () => {
    setSearch("");
  };

  const handleOnNext = async (event) => {
    event.preventDefault();
    setOffset(offset + 10);
    return false;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    return false;
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleOnChange} value={search} />
        <button type="button" onClick={handleOnNext}>
          Next
        </button>
        <button type="button" onClick={handleOnClean}>
          Clean
        </button>
      </form>
      {gifs &&
        gifs.map((gifUrl, idx) => <img key={idx} src={gifUrl} alt="example" />)}
    </div>
  );
}

export default App;
