import React, { Component } from 'react';

export default class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {term: ''}
        //binding onInputChange() to searchBar. Think how = works, rhs is evaluated and assigned to LHS
        this.onInputChange = this.onInputChange.bind(this);
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

//Notes
//By default inside a <form> when the input is focused and user presses enter , brower submits the form
//The same happens when user clicks submit
//to prevent this behaviour we will give an event handler to <form>. the event we want to tap into is
//the submit event. in react we tap into it using onSubmit

//we are preventing this behavior because when the user presses enter or submit button, we do not want
//to submit the form, instead we want to make an API request to get weather data.