import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      gifs: []
    }
  }

  onSearch(query){
    fetch('http://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=dc6zaTOxFJmzC&limit=3',
    {mode: 'cors',
    method: 'GET'})
    .then(res => res.json())
    .then(data => this.setState({
          gifs: data.data
      }))
  }

  render() {
    return (
      <div>
        <GifSearch onSearch={this.onSearch.bind(this)} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
