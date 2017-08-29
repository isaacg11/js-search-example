let searchInput = document.getElementById('searchInput');
let robot1 = document.getElementById('robot1');
let robot2 = document.getElementById('robot2');
let robot3 = document.getElementById('robot3');

function search() {
  if(searchInput.value === 'robot1') {
    robot1.style = 'display: default;'
    robot2.style = 'display: none';
    robot3.style = 'display: none';
  } else if(searchInput.value === 'robot2') {
    robot2.style = 'display: default;'
    robot1.style = 'display: none';
    robot3.style = 'display: none';
  } else if(searchInput.value === 'robot3') {
    robot3.style = 'display: default;'
    robot1.style = 'display: none';
    robot2.style = 'display: none';
  }
}
