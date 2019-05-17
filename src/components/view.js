import React from 'react';
import {ThemeContext} from './theme-context';
import {useState, useEffect, useContext} from 'react';

const View = props => {

	const item = useForm("");
	const todo = useTodo([]);
	const theme = useContext(ThemeContext);
	useTitle(`You have ${todo.count} tasks!`);

	function addItem(e){
		e.preventDefault();
		todo.add(item.value);
		item.clear();
	}

	return (
		<div className={`${theme}--container`}>
			<div className={`${theme}--wrapper`}>
				<form className={`${theme}--form-container`} >
					<input
						className={`${theme}--input`}
						placeholder="e.g. Water the plants"
						{...item}
					/>
					<input
						type="submit"
						className={`${theme}--button`}
						onClick={addItem} 
						value="ADD"
					/>
				</form>
				<div className={`${theme}--list-container`} >
					<ul	className={`${theme}--list-proper`}>
						{
							todo.list.map(item => <li className={`${theme}--list-item`} >{item}</li>)
						}
					</ul>
				</div>
				<label className={`${theme}--theme-anchor`} onClick={()=>props.toggleTheme()}>Change Theme</label>
			</div>
		</div>
	);
}

function useForm(text){
	const [value, setValue] = useState(text);

	function handleFormChange(e){
		setValue(e.target.value);
	}

	function handleClear(){
		setValue("");
	}

	return {
		value: value,
		onChange: handleFormChange,
		clear: handleClear,
	}
}

function useTitle(title){
	useEffect( () => {
		document.title = title;
	}, [title]);
}

function useTodo(list){

	const [items, setItems] = useState(list);
	const [count, setCount] = useState(list.length);

	function addTodo(item){
		setItems([...items, item]);
		setCount(count + 1);
	}

	return {
		count: count,
		list: items,
		add: addTodo,
	}
}

export default View;
