
export function getFlightDetails(request) {
    let queryString = '';
    if(request) {
        queryString += `${request?.year ? '&launch_year='+request.year : ''}`;
        queryString += `${request?.launch !== undefined ? '&launch_success='+request.launch : ''}`;
        queryString += `${request?.landing !== undefined ? '&land_success='+request.landing : ''}`;        
    }
    return function(dispatch) {
        return fetch("https://api.spacexdata.com/v3/launches?limit=100"+queryString, {
            "method": "GET"
          })
          .then(resp => resp.json())
          .then(response => dispatch({type: 'LOAD_FLIGHT_DATA', payload: response}))
          .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}