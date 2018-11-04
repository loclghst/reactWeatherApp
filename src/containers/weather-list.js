import React , { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component{

    renderWeather(cityData){
        const name = cityData.city.name;
        return (
            <tr key={name}>
                <td>{name}</td>
            </tr>
        )
    }

    render(){
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.Weather.map(this.renderWeather)}
                </tbody>

            </table>
        );
    }
}

function mapStateToProps({Weather}){
    return {Weather};
}
//completeley identical to function below. we used destructuring and es6 syntax

// function mapStateToProps(state){
//     return {whether: state.whether};
// }

export default connect(mapStateToProps)(WeatherList);

