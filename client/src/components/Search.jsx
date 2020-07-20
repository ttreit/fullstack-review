import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }

    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);

  }

  onChange (event) {
    this.setState({
      term: event.target.value
    });
  }

  search() {
    const gitHubUserName = this.state.term;
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/repos',
      data: gitHubUserName
    })


//    this.props.onSearch(this.state.term);
  }

  render() {
    return (
    <div>
      <h4>Add more repos!</h4>
      <form search={this.search}>
      <label>

      Enter a github username: <input value={this.state.term} onChange={this.onChange}/>
      <button onClick={this.search}> Add Repos </button>

      </label>
      </form>
    </div>
    )
  }
}

export default Search;