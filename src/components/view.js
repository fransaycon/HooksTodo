import React from 'react';
import {ThemeContext} from "./theme-context";
import '../style/index.scss';

const View = () => {
	return (
		<ThemeContext.Consumer>
			{
				theme => (
					<div className={`${theme}--container`}>
						<div className={`${theme}--wrapper`}>
							<div className={`${theme}--form-container`} >
								<input className={`${theme}--input`} placeholder="e.g. Water the plants" />
								<button className={`${theme}--button`}>
								ADD
								</button>
							</div>
							<div className={`${theme}--list-container`} >
							</div>
						</div>
					</div>
				)
			}
		</ThemeContext.Consumer>
	);
}

export default View;
