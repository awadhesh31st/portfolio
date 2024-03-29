import { KeyValue } from '../types/common';

export const CodeSnippet: KeyValue = {
  useDebounce: `
    import { useState, useEffect } from 'react';

    const useDebounce = (value, delay) => {
      const [debouncedValue, setDebouncedValue] = useState(value);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
    
        return () => {
          clearTimeout(timer);
        };
      }, [value, delay]);
    
      return debouncedValue;
    };
    
    // Example usage
    function App() {
      const [inputValue, setInputValue] = useState('');
      const debouncedInputValue = useDebounce(inputValue, 300);
    
      // This effect will trigger whenever the debouncedInputValue changes
      useEffect(() => {
        // Perform your desired action with debouncedInputValue
        console.log('Debounced value:', debouncedInputValue);
      }, [debouncedInputValue]);
    
      return (
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type something..."
          />
        </div>
      );
    }
    
    export default App;
    `,
  useThrottle: `
    import { useState, useEffect } from 'react';

    const useThrottle = (value, delay) => {
      const [throttledValue, setThrottledValue] = useState(value);
      const [lastExecutedTime, setLastExecutedTime] = useState(Date.now());
    
      useEffect(() => {
        const now = Date.now();
        const timeSinceLastExecution = now - lastExecutedTime;
    
        if (timeSinceLastExecution >= delay) {
          setThrottledValue(value);
          setLastExecutedTime(now);
        }
      }, [value, delay, lastExecutedTime]);
    
      return throttledValue;
    };
    
    // Example usage
    function App() {
      const [inputValue, setInputValue] = useState('');
      const throttledInputValue = useThrottle(inputValue, 300);
    
      // This effect will trigger whenever the throttledInputValue changes
      useEffect(() => {
        // Perform your desired action with throttledInputValue
        console.log('Throttled value:', throttledInputValue);
      }, [throttledInputValue]);
    
      return (
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type something..."
          />
        </div>
      );
    }
    
    export default App;
    `,
  reduce: `
    if (!Array.prototype.customReduce) {
      Array.prototype.customReduce = function(callback, initialValue) {
        let accumulator = initialValue === undefined ? this[0] : initialValue;
        
        for (let i = initialValue === undefined ? 1 : 0; i < this.length; i++) {
          accumulator = callback(accumulator, this[i], i, this);
        }
        
        return accumulator;
      };
    }    
    `,
  map: `
    if (!Array.prototype.customMap) {
      Array.prototype.customMap = function(callback) {
        const result = [];
    
        for (let i = 0; i < this.length; i++) {
          result.push(callback(this[i], i, this));
        }
    
        return result;
      };
    }    
    `,
};
