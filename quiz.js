var submitBtn = document.getElementById("submit");


function tree(pinetree) {
    var height = pinetree.userHeight;
    var leaf = pinetree.userLeaf;
    
    var numOfSpaces = height - 1;

    for (var i=0; i<height; i++){
      console.log( ((" ").repeat(numOfSpaces)) + (leaf.repeat((i * 2)+1)) );
      numOfSpaces = numOfSpaces - 1;
    }
}


function validate(input) {
  if ((isNaN(input.userHeight)) || (input.userHeight === "")){
    alert("Please enter a number.");
  } else if (input.userLeaf === null || input.userLeaf === ""){
    alert("Please type a symbol or character.");
  } else {
    tree(input);
  }
}

document.getElementById("height").addEventListener("keydown", (event)=> {
  if (event.key === "Enter") {
    submitBtn.click();
  }
});

document.getElementById("leaf").addEventListener("keydown", (event)=> {
  if (event.key === "Enter") {
    submitBtn.click();
  }
});

submitBtn.addEventListener("click", ()=> {
  var tree = {
    userHeight: parseInt(document.getElementById("height").value),
    userLeaf: document.getElementById("leaf").value
  };
  validate(tree);
});
