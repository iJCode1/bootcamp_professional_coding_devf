// Uso de axios para consumo de API's
// Forma 1

axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
.then((response) => {
  let data = response.data;
  if(data && data.drinks){
    for(let i = 0; i < data.drinks.length; i++){
      console.log(data.drinks[i].strDrink);
    }
  }
})
.catch((error) => {
  console.log(error);
})
/* 
  Salida
  Margarita
  Blue Margarita
  Tommy's Margarita
  Whitecap Margarita
  Strawberry Margarita
  Smashed Watermelon Margarita
*/


// Forma 2
async function getData(){
  try{
    let response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Sour");
    let data = response.data;
    if(data && data.drinks){
      console.log("Contienen la palabra 'sour'")
      data.drinks.forEach((drink) => {
        console.log(drink.strDrink);
      });
    }
  }catch(error){
    console.error(error);
  }
}

getData().then((drink) => {
  console.log(drink);
}).catch((e) => {
  console.log(e);
})

// getData();