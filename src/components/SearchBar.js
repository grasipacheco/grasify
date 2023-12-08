import "./SearchBar.css";

export default function SearchBar({
  onSubmit,
  resultsText,
  onFilterTextChange,
}) {
  function handleSubmit(event) {
    event.preventdefault();
    const textInput = event.target.input.value;
    if (textInput.trim() === "") {
      return;
    }
    onSubmit(textInput);
    event.target.reset();
  }
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={resultsText}
        name="input"
        aria-label="Type the album you are looking for here"
        placeholder="Type the album you are looking for here"
        // onChange={(event) => onSubmit(event.target.value)}
      />
      <button className="search-form-button" type="submit">
        👁
      </button>
    </form>
  );
}
