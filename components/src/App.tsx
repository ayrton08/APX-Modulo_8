import React from "react";
import { SearchForm } from "./SearchForm";
import { SearchResultItem } from "./SearchResultItem";

export class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }
  render() {
    const handleSearch = async (search) => {
      const res = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
      );
      const data = await res.json();
      this.setState({
        results: data.results,
      });
      console.log(this.state);
    };
    return (
      <div>
        App
        <SearchForm onSearch={handleSearch} />
        {this.state.results.map((r) => {
          <SearchResultItem
            title={r.title}
            price={r.price}
            picture={r.thumbnail}
          />;
        })}
      </div>
    );
  }
}
