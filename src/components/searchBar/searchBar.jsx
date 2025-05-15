import css from './searchBar.module.css';
// {onSubmit}

export const hehe = 'XDDDD';
export const SearchBar = ({ onSearch }) => {
  

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;

    const topic = form.elements[0].value;
    
    if(topic.trim() === "") {
			alert("Please enter search term!")
			return;
    }
    
    onSearch(topic);
    form.reset();
  };


  return (

  <header className={css.header}>
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
      <button type="submit">Search</button>
    </form>
  </header>

      
  );
};

