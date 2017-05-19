import React from 'react'


class GifSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
  }

  onChange(e) {
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onSearch(this.state.query)
    this.setState({
      query: ''
    })
  }



  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.query} onChange={this.onChange.bind(this)} placeholder="Search for Gifs!"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default GifSearch
