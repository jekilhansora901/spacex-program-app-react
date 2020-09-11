const initialState = {
    flights: null,
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case "LOAD_FLIGHT_DATA": {
        return {
          ...state,
          flights: action.payload,
          loading: false
        };
      }
      case "BEGIN_LOADING": {
        return {
          ...state,
          loading: true
        };
      }
      default: {
          return state;
      }
    }
}
      