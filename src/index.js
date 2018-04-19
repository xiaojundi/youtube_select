import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import _ from 'lodash'

const API_KEY="AIzaSyAb16H6tQoEwulSWz4u8zPinBdkDpPzRVE"

class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			videos: [],
			selectVideo: null
		}
		this.videoSearch("surfboards")
	}
	videoSearch(term){
		YTSearch({key: API_KEY, term:term}, (data)=>{
			this.setState({videos: data, selectVideo: data[0]})
		})
	}
	onClickEvent(value){
		this.setState({selectVideo: value})
	}
	render(){
		const videoSearch = _.debounce(term=>{this.videoSearch(term)}, 100)
		return(
			<div>
				<SearchBar searchEvent={videoSearch}/>
				<VideoDetail video = {this.state.selectVideo}/>
				<VideoList 
				onVideoSelect={selectedVideo=> this.setState({selectVideo:selectedVideo})}
				videos = {this.state.videos} />
			</div>
		)
	}
	
}

ReactDOM.render(<App />, document.querySelector('.container'))