//I do not own any images.

var score = 0;
var lives = 3;
var hiddenCount = 0;
var timeBonus;
var timeEnd;
var time5;
var time10;
var time15;
var time20;
var time25;
var start;
var stop;
var pigmentValue = 45;
var pigmentIncrement = 15;
var game1Trash = ["game1_Cigarette_1", "game1_Cigarette_2", "game1_Can_1", "game1_Can_2", "game1_Bag_1", "game1_Bag_2", "game1_Wrapper_1", "game1_Wrapper_2", "game1_Straws_1", "game1_Straws_2"];
var game2Trash = ["game2_Cigarette_1", "game2_Cigarette_2", "game2_Can_1", "game2_Can_2", "game2_Bag_1", "game2_Bag_2", "game2_Wrapper_1", "game2_Wrapper_2", "game2_Straws_1", "game2_Straws_2"];

setText("game1_Score", score);
setText("game1_Lives", lives);
setText("game2_Lives", lives);

onEvent("intro_Start_Btn", "click", function(event) {
  setScreen("stage1");
});
onEvent("stage1_Start_Btn", "click", function(event) {
  setScreen("game1");
});
onEvent("stage1lose_Retry_Btn", "click", function(event) {
  reset(1);
  setScreen("intro");
});
onEvent("stage2_Next_Btn", "click", function(event) {
  setScreen("stage2cont");
});
onEvent("stage2cont_Start_Btn", "click", function(event) {
  pigmentValue = 45;
  setScreen("game2");
  start = getTime();
  updateTime();
  checkTimer();
});
onEvent("stage2lose_Retry_Btn", "click", function(event) {
  reset(2);
  setScreen("intro");
});
onEvent("stage2win_Play_Again_Btn", "click", function(event) {
  reset(2);
  setScreen("intro");
});
onEvent("bonus_Bonus_Btn", "click", function(event) {
  setScreen("bonuscont");
});
onEvent("bonuscont_Play_Again_Btn", "click", function(event) {
  reset(2);
  setScreen("intro");
});

onEvent("game2_Cigarette_1", "click", function() {
  hideElement("game2_Cigarette_1");
  hiddenCount++;
  checkHiddenCount();
  changeWaterColor(2);
});
onEvent("game2_Cigarette_2", "click", function() {
  hideElement("game2_Cigarette_2");
  hiddenCount++;
  checkHiddenCount();
  changeWaterColor(2);
});
onEvent("game2_Can_1", "click", function() {
  hideElement("game2_Can_1");
  hiddenCount++;
  checkHiddenCount();
  changeWaterColor(2);
});
onEvent("game2_Can_2", "click", function() {
  hideElement("game2_Can_2");
  hiddenCount++;
  checkHiddenCount();
  changeWaterColor(2);
});
onEvent("game2_Bag_1", "click", function() {
  hideElement("game2_Bag_1");
  hiddenCount++;
  checkHiddenCount();
  changeWaterColor(2);
});
onEvent("game2_Bag_2", "click", function() {
  hideElement("game2_Bag_2");
  hiddenCount++;
  checkHiddenCount();
  changeWaterColor(2);
});
onEvent("game2_Wrapper_1", "click", function() {
  hideElement("game2_Wrapper_1");
  hiddenCount++;
  checkHiddenCount();
  changeWaterColor(2);
});
onEvent("game2_Wrapper_2", "click", function() {
  hideElement("game2_Wrapper_2");
  hiddenCount++;
  checkHiddenCount();
  changeWaterColor(2);
});
onEvent("game2_Straws_1", "click", function() {
  hideElement("game2_Straws_1");
  hiddenCount++;
  checkHiddenCount();
  changeWaterColor(2);
});
onEvent("game2_Straws_2", "click", function() {
  hideElement("game2_Straws_2");
  hiddenCount++;
  checkHiddenCount();
  changeWaterColor(2);
});

onEvent("game2_Blue_Fish", "mouseover", function( ) {
  lives--;
  setText("game2_Lives", lives);
  checkLives();
});
onEvent("game2_Red_Fish", "mouseover", function( ) {
  lives--;
  setText("game2_Lives", lives);
  checkLives();
});
onEvent("game2_Seahorse", "mouseover", function( ) {
  lives--;
  setText("game2_Lives", lives);
  checkLives();
});
onEvent("game2_Starfish", "mouseover", function( ) {
  lives--;
  setText("game2_Lives", lives);
  checkLives();
});

