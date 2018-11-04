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


    render(){
        return (
            <form className='input-group'>
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