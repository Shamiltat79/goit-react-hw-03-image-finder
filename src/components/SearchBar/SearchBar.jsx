import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from 'components/SearchBar/SearchBar.module.css';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';



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

            <button type="submit" className={css.SearchFormButton}>
                <ImSearch/>
         
        </button>     
      
        <input className={css.SearchFormInput}
          type="text"
          placeholder="Search images..."
          value={searchQuery}
          onChange={this.handleChange}
        />

        
            </form> 
            <ToastContainer
            theme="colored"/>
            </header>
        );
  }
   
 
}


SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

