var isCross = true;
var board = [ [0,0,0], [0,0,0], [0,0,0] ]
var isWin = false

function changeImg(x, y) {

  var imgId = "#mycross" + x + y;
  if(isCross) {
    $(imgId).attr("src", "./cross.png");
    isCross = false;
    board[x][y] = 1;
  } else {
    $(imgId).attr("src", "./circle.png");
    isCross = true;
    board[x][y] = -1;
  }
  $(imgId).css("display", "block");
  var theWinner = getWinner();
  if (theWinner != 0) {
    displayResult(theWinner);
  }
}

function move(x, y) {
  if (isWin) {
    return;
  }
  var crossid = "#mycross" + x + y;
  var displayValue = $(crossid).css("display")
  if(displayValue == "none") {
    changeImg(x, y);
  }
}

function restart() {
  isCross = true;
  board = [ [0,0,0], [0,0,0], [0,0,0] ]
  isWin = false
  $(".cross").css("display", "none")
  $("#result").css("display", "none")
}

function getWinner(){

  // check row
  for (var i = 0; i < 3; i++){
    rowResult = board[i][0] + board[i][1] + board[i][2];
    if(rowResult == 3){
      return 1;
    }

    if (rowResult == -3) {
    return -1;
    }
  }


  // check column
  for (var j = 0; j < 3; j++){
    columnResult = board[0][j] + board[1][j] + board[2][j];
    if(columnResult == 3){
      return 1;
    }

    if (columnResult == -3) {
    return -1;
    }
  }


  // check diagonal
  firstDiagonal = board[0][0] + board[1][1] + board[2][2]
  secondDiagonal = board[0][2] + board[1][1] + board[2][0]

  if(firstDiagonal == 3){
    return 1;
  }

  if (firstDiagonal == -3) {
    return -1;
  }

  if(secondDiagonal == 3){
    return 1;
  }

  if (secondDiagonal == -3) {
    return -1;
  }



  // firstrow = board[0][0] + board[0][1] + board[0][2]
  // secondrow = board[1][0] + board[1][1] + board[1][2]
  // thirdrow = board[2][0] + board[2][1] + board[2][2]

  // if(firstrow == 3){
  //   return 1;
  // }

  // if (firstrow == -3) {
  //   return -1;
  // }

  // if(secondrow == 3){
  //   return 1;
  // }

  // if (secondrow == -3) {
  //   return -1;
  // }

  // if(thirdrow == 3){
  //   return 1;
  // }

  // if (thirdrow == -3) {
  //   return -1;
  // }

  return 0;
}

function displayResult(winner){
  var winnername = ""
  if (winner == 1) {
    winnername = "Cross"
  }else {
    winnername = "Circle"
  }
  $("#result").html(winnername + " win, yeah!!!");
  $("#result").css("display", "block");
  isWin = true;
}
