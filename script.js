function showSecondButton() {

  var secondButton = document.getElementById("secondButton");


  secondButton.style.display = 'block';
}

function showThirdButton() {

  var thirdButton = document.getElementById("thirdButton");


  thirdButton.style.display = 'block';
}

function ShowFourthButton() {

  var fourthButton = document.getElementById("fourthButton");
  const button = document.getElementById('fourthButton');
  const audio = document.getElementById('glassbroken');
  document.getElementById("glassbroken").volume = 0.2;

  button.addEventListener('click', function() {
    audio.play();
});

  fourthButton.style.display = 'block';
}

function ShowFifithButton() {

  var fifthButton = document.getElementById("fifthButton");

  fifthButton.style.display = 'block';
}

function ShowSixthButton() {

  var fourthButton = document.getElementById("sixthButton");
  const button = document.getElementById('sixthButton');
  const audio = document.getElementById('walking');
  document.getElementById("walking").volume = 0.5;

  button.addEventListener('click', function() {
    audio.play();
});

  sixthButton.style.display = 'block';
}

function ShowSeventhButton() {

  var seventhButton = document.getElementById("seventhButton");

  seventhButton.style.display = 'block';
}

function ShowEightButton() {

  var eightButton = document.getElementById("eightButton");
  const button = document.getElementById('eightButton');
  const audio = document.getElementById('Static');
  document.getElementById("Static").volume = 0.2;

  button.addEventListener('click', function() {
    audio.play();
});

  eightButton.style.display = 'block';
}

function ShowNinethButton() {

  var ninethButton = document.getElementById("ninethButton");

  ninethButton.style.display = 'block';
}

function ShowTenthButton() {

  var tenthButton = document.getElementById("tenthButton");

  tenthButton.style.display = 'block';
}

function ShowEleventhButton() {

  var eleventhButton = document.getElementById("eleventhButton");

  eleventhButton.style.display = 'block';
}

function ShowTwelevthButton() {

  var thirthteenbutton = document.getElementById("thirthteenbutton");
  var twelevthButton = document.getElementById("twelevthButton");

  thirthteenbutton.style.display = 'block';
  twelevthButton.style.display = 'block';
}

function RUN() {

  var run = document.getElementById("run");

  morning.style.display = 'block';
  introtxt.style.display = 'none';
  run.style.display = 'block';
  twelevthButton.style.display = 'none';
  secondButton.style.display = 'none';
  thirdButton.style.display = 'none';
  fourthButton.style.display = 'none';
  fifthButton.style.display = 'none';
  sixthButton.style.display = 'none';
  seventhButton.style.display = 'none';
  eightButton.style.display = 'none';
  ninethButton.style.display = 'none';
  tenthButton.style.display = 'none';
  eleventhButton.style.display = 'none';
  disappear.style.display = 'none';
}

function ENDORSE() {

  var ENDORSE = document.getElementById("ENDORSE");

  introtxt.style.display = 'none';
  night.style.display = 'block';
  endorse.style.display = 'block';
  thirthteenbutton.style.display = 'none';
  secondButton.style.display = 'none';
  thirdButton.style.display = 'none';
  fourthButton.style.display = 'none';
  fifthButton.style.display = 'none';
  sixthButton.style.display = 'none';
  seventhButton.style.display = 'none';
  eightButton.style.display = 'none';
  ninethButton.style.display = 'none';
  tenthButton.style.display = 'none';
  eleventhButton.style.display = 'none';
  disappear.style.display = 'none';
}

function branch() {

  var gun = document.getElementById("gun");

  gun.style.display = 'block';
  twelevthButton.style.display = 'none';
  endorse.style.display = 'none';
}

function insane() {

  var work = document.getElementById("work");

  work.style.display = 'block';
}

function getReady() {

  var LeftHouse = document.getElementById("LeftHouse");

  LeftHouse.style.display = 'block';
}

function GetinCar() {

  var Drive = document.getElementById("Drive");

  Drive.style.display = 'block';
}

function Office() {

  var crashed = document.getElementById("crashed");

  run.style.display = 'none';
  crashed.style.display = 'block';
  Drive.style.display = 'none';
  LeftHouse.style.display = 'none';
  work.style.display = 'none';
  morning.style.display = 'none';
  thirthteenbutton.style.display = 'none';
}


function gunn() {

  var gunreloaded = document.getElementById("gunreloaded");
  const button = document.getElementById('gunreloaded');
  const audio = document.getElementById('Reload');
  document.getElementById("Reload").volume = 0.2;

  button.addEventListener('click', function() {
    audio.play();
});

  gunreloaded.style.display = 'block';
}

