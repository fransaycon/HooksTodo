import React from 'react';
import {ThemeContext} from "./theme-context";

const View = props => {

	const { items, text, addItem, updateText } = props;

	return (
		<ThemeContext.Consumer>
			{
				theme => (
					<div className={`${theme}--container`}>
						<div className={`${theme}--wrapper`}>
							<form className={`${theme}--form-container`} >
								<input
									className={`${theme}--input`}
									placeholder="e.g. Water the plants"
									value={text}
									onChange={e=>updateText(e)}
								/>
								<input
									type="submit"
									className={`${theme}--button`}
									onClick={e=>addItem(e)} 
									value="ADD"
								/>
							</form>
							<div className={`${theme}--list-container`} >
								<ul	className={`${theme}--list-proper`}>
									{
										items.map(item => <li className={`${theme}--list-item`} >{item}</li>)
									}
								</ul>
							</div>
						</div>
					</div>
				)
			}
		</ThemeContext.Consumer>
	);
}

export default View;
