import { useState } from "react";

export const useThrottle = (fn, delay) => {
  const [throttle, setThrottle] = useState(false);

  return function (e) {
    if (!throttle) {
      fn(e);
      setThrottle(true);
      setTimeout(() => {
        setThrottle(false);
      }, delay);
    }
  };
};
