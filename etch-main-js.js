makeGrids();
clearGrid();
howMany();


//random color 
function randomColor(e){
  randomRed = Math.floor(Math.random() * 256);
  randomGreen = Math.floor(Math.random() * 256);
  randomBlue = Math.floor(Math.random() * 256);
// check the elemnt class
  if(e.target.classList == "item"){
  e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  }else{
    return;
  }
}

//function clear grid
function clearGrid(){
   const btnClear = document.querySelector('#buttonClear');
   btnClear.addEventListener('clear', btnClear.onclick = () => {
     arrayItem.forEach(elemnt => elemnt.style.backgroundColor = '#FFFFFF');
   })
  }

  // user input
  function howMany(){
    const btnHowMany = document.querySelector('#btnHowMany');
    btnHowMany.querySelector('howMany', btnHowMany.onclick = () => {

    theNum = prompt('Enter a number between 1 and 100: ')
    if(theNum >= 1 && theNum <= 100){
      makeGrids()
    }else{
      return;
    };
  });
  }

  // make the grid
function makeGrids(){
  container = document.querySelector("#container");
  gridItem = [];
  for(let i = 0; i < 16; i++){
    gridItem = document.createElement('div');
    container.appendChild(gridItem);
    gridItem.setAttribute('style', 'border: solid black 1px');
    gridItem.classList.add('item');
  }
  
  // set the grid template column
  container.setAttribute('style', 'grid-template-columns: auto auto auto auto');
  arrayGrid();
  }
  
  function arrayGrid(){
    // add event listner to make random color
    item = document.querySelectorAll('.item');
    arrayItem = Array.from(item);
    arrayItem.forEach(elemnt => addEventListener('hover', onmouseover = randomColor));
    }