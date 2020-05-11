import React, { Component, createRef } from 'react'

export default class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ip:'',
             hostname:'',
             city:'',
             region:'',
             country:'',
             location:'',
             countryCode:'',
             postal:''
        }

        this.getIpInfo = this.getIpInfo.bind(this);
    }
    
    getIpInfo(){
        var IPinfo = require("node-ipinfo");

        let token = "225fec19728c15";
        let ip = this.refs.input.value;
        let asn = "AS7922";
        let ipinfo = new IPinfo(token);
        if(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip)){
            let info = ipinfo.lookupIp(ip).then((response) => {
                this.setState({
                    ip: response.ip,
                    hostname: response.hostname,
                    city: response.city,
                    region: response.region,
                    country: response.country,
                    location: response.loc,
                    countryCode: response.countryCode,
                    postal: response.postal
                })
            });
        }
    }

    render() {
        return (
            <div className='main'>
                <div className="main__inner">
                    <div className="main__article">
                        <p className="main__subtitle">Learn about IP <span className='highlighter'>EVERYTHING</span></p>
                    </div>
                    <div className="main__input_form">
                        <input type="text" placeholder='IP address' ref='input' className="main__input"/>
                        <button className="main__btn" onClick={this.getIpInfo}>discover</button>
                    </div>
                    {this.state.ip != "" ? 
                        <div className="main__ip_info">
                            <div className="main__ip_info_item">
                                <p className="main__ip_info_title">IP adress</p>
                                <p className="main__ip_info_subtitle">{this.state.ip}</p>
                            </div>
                            <div className="main__ip_info_item">
                                <p className="main__ip_info_title">Hostname</p>
                                <p className="main__ip_info_subtitle">{this.state.hostname}</p>
                            </div>
                            <div className="main__ip_info_item">
                                <p className="main__ip_info_title">City</p>
                                <p className="main__ip_info_subtitle">{this.state.city}</p>
                            </div>
                            <div className="main__ip_info_item">
                                <p className="main__ip_info_title">Region</p>
                                <p className="main__ip_info_subtitle">{this.state.region}</p>
                            </div>
                            <div className="main__ip_info_item">
                                <p className="main__ip_info_title">Country</p>
                                <p className="main__ip_info_subtitle">{this.state.country}</p>
                            </div>
                            <div className="main__ip_info_item">
                                <p className="main__ip_info_title">Location</p>
                                <p className="main__ip_info_subtitle">{this.state.location}</p>
                            </div>
                            <div className="main__ip_info_item">
                                <p className="main__ip_info_title">Country code</p>
                                <p className="main__ip_info_subtitle">{this.state.countryCode}</p>
                            </div>
                            <div className="main__ip_info_item">
                                <p className="main__ip_info_title">Postal</p>
                                <p className="main__ip_info_subtitle">{this.state.postal}</p>
                            </div>
                        </div>
                    : ''}
                </div>
            </div>
        )
    }
}
