import { useState, useEffect } from 'react';

const useThrottle = (value: any, ms: number) => {
  const [throttleCheck, setThrottleCheck] = useState(value);

  useEffect(() => {
    if (throttleCheck) return;
    const handler = setTimeout(() => {
      setThrottleCheck(value);
    }, ms);

    return () => clearTimeout(handler);
  }, [throttleCheck, value, ms]);

  return throttleCheck;
};

export default useThrottle;
