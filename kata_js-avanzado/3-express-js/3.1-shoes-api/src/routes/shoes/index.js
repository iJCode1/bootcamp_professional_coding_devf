const express = require('express');
const shoesRouter = express.Router();

let shoes = [
  {id: 1, brand: 'Noke', price: 299, size: 29},
  {id: 2, brand: 'edidas', price: 599, size: 27},
  {id: 3, brand: 'floxi', price: 430, size: 25.5},
];

// Url's para probar
// http://localhost:3000/shoes/
// http://localhost:3000/shoes/72

// Query params: Filtrar información
// http://localhost:3000/shoes/?page=1&pageSize=10&brand="noke"
shoesRouter.get('/', (req, res)=>{
  const {page, pageSize, brand} = req.query;

  if(page && pageSize && brand){
    res.json( {page, pageSize, brand} )
  }
  res.json(shoes);
});

// Request param: Son utilizados para ejecurtar operaciones sobre un elemento especifico
shoesRouter.get('/:id', (req, res)=>{
  const {id} = req.params;
  const shoe = {id: 1, brand: 'Noke', price: 299, size: 29, searching: id};
  res.json(shoe);
});

// http://localhost:3000/shoes/
shoesRouter.post('/', (req, res)=>{
  const newShow = req.body;
  shoes.push(newShow);
  console.log(shoes);
  const response = {status: 201, message: "Shoe created"};
  res.status(201).json(response);
});

// Partial edition: Patch
shoesRouter.patch('/:id', (req, res)=>{
  const body = req.body;
  const {id} = req.params;
  const indexFounded = shoes.findIndex(shoe => shoe.id === parseInt(id));
  if(indexFounded !== -1){
    const shoeCopy = { ...shoes[indexFounded] };
    shoes[indexFounded] = { ...shoeCopy, ...body };
    // console.log(shoes);
    res.json( { message: "modified with success", body } );
  }else{
    res.send("Ese id no existe");
  }
});

// Complete edition: Put
shoesRouter.put('/:id', (req, res)=>{
  const body = req.body;
  const {id} = req.params;
  const indexFounded = shoes.findIndex(shoe => shoe.id === parseInt(id));
  if(indexFounded !== -1){
    const shoeCopy = { ...shoes[indexFounded] };
    shoes[indexFounded] = { ...shoeCopy, ...body };
    // console.log(shoes);
    res.json( { message: "modified with success", body } );
  }else{
    res.send("Ese id no existe");
  }
});

// Delete: Delete
shoesRouter.delete('/:id', (req, res)=>{
  const {id} = req.params;
  const indexFounded = shoes.findIndex(shoe => shoe.id === parseInt(id));
  if(indexFounded !== -1){
    const shoesCopy = [...shoes];
    shoesCopy.splice(indexFounded, 1);
    shoes = [...shoesCopy];
    console.log('shoes', shoes);
    res.json( { message: "Eliminado!", id } );
  }else{
    res.send("Ese id no existe");
  }
});

module.exports = shoesRouter;