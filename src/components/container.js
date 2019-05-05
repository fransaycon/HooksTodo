import React from 'react';
import { ThemeContext, themes } from './theme-context';
import View from './view';
import '../style/index.scss';

class Container extends React.Component {

	state = {
		text: "",
		items: [],
		count: 0,
		theme: themes.light,
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

	changeTheme = () =>{
		if(this.state.theme === themes.light){
			this.setState({theme: themes.dark});
		}
		else {
			this.setState({theme: themes.light});
		}
	}

	componentDidMount(){
		document.title = `You have ${this.state.count} tasks!`;
	}

	componentDidUpdate(prevProps, prevState){
		document.title = `You have ${this.state.count} tasks!`;
	} 

    render(){
    	return (
	    	<ThemeContext.Provider value={this.state.theme}>
	    		<View
	    			{...this.state}
	    			addItem={this.addItem}
	    			changeTheme={this.changeTheme}
	    			updateText={this.updateText}
	    		/>
	    	</ThemeContext.Provider>
        );
    }
}

export default Container;
