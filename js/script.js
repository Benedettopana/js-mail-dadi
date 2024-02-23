// ********************************************
//                 EMAIL
// ********************************************

// Chiedo quante email saranno inserite
const myNumbEmail = parseInt(prompt('Quante EMAIL vuoi inserire?'));

// Creo il mio array
const myEmailList = [];

for (let i = 0; i < myNumbEmail; i++) {
  const newEmail = prompt('Inserisci l\'email numero: ' + (i + 1) + " su " + myNumbEmail);
  myEmailList.push(newEmail);
  
}
console.log(myEmailList.join(' | '));

// Cerco la mia email

const btnSer = document.querySelector('.btnSer');

btnSer.addEventListener('click',function(){
  const inputEmail = document.querySelector('.inputEmail');
  const myEmail = inputEmail.value;
  let found = false;
  for(let i=0; i < myEmailList.length; i++){
    if(myEmailList[i] == myEmail){
      found = true;
    }
  }

  if(found){
    alert('La tua email è autorizzata all\'accesso.');
  } else {
      alert('La tua email NON è autorizzata all\'accesso!!!');
  }
});

// ********************************************
//                 EMAIL
// ********************************************




// ********************************************
//                 DADI
// ********************************************

const btnRoll = document.querySelector('.btnRoll');


btnRoll.addEventListener('click',function(){
  // TIRI CREATI
  const playerDice = Math.ceil(Math.random() * 6);
  console.log(playerDice);
  const pcDice = Math.ceil(Math.random() * 6);
  console.log(pcDice);

  if(playerDice > pcDice){
    alert('Hai VINTO!! il tuo punteggio è: ' + (playerDice) + ' il pc ha fatto: ' + (pcDice));
  }else if(playerDice == pcDice){
    alert('Hai Pareggiato il tuo punteggio è: ' + (playerDice) + ' il pc ha fatto: ' + (pcDice));
  }else{
    alert('Hai Perso.... il tuo punteggio è: ' + (playerDice) + ' il pc ha fatto: ' + (pcDice));
  }

});



// ********************************************
//                 DADI
// ********************************************
