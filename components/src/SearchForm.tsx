import React from "react";

export class SearchForm extends React.Component<any, any> {
  render() {
    const handleSubmit = (e) => {
      e.preventDefault();
      if (this.props.onSearch) {
        this.props.onSearch(e.target.search.value);
      }
    };
    return (
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button>Buscar</button>
      </form>
    );
  }
}
