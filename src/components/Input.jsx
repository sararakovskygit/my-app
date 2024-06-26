import React,{useState} from 'react'; 
import TextInput from './TextInput';

const Input = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    return (
        <div>
          <TextInput
            label="Enter Text: "
            value={inputValue}
            onChange={handleInputChange}></TextInput>
        </div>
      );
}

export default Input;