import { useEffect } from "react";

/* fetch와 reducer에 dispatch를 이용해서 init data를 받아오는 fetch custom hook
 인자로 url , actionType , dispatch 를 받아서 fetch 처리 */

const useFetch = (url, actionType, dispatch) => {
  const data = null;
  console.log(`......... fetch loading`);
  const initialFetch = async () => {
    try {
      const response = await fetch(url);
      const initialData = await response.json();
      data = initialData;
      dispatch({ type: actionType, data: initialData });
    } catch (err) {
      alert(`Fetch Error !!`);
    }
  };

  useEffect(() => {
    initialFetch();
  }, []);

  return data;
};

export const playGroundFetch = async (url, actionType, dispatch) => {
  const response = await fetch(url);
  const initialData = await response.json();
  console.log(initialData);

  dispatch({ type: actionType, data: initialData });

  return initialData.defense;
};

export default useFetch;
