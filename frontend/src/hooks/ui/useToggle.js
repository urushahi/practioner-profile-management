import { useState } from 'react';

function useToggle() {
  const [state, setState] = useState(false);

  const toggle = () => setState(!state);
  console.log(state);
  return [state, toggle];
}

export default useToggle;
