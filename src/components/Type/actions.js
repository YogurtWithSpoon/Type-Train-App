import axios from 'axios'
import {setText} from '../../store/typeslice';

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
      dispatch(setText(text));
    } catch (error) {
      console.log(error)
    }
  }
}

