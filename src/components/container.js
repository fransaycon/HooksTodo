import React from 'react';
import { ThemeContext, themes } from './theme-context';
import View from './view';

class Container extends React.Component {
    render(){
    	return (
	    	<ThemeContext.Provider value={themes.light}>
	    		<View />
	    	</ThemeContext.Provider>
        );
    }
}

export default Container;
