import React, { Component } from 'react';
import L from 'leaflet';

class Map extends Component{
    constructor(){
        super();
        this.state={saludo:'hola mundo!!!'};
    }

    componentDidMount(){
        const LAT = 40.414;
        const LONG = -3.703;
        this.map= L.map(this.props.mapid);
        this.map.setView([LAT, LONG], 13);

        L.tileLayer('http://{s}.tile.osa.org/{z}/{x}/{y}.png',{
            attribution: '&copy:<a href="http://osm.org/copyright">OpenStreetMap</a>contributors'
        }).addTo(this.map);
        this.forceUpdate();

    }

    render(){
        return(
            <div className= {this.props.className} id={this.props.mapid}/>
        );
    }

}
conts  = styled(map)`height: 500px;`;
export default Map;

