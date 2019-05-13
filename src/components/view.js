import React from 'react';
import {ThemeContext} from './theme-context';
import {useState, useEffect, useContext} from 'react';

const View = props => {

	const [text, setText] = useState("");
	const [items, setItems] = useState([]);
	const [count, setCount] = useState(0);
	const theme = useContext(ThemeContext);

	useEffect(() => {
		document.title = `You have ${count} tasks!`;
	}, [count]);

	function addItem(e){
		e.preventDefault();
		setItems([...items, text]);
		setCount(count + 1);
		setText("");
	}

	return (
		<div className={`${theme}--container`}>
			<div className={`${theme}--wrapper`}>
				<form className={`${theme}--form-container`} >
					<input
						className={`${theme}--input`}
						placeholder="e.g. Water the plants"
						value={text}
						onChange={e=>setText(e.target.value)}
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
				<label className={`${theme}--theme-anchor`} onClick={()=>props.toggleTheme()}>Change Theme</label>
			</div>
		</div>
	);
}

export default View;
