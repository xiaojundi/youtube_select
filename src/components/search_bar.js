import React, {Component} from 'react'

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state ={
			term: ''
		}
	}
	onInputChange(term){
		this.setState({term: term})
		setTimeout(()=>this.props.searchEvent(term),1000)
	}
	render(){
		return(
			<div>
				<input 
				value = {this.state.term}
				onChange={event=>{this.onInputChange(event.target.value)}}
				/>			
			</div>

		)
	}
}

export default SearchBar