import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from 'components/SearchBar/SearchBar.module.css';
import { ImSearch } from 'react-icons/im';




export class SearchBar extends Component {
    state = {
    searchQuery: '',
    };

    handleChange = (event) => {
    
      this.setState({ searchQuery: event.currentTarget.value.toLowerCase()});
        // console.log(this.state.searchQuery);
    };

    handleSubmit = (event) => {
      event.preventDefault();
      
      if (this.state.searchQuery.trim() === '') {
toast.warning("Please enter search query")
        return;
      }
    this.props.onSubmit(this.state.searchQuery);
      this.setState({ searchQuery: '' });    
  };
  

    render() {
        const { searchQuery} = this.state;
        return (
            <header className={css.Searchbar}>
            <form className={css.SearchForm} onSubmit={this.handleSubmit}>
      
        <input className={css.SearchFormInput}
          type="text"
          placeholder="Type to search..."
          value={searchQuery}
          onChange={this.handleChange}
        />

              <button type="submit" className={css.SearchFormButton}>
                <ImSearch/>
          Search
        </button>
            </form> 
            <ToastContainer
            theme="colored"/>
            </header>
        );
  }
   
 
}