onEvent("game1_Cigarette_1", "click", function() {
  hideElement("game1_Cigarette_1");
  score++;
  setText("game1_Score", score);
  changeWaterColor(1);
  checkScore();
});
onEvent("game1_Cigarette_2", "click", function() {
  hideElement("game1_Cigarette_2");
  score++;
  setText("game1_Score", score);
  changeWaterColor(1);
  checkScore();
});
onEvent("game1_Can_1", "click", function() {
  hideElement("game1_Can_1");
  score++;
  setText("game1_Score", score);
  changeWaterColor(1);
  checkScore();
});
onEvent("game1_Can_2", "click", function() {
  hideElement("game1_Can_2");
  score++;
  setText("game1_Score", score);
  changeWaterColor(1);
  checkScore();
});
onEvent("game1_Bag_1", "click", function() {
  hideElement("game1_Bag_1");
  score++;
  setText("game1_Score", score);
  changeWaterColor(1);
  checkScore();
});
onEvent("game1_Bag_2", "click", function() {
  hideElement("game1_Bag_2");
  score++;
  setText("game1_Score", score);
  changeWaterColor(1);
  checkScore();
});
onEvent("game1_Wrapper_1", "click", function() {
  hideElement("game1_Wrapper_1");
  score++;
  setText("game1_Score", score);
  changeWaterColor(1);
  checkScore();
});
onEvent("game1_Wrapper_2", "click", function() {
  hideElement("game1_Wrapper_2");
  score++;
  setText("game1_Score", score);
  changeWaterColor(1);
  checkScore();
});
onEvent("game1_Straws_1", "click", function() {
  hideElement("game1_Straws_1");
  score++;
  setText("game1_Score", score);
  changeWaterColor(1);
  checkScore();
});
onEvent("game1_Straws_2", "click", function() {
  hideElement("game1_Straws_2");
  score++;
  setText("game1_Score", score);
  changeWaterColor(1);
  checkScore();
});

onEvent("game1_Blue_Fish", "mouseover", function( ) {
  lives--;
  setText("game1_Lives", lives);
  checkScore();
});
onEvent("game1_Red_Fish", "mouseover", function( ) {
  lives--;
  setText("game1_Lives", lives);
  checkScore();
});
onEvent("game1_Seahorse", "mouseover", function( ) {
  lives--;
  setText("game1_Lives", lives);
  checkScore();
});
onEvent("game1_Starfish", "mouseover", function( ) {
  lives--;
  setText("game1_Lives", lives);
  checkScore();
});

function reset(stage){
  resetVar();
  setText("game1_Score", score);
  setText("game2_Time", "0 seconds have elapsed")
  setText("game"+stage + "_Lives", lives);
  for (var i = 1; i <= stage; i++) {
    setProperty("game"+i, "background-color", rgb(0, pigmentValue, pigmentValue));
  }
  for (var i = 0; i < game1Trash.length; i++) {
    showElement(game1Trash[i]);
  }
  if (stage==2) {
    for (var i = 0; i < game2Trash.length; i++) {
      showElement(game2Trash[i]);
    }
    resetTime();
  }
}
function resetTime() {
  if (timeBonus) {
    clearTimeout(timeBonus);
  }
  if (timeEnd) {
    clearTimeout(timeEnd);
  }
  if (time5) {
    clearTimeout(time5);
  }
  if (time10) {
    clearTimeout(time10);
  }
  if (time15) {
    clearTimeout(time15);
  }
  if (time20) {
    clearTimeout(time20);
  }
  if (time25) {
    clearTimeout(time25);
  }
}
function resetVar() {
  score = 0;
  lives = 3;
  hiddenCount = 0;
  pigmentValue = 45;
}
function checkTimer() {
  var flag = false;
  timeBonus = setTimeout(function() {
    if (hiddenCount==10) {
      setScreen("bonus");
      resetTime();
      flag = true;
    }
  }, 10000);
  timeEnd = setTimeout(function() {
    if (flag==false) {
      if (hiddenCount==10) {
        setScreen("stage2win");
        resetTime();
      } else {
        setScreen("stage2lose");
        resetTime();
      }
    }
  }, 30000);
}
function checkHiddenCount() {
  if (hiddenCount==10) {
    stop = getTime();
    var timeElapsed = stop-start;
    if (timeElapsed<10000) {
      setScreen("bonus");
      resetTime();
    } else if (timeElapsed<30000) {
      setScreen("stage2win");
      resetTime();
    }
  }
}
function checkLives() {
  if (lives==0) {
    setScreen("stage2lose");
    resetTime();
  }
}
function updateTime() {
  time5 = setTimeout(function() {
    setText("game2_Time", "5 seconds have elapsed");
  }, 5000);
  time10 = setTimeout(function() {
    setText("game2_Time", "10 seconds have elapsed");
  }, 10000);
  time15 = setTimeout(function() {
    setText("game2_Time", "15 seconds have elapsed");
  }, 15000);
  time20 = setTimeout(function() {
    setText("game2_Time", "20 seconds have elapsed");
  }, 20000);
  time25 = setTimeout(function() {
    setText("game2_Time", "25 seconds have elapsed");
  }, 25000);
}
function checkScore() {
  if (lives==0) {
    setScreen("stage1lose");
  }
  if (score==10) {
    setScreen("stage2");
  }
}
function changeWaterColor(stage) {
  setProperty("game"+stage, "background-color", rgb(0, pigmentValue + pigmentIncrement, pigmentValue + pigmentIncrement));
  pigmentValue = pigmentValue + pigmentIncrement;
}
