import { h, Component } from 'preact';
import style from './style.less';

export default class Home extends Component {
	constructor() {
		super()

		this.state = {
			cal: false
		}

		this.handleAddClick = this.handleAddClick.bind(this)
		this.handleRemoveClick = this.handleRemoveClick.bind(this)
	}

	render({}, {cal}) {
		let monday = null

		if(cal === true) {
			monday = [
				<a href='' class={style.add} onClick={this.handleRemoveClick}>-</a>,
				getSelect(style.month),
				<span class={style.to}>to</span>,
				getSelect(style.month2),
			]
		} else {
			monday =
				<a href='' class={style.add} onClick={this.handleAddClick}>+</a>
		}

		return (
			<div class={style.home}>
				<h1>Availability</h1>
				<div class={style.clear}></div>
				<p>Mo</p>
				{monday}
				<div class={style.clear}></div>
				<p>Tu +</p>
				<div class={style.clear}></div>
			</div>
		);
	}

	handleAddClick(event) {
		event.preventDefault()
		this.setState({cal: true});
	}

	handleRemoveClick(event) {
		event.preventDefault()
		this.setState({cal: false});
	}
}

const getSelect = css => {
	const tmp = <select class={css} name="select">
		<option value="12">12:00am</option>
		<option value="12:30">12:30am</option>
		<option value="1">1:00am</option>
		<option value="1:30">1:30am</option>
		<option value="2">2:00am</option>
		<option value="2:30">2:30am</option>
		<option value="3">3:00am</option>
		<option value="3:30">3:30am</option>
		<option value="4">4:00am</option>
		<option value="4:30">4:30am</option>
		<option value="5">5:00am</option>
		<option value="5:30">5:30am</option>
		<option value="6">6:00am</option>
		<option value="6:30">6:30am</option>
		<option value="7">7:00am</option>
		<option value="7:30">7:30am</option>
		<option value="8">8:00am</option>
		<option value="8:30">8:30am</option>
		<option value="9" selected>9:00am</option>
		<option value="9:30">9:30am</option>
		<option value="10">10:00am</option>
		<option value="10:30">10:30am</option>
		<option value="11">11:00am</option>
		<option value="11:30">11:30am</option>
		<option value="12">12:00pm</option>
		<option value="12:30">12:30pm</option>
		<option value="13">13:00pm</option>
		<option value="13:30">13:30pm</option>
		<option value="14:00">14:00pm</option>
		<option value="15">15:00pm</option>
		<option value="15:30">15:30pm</option>
		<option value="16">16:00pm</option>
		<option value="16:30">16:30pm</option>
		<option value="17">17:00pm</option>
		<option value="17:30">17:30pm</option>
		<option value="18">18:00pm</option>
		<option value="18:30">18:30pm</option>
		<option value="19">19:00pm</option>
		<option value="19:30">19:30pm</option>
		<option value="20">20:00pm</option>
		<option value="20:30">20:30pm</option>
		<option value="21">21:00pm</option>
		<option value="21:30">21:30pm</option>
		<option value="22">22:00pm</option>
		<option value="22:30">22:30pm</option>
		<option value="23">23:00pm</option>
		<option value="23:30">23:30pm</option>
	</select>

	return tmp
}
