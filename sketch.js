var marks = [35,38,42,65,35,34,46,41,58,92];


function setup() 
{
  createCanvas(400,400);

  for (var i = 0;i<marks.length;i++){
    if (marks[i]>=38){
      console.log(marks[i]);
    }
  }
}

function draw() 
{
  background(30);
}

 

