const initialState = {
    city: null,
    weather:{},
    verification: false
}
const mainReducer = (state = initialState,action) =>{
    switch(action.type){
        case 'CITY_ADD':
            return {
                ...state,
                city:action.payload || null,
                ...state.weather
                
            }
        case 'MORE_INFO':
            return{
                ...state,
                weather: action.payload
            }
        case 'SET_VERIFICATION_TRUE':
            return{
                ...state,
                verification:true
            }
        case 'SET_VERIFICATION_FALSE':
                return{
                    ...state,
                    verification:false
                }
        default:
            return state
    }
}
export default mainReducer