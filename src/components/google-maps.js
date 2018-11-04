import React, { Component } from 'react';

class GoogleMap extends Component{

    //componentDidMount() is one of the lifecycle methods that get called
    //after the component has been rendered to the page.
    componentDidMount(){
        //new google.maps.Maps allows us to create an embedded google map
        //inside our document, it takes a reference of an HTML element
        //where we want to render the map. we pass the reference using
        //this.refs.map

        //this is how we do interactions with 3rd party libraries that
        //do not knwo how to work in the react ecosystem

        new google.maps.Map(this.refs.map,{
            zoom:12,
            center:{
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render(){
        //we are returning a single component with a ref property
        //ref allows us to get a refernece to an html element that
        //has been rendered to the page
        //after the element has een rendered to the page we can get its
        //reference by using this.refs.map
        return <div ref='map' />
    }
}

export default GoogleMap;