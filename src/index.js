import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY="AIzaSyAb16H6tQoEwulSWz4u8zPinBdkDpPzRVE"

class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			videos: [],
			selectVideo: null
		}
		YTSearch({key: API_KEY, term:"surfboards"}, (data)=>{
			this.setState({videos: data, selectVideo: data[0]})
		})
	}
	onClickEvent(value){
		this.setState({selectVideo: value})
	}
	render(){
		return(
			<div>
				<SearchBar />
				<VideoDetail video = {this.state.selectVideo}/>
				<VideoList 
				onVideoSelect={selectedVideo=> this.setState({selectVideo:selectedVideo})}
				videos = {this.state.videos} />
			</div>
		)
	}
	
}

ReactDOM.render(<App />, document.querySelector('.container'))