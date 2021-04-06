import React from 'react';
import { connect } from 'react-redux';

import * as action from './flux/action';

import './App.css';

import Function from './Function';

class App extends React.Component {

	render() {
		return <>
			{this.props.showFunction ? <Function power={this.props.power}/> : null}
			<br/>
			<input onClick={() => this.props.mount()} type='button' value='mount'></input>
			<br/>
			<input onClick={() => this.props.unmount()} type='button' value='unmount'></input>
			<br/>
			<input onClick={() => this.props.turnOn()} type='button' value='turn on'></input>
			<br/>
			<input onClick={() => this.props.turnOff()} type='button' value='turn off'></input>
		</>
	}
}

const mapStateToProps = state => ({

	showFunction: state.reducer.showFunction,
	power: state.reducer.power
});

const mapDispatchToProps = dispatch => ({

	mount: () => dispatch(action.mount()),
	unmount: () => dispatch(action.unmount()),
	turnOn: () => dispatch(action.turnOn()),
	turnOff: () => dispatch(action.turnOff()),
});

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(App);
