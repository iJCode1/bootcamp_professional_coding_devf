class ShoesServices{
  constructor(){
    this.shoes = [];
    this.generateData();
  }

  generateData(){
    this.shoes = [
      {id: 1, brand: 'Noke', price: 299, size: 29},
      {id: 2, brand: 'edidas', price: 1599, size: 27},
      {id: 3, brand: 'floxi', price: 430, size: 25.5},
      {id: 4, brand: 'pima', price: 1400, size: 22},
      {id: 5, brand: 'gassi', price: 289, size: 28},
    ];
  }

  create(newShoe){
    // Paso 6.1.4: Se simula una promesa (new promise) y una operación asincrona (setTimeOut = Base de Datos)
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        // Paso 6.1.5: Lógica de negocio
        this.shoes.push(newShoe);
        // Paso 6.1.6: En caso de éxito, usar resolve()
        resolve();
      }, 2000);
    });
  }

  findAll(price){
    // Paso 6.1.4: Se simula una promesa (new promise) y una operación asincrona (setTimeOut = Base de Datos)
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        // Paso 6.1.5: Lógica de negocio
        if(price){
          const filterData = this.shoes.filter(shoe => shoe.price >= price);
          // Paso 6.1.6: En caso de éxito, usar resolve()
          resolve(filterData);
        }
        resolve(this.shoes);
      }, 2000);
    })
  }

  findOne(){
  
  }

  editPartial(){
  
  }

  editComplete(){
  
  }

  delete(){
  
  }

};

module.exports = ShoesServices;