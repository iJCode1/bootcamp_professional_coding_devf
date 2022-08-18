import {useState} from 'react';
import Grid from './Components/Grid.jsx';
import AddCategory from './Components/AddCategory.jsx';

function App() {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball', 'One Piece']);
  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <p>Gif App</p>
      <AddCategory onAddCategory={onAddCategory}/>

      {
        categories.map((category) => (<Grid key={category} category={category}/>))
      }
    </>
  )
}

export default App
