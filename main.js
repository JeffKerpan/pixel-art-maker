var body = document.getElementsByTagName('body')[0];
var container = document.createElement('section');
// var clickedColor = document.getElementById('div');

// variable for all the separate event listeners
// var currentColor = '';

body.appendChild(container);

container.className = 'container';

for (var i =1; i <=625; i++){
  var tiles = document.createElement('div');
  tiles.className = 'tiles';
  container.appendChild(tiles);
  tiles.addEventListener('click', function(event){
    event.target.style.backgroundColor = brush.color;
    console.log(event.target.className);
  });
}

var palette = document.createElement('div');
body.appendChild(palette);
palette.className = 'palette';

var red = document.createElement('div');
palette.appendChild(red);
red.className = 'red circle';

var orange = document.createElement('div');
palette.appendChild(orange);
orange.className = 'orange circle';

var yellow = document.createElement('div');
palette.appendChild(yellow);
yellow.className = 'yellow circle';

var green = document.createElement('div');
palette.appendChild(green);
green.className = 'green circle';

var blue = document.createElement('div');
palette.appendChild(blue);
blue.className = 'blue circle';

var indigo = document.createElement('div');
palette.appendChild(indigo);
indigo.className = 'indigo circle';

var violet = document.createElement('div');
palette.appendChild(violet);
violet.className = 'violet circle';


var brush = {
  color: '#000000'
};

palette.addEventListener('click', getColor);
function getColor(event){
  console.log(event.target.className);
  brush.color = event.target.className.replace('circle', '');
}



// red.addEventListener('click', function(event){
//   currentColor = 'red';
// });
// orange.addEventListener('click', function(event){
//   currentColor = 'orange';
// });
// yellow.addEventListener('click', function(event){
//   currentColor = 'yellow';
// });
// green.addEventListener('click', function(event){
//   currentColor = 'green';
// });
// blue.addEventListener('click', function(event){
//   currentColor = 'blue';
// });
// indigo.addEventListener('click', function(event){
//   currentColor = 'indigo';
// });
// violet.addEventListener('click', function(event){
//   currentColor = 'violet';
// });
