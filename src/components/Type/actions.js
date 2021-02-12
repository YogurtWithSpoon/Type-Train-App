import axios from 'axios'
import {setText,setPressKey} from '../../store/typeslice';

export const fetchText = () => {
  return async(dispatch) => {
    try{
      const request = await axios.get('https://baconipsum.com/api/?type=all-meat',{
        params: {
          type: 'all-meat',
          sentences: 5,
          format: 'json'
        }
      });
      const text = request.data[0]
      dispatch(setText('test test test test'));
    } catch (error) {
      console.log(error)
    }
  }
}

export const countPress = (event) => {
  return (dispatch) => {
    console.log(event)
    if(event.keyCode === 32 || event.keyCode === 8) return
    dispatch(setPressKey())
  }
}

