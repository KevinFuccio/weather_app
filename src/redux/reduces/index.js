const initialState = {
    city: null,
    weather:{}
}
const mainReducer = (state = initialState,action) =>{
    switch(action.type){
        case 'CITY_ADD':
            return {
                ...state,
                city:action.payload,
                ...state.weather
                
            }
        case 'MORE_INFO':
            return{
                ...state,
                ...state.city,
                weather: action.payload
            }
        default:
            return state
    }
}
export default mainReducer