function Ready() {

  var ready = document.getElementById("ready");

  ready.style.display = 'block';
}

function Therapist() {

  var hisresponse = document.getElementById("hisresponse");

  hisresponse.style.display = 'block';
}

function Therapist() {

  var hisresponse = document.getElementById("hisresponse");
  var one = document.getElementById("one");
  var two = document.getElementById("two");
  var three = document.getElementById("three");
  var four = document.getElementById("four");

  hisresponse.style.display = 'block';
  one.style.display = 'block';
  two.style.display = 'block';
  three.style.display = 'block';
  four.style.display = 'block';
}

function CHOICEONE() {

  var choiceone = document.getElementById("choiceone");
  
  night.style.display = 'none';
  gun.style.display = 'none';
  gunreloaded.style.display = 'none';
  ready.style.display = 'none';
  hisresponse.style.display = 'none';
  choiceone.style.display = 'block';
  one.style.display = 'none';
  two.style.display = 'none';
  three.style.display = 'none';
  four.style.display = 'none';
}

function CHOICETWO() {

  var hallway = document.getElementById("hallway");
  
  hallway.style.display = 'block';
  night.style.display = 'none';
  gun.style.display = 'none';
  gunreloaded.style.display = 'none';
  ready.style.display = 'none';
  hisresponse.style.display = 'none';
  choiceone.style.display = 'none';
  one.style.display = 'none';
  two.style.display = 'none';
  three.style.display = 'none';
  four.style.display = 'none';
}

function Hallway() {

  var lights = document.getElementById("lights");
  
  lights.style.display = 'block';
  night.style.display = 'none';
  gun.style.display = 'none';
  gunreloaded.style.display = 'none';
  ready.style.display = 'none';
  hisresponse.style.display = 'none';
  choiceone.style.display = 'none';
  one.style.display = 'none';
  two.style.display = 'none';
  three.style.display = 'none';
  four.style.display = 'none';
}


function scaredending() {

  var scaredEnding = document.getElementById("scaredEnding");

  scaredEnding.style.display = 'block';
  hallway.style.display = 'none';
  lights.style.display = 'none';
  night.style.display = 'none';
  gun.style.display = 'none';
  gunreloaded.style.display = 'none';
  ready.style.display = 'none';
  hisresponse.style.display = 'none';
  choiceone.style.display = 'none';
  one.style.display = 'none';
  two.style.display = 'none';
  three.style.display = 'none';
  four.style.display = 'none';
}

function CHOICETHREE() {

  var call = document.getElementById("call");
  
  call.style.display = 'block';
  night.style.display = 'none';
  gun.style.display = 'none';
  gunreloaded.style.display = 'none';
  ready.style.display = 'none';
  hisresponse.style.display = 'none';
  choiceone.style.display = 'none';
  one.style.display = 'none';
  two.style.display = 'none';
  three.style.display = 'none';
  four.style.display = 'none';
}

function CHOICEFOUR() {

  var pill = document.getElementById("pill");
  var Survive = document.getElementById("Survive");

  Survive.style.display = 'block';
  pill.style.display = 'block';
  hallway.style.display = 'none';
  night.style.display = 'none';
  gun.style.display = 'none';
  gunreloaded.style.display = 'none';
  ready.style.display = 'none';
  hisresponse.style.display = 'none';
  choiceone.style.display = 'none';
  one.style.display = 'none';
  two.style.display = 'none';
  three.style.display = 'none';
  four.style.display = 'none';
}

function died() {

  var OverDose = document.getElementById("OverDose");

  OverDose.style.display = 'block';
  Survive.style.display = 'none';
  pill.style.display = 'none';
  hallway.style.display = 'none';
  night.style.display = 'none';
  gun.style.display = 'none';
  gunreloaded.style.display = 'none';
  ready.style.display = 'none';
  hisresponse.style.display = 'none';
  choiceone.style.display = 'none';
  one.style.display = 'none';
  two.style.display = 'none';
  three.style.display = 'none';
  four.style.display = 'none';
}

function survived() {

  var survive2 = document.getElementById("survive2");

  survive2.style.display = 'block';
  OverDose.style.display = 'none';
  Survive.style.display = 'none';
  pill.style.display = 'none';
  hallway.style.display = 'none';
  night.style.display = 'none';
  gun.style.display = 'none';
  gunreloaded.style.display = 'none';
  ready.style.display = 'none';
  hisresponse.style.display = 'none';
  choiceone.style.display = 'none';
  one.style.display = 'none';
  two.style.display = 'none';
  three.style.display = 'none';
  four.style.display = 'none';
}