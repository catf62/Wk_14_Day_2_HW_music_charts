import React from 'react';
import SongSelector from '../components/SongSelector.js';
import SongDetail from '../components/SongDetail.js';

class SongContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      currentSong: null
    };
    this.handleSongSelected = this.handleSongSelected.bind(this);
  }

  componentWillMount(){
  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(data => this.setState({songs:data.feed.entry}))
  }

  handleSongSelected(index){
    const selectedSong = this.state.songs[index];
    this.setState({currentSong: selectedSong})
  }

  render(){
    return (
      <div className="chart">
      <h2>iTunes Top 20 Chart</h2>
      <SongSelector songs={this.state.songs} onSongSelected={this.handleSongSelected} />
      <SongDetail song={this.state.currentSong} />
      </div>
    );
  }
}

export default SongContainer;
