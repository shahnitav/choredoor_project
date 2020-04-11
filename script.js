const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const startButton = document.getElementById('start');
let numClosedDoors = 3;
let openDoor1, openDoor2, openDoor3;
let currentlyPlaying = true;
const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
const isBot = (door) => {
  return (door.src == botDoorPath ? true : false);
}
const isClicked = (door) => {
  return (door.src == closedDoorPath ? false : true);
}
const playDoor = (door) => {
  if(numClosedDoors === 1){
    gameOver('win');
    console.log('Win');
  }
  else if (isBot(door)) {
    gameOver();
  }
  else {
      numClosedDoors--;
  } 
}
const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor == 0) {
      openDoor3 = botDoorPath;
      openDoor1 = beachDoorPath;
      openDoor2 = spaceDoorPath;
  }
  else if (choreDoor == 1) {
      openDoor2 = botDoorPath;
      openDoor1 = spaceDoorPath;
      openDoor3 = beachDoorPath;
  }
  else {
    openDoor1 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  }
}
doorImage1.onclick = () => { 
  if(!isClicked(doorImage1) && currentlyPlaying){
  doorImage1.src = openDoor1;
  playDoor(doorImage1);
  }
};
doorImage2.onclick = () => { 
  if(!isClicked(doorImage2) && currentlyPlaying) {
  doorImage2.src = openDoor2;
  playDoor(doorImage2);
  }
};
doorImage3.onclick = () => { 
  if(!isClicked(doorImage3) && currentlyPlaying) {
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
  }
};
const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}
startButton.onclick = () => {
  if(!currentlyPlaying) {
    startRound();
  }
}
function gameOver(status){
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  }
  else {
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
}
startRound();