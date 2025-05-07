    // let name = "Adeola Isaiah";
    // let city = "Ibadan";
    // let myFavoriteColor = "Black";//Camel case
    // let best_food = "Rice";//Snake Case
    // const pi = 3.142;
    
    const digit = document.querySelector('.digit');
    

    let count = 0;
    const addBtn = document.querySelector('.increase-btn').addEventListener('click',  () => {
        digit.textContent = count++;
    });
    const minusBtn = document.querySelector('.decrease-btn').addEventListener('click', () => {
        digit.textContent = count--;  
    });
  