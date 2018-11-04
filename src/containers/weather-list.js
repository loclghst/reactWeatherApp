import React , { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component{

    renderWeather(cityData){
        const name = cityData.city.name;
        const temp = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temp} color='red' units='K' /></td>
                <td><Chart data={pressure} color='orange' units='hPa' /></td>
                <td><Chart data={humidity} color='blue' units='%' /></td>
            </tr>
        )
    }

    render(){
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(K)</th>
                        <th>Pressure(hPa)</th>
                        <th>Humidity(%)</th>
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

