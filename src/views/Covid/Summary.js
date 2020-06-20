 import React, { Component } from 'react'

export default class Summary extends Component {
    render() {
        const{summary,currentDate}=this.props;
        return (
            <div>
                <div className="row">
                
                
                       <div className="Newconfirmed">
                            <h4>New Confirmed</h4>
                            <h5>{summary.NewConfirmed}</h5>
                            <h6>{new Date(currentDate).toDateString()}</h6>
                      </div>          
                
                               <div  className="totalconform">
                                    <h4>Total Confirm</h4>
                                    <h5>{summary.TotalConfirmed}</h5>
                                </div>

                                    <div className="deaths">
                                    <h4> new Deaths</h4>
                                    <h5>{summary.NewDeaths}</h5>

                                    </div>


                                <div className="totaldeath">
                                <h4>Total-Deaths</h4>
                                <h5>{summary.TotalDeaths}</h5>
                                </div>



                                    <div className="totalreacover">
                                    <h4>Total-recovered</h4>
                                    <h5>{summary.TotalRecovered}</h5>
                                    </div>

                </div>

                </div>
            
        )
    }
}
