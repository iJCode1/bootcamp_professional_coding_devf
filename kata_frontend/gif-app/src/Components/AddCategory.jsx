import React, {useState} from 'react';

const AddCategory = ({onAddCategory}) => {
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(input.trim().length <=1) return

    // Se envia la info al padre
    onAddCategory(input.trim())
    setInput('');
  }

  return (
    <>
      <h2>AddCategory</h2>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='Buscar Gif' value={input} name="gifName" id="gifName" onChange={onInputChange} />
        <button type="submit">Buscar</button>
      </form>
    </>  
  )
};

export default AddCategory;