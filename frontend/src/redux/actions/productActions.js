import axios from 'axios';
export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/products');
    dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'GET_PRODUCTS_FAILURE', payload: error.response.data });
  }
};