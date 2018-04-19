import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = (props) => {
	return(
		<ul className="col-md-4 list-group">
			{
				props.videos.map((item)=>{
					return <VideoListItem 
					onVideoSelect={props.onVideoSelect}
					video={item} 
					key={item.etag} />
				})
			}
		</ul>
	)
} 

export default VideoList