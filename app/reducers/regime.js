export default function diet(state = {}, action){
  switch(action.type){
    case 'DISPLAY_REGIMEEXERCISE_SUCCESS':
      return Object.assign({},state,{
        exercises:action.payload
      });
      case 'DISPLAY_REGIMEDIET_SUCCESS':
        return Object.assign({},state,{
          diets:action.payload
        });
      case 'DISPLAY_REGIMEEXERCISE_FAIL':
      case 'DISPLAY_REGIMEDIET_FAIL':
        return action.error;
      default:
        return state;
  }
}
