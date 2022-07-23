/*
* Capa route, utilizada para el mapeo de los path
*/
const express = require('express');
const shoesRouter = express.Router();
const ShoesServices = require('../../services/shoes/');

const shoesService = new ShoesServices();

// Url's para probar
// http://localhost:3000/shoes/
// http://localhost:3000/shoes/72

// Query params: Filtrar información
// http://localhost:3000/shoes/?page=1&pageSize=10&brand="noke"
shoesRouter.get('/', async(req, res)=>{
  // Paso 6.1.1: Leer la request
  const { price } = req.query;
  try{
    // Paso 6.1.2: Acceder a la capa 'service' para tener una respuesta
    const shoes = await shoesService.findAll(price);
    res.status(200).json(shoes);
  }catch(error){
    // Paso 6.1.3: Si hay un error al acceder al services, respondemos un error génerico
    res.status(404).json( { message: 'No hay datos!' } )
  }
});

// Request param: Son utilizados para ejecurtar operaciones sobre un elemento especifico
shoesRouter.get('/:id', (req, res)=>{
  const {id} = req.params;
  const shoe = {id: 1, brand: 'Noke', price: 299, size: 29, searching: id};
  res.json(shoe);
});

// http://localhost:3000/shoes/
shoesRouter.post('/', async(req, res)=>{
  // Paso 6.1.1: Leer la request
  const newShoe = req.body;
  try{
    // Paso 6.1.2: Acceder a la capa 'service' para tener una respuesta
    await shoesService.create(newShoe);
    res.status(201).send()
  }catch(error){
    // Paso 6.1.3: Si hay un error al acceder al services, respondemos un error génerico
    res.status(500).send( { message: 'Intente más tarde' } )
  }
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