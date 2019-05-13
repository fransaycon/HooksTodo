import React, {useState} from 'react';
import { ThemeContext, themes } from './theme-context';
import View from './view';
import '../style/index.scss';

const Container = () => {

	const [theme, setTheme] = useState(themes.light);

	function toggleTheme(){
		if(theme === themes.light){
			setTheme(themes.dark);
		}
		else {
			setTheme(themes.light);
		}
	}

	return (
    	<ThemeContext.Provider value={theme}>
    		<View
    			toggleTheme={toggleTheme}
    		/>
    	</ThemeContext.Provider>
    );
}

export default Container;
