import React from 'react';
import '../styles/Home.css';
import { getFlightDetails } from '../redux/flightActions';
import { connect } from "react-redux";
import Filters from './Filters';
import DisplayFlight from './DisplayFlight';
import { FILTER_YEARS, FILTER_LAUNCH, FILTER_LANDING } from '../common-const';
import { Spinner } from './Spinner';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          filterSelected: null
        }
    }

    componentDidMount() {
        this.props.loadFlights();
    }

    handleChange = (filterValue) => {
      console.log("Filter value", filterValue)
      let filterSelected = {
        year:filterValue["year"] ? filterValue["year"] === this.state.filterSelected?.year ? undefined  : filterValue["year"] : this.state.filterSelected?.year,
        landing:filterValue["landing"] !== undefined ? filterValue["landing"] === this.state.filterSelected?.landing ? undefined : filterValue["landing"] : this.state.filterSelected?.landing,
        launch:filterValue["launch"] !== undefined ? filterValue["launch"] === this.state.filterSelected?.launch ? undefined : filterValue["launch"] : this.state.filterSelected?.launch 
      }
      this.setState({
        filterSelected
      }, () => {
        this.props.loadFlights(this.state.filterSelected);
      })
    }
    render() {
        const { loading } = this.props;
        const { filterSelected } = this.state;
        return (
            <div style={{backgroundColor: '#f1f1f1'}}>
            <div>
              <div className="header_title">
                <h2>SpaceX Launch Program</h2>
              </div>
            </div>
            {loading && <Spinner /> }
              <div className="main_container">
                  <div className="sidebar sidebar_filter">
                    <Filters 
                        filterYears={FILTER_YEARS} 
                        filterLaunch={FILTER_LAUNCH}
                        filterLanding={FILTER_LANDING}
                        activeFilter={filterSelected}
                        handleChange={this.handleChange}
                        />
                  </div>
                  <div className="content">
                      {this.props.flightData && this.props.flightData.map((flight, index) => (
                        <DisplayFlight key={index} flight={flight} />
                      ))}
                  </div>
              </div>
              <div>
                <div className="footer"><b>Developed by:</b> Jekil Hansora</div>
              </div>
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        flightData: state.flights,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => ({
    loadFlights: (request) => {
      dispatch({type: "BEGIN_LOADING"})
      dispatch(getFlightDetails(request));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
