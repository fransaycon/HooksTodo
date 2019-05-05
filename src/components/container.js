import React from 'react';
import { ThemeContext, themes } from './theme-context';
import View from './view';
import '../style/index.scss';

class Container extends React.Component {

	state = {
		text: "",
		items: [],
		count: 0,
	}

	addItem = e => {
		e.preventDefault();
		this.setState({
			items: [...this.state.items, this.state.text],
			count: this.state.count + 1, 
			text: "",
		});
	}

	updateText = e => {
		this.setState({text: e.target.value});
	}

	componentDidMount(){
		document.title = `You have ${this.state.count} tasks!`;
	}

	componentDidUpdate(prevProps, prevState){
		document.title = `You have ${this.state.count} tasks!`;
	} 

    render(){
    	return (
	    	<ThemeContext.Provider value={themes.light}>
	    		<View
	    			{...this.state}
	    			addItem={this.addItem}
	    			updateText={this.updateText}
	    		/>
	    	</ThemeContext.Provider>
        );
    }
}

export default Container;
