import { useEffect } from "react";

/* fetch와 reducer에 dispatch를 이용해서 init data를 받아오는 fetch custom hook
 인자로 url , actionType , dispatch 를 받아서 fetch 처리 */

const useFetch = (url, actionType, dispatch) => {
  console.log(`......... fetch loading`);
  const initialFetch = async () => {
    try {
      const response = await fetch(url);
      const initialData = await response.json();
      dispatch({ type: actionType, data: initialData });
    } catch (err) {
      alert(`Fetch Error !!`);
    }
  };

  useEffect(() => {
    initialFetch();
  }, []);
};

export default useFetch;
