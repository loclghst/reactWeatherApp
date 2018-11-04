import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {term: ''}
        //binding onInputChange() to searchBar. Think how = works, rhs is evaluated and assigned to LHS
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        //This line will give an error 'Cant read property setState() of undefined'
        //This because in the youtube app we defined onChnage with an arrow func
        //onChange={() => this.onInputChange()}, but in this case we defined it as
        //onChange={this.onInputChange}, when we do like this this is not bound to SearchBar
        //hence we get the error. To resolve this we bind onInputChange to SearchBar in constructor

        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        //this overrides the default submit behaviour
        event.preventDefault();
        //go fetch weather data
        this.props.fetchWeather(this.state.term); //we also need to bind this function
        this.setState({term:''});
    }


    render(){
        return (
            <form onSubmit={this.onFormSubmit} className='input-group'>
                <input
                value={this.state.term}
                className='form-control'
                placeholder='Get the five-day weather forecast of your favorite city'

                onChange={this.onInputChange}
                />
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondary'>Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}

//we give null as first arg because here we dont have a mapStateToProps() , and mapDispatch to props
//always goes as secong arg to connect

export default connect(null, mapDispatchToProps)(SearchBar);

//Notes
//By default inside a <form> when the input is focused and user presses enter , brower submits the form
//The same happens when user clicks submit
//to prevent this behaviour we will give an event handler to <form>. the event we want to tap into is
//the submit event. in react we tap into it using onSubmit

//we are preventing this behavior because when the user presses enter or submit button, we do not want
//to submit the form, instead we want to make an API request to get weather data.