// ***************TIMER***********************
var flag = 0;
var count = 60;
function countDown(){
  if(count > 0 && flag != 1){ //flag becomes 1 when answer is either correct or wrong, to stop the timer
      count--;
      document.getElementById("timer1").innerHTML = ""+count+" seconds left!";
      document.getElementById("timer2").innerHTML = ""+count+" seconds left!";
      document.getElementById("timer3").innerHTML = ""+count+" seconds left!";
      document.getElementById("timer4").innerHTML = ""+count+" seconds left!";  
      setTimeout("countDown()", 1000);
  }
  // To display a popup when time's up
  else if(count <= 0){
      document.getElementById('time').style.display = "block";
      localStorage.setItem("blocker", "true");
  }
}

$(document).ready(function(){

// **************audio******************

  var x = document.getElementById('myAudio');

// **************egg1******************

  $(".egg1").click(function(){
    
    $(this).addClass("hover1"); 
    x.play();
    $(".egg1__left").addClass("hover1");
    $(".egg1__right").addClass("hover1");
    $(".riddle1").fadeIn(1000);
    countDown();
  });

// **************egg2******************

  $(".egg2").click(function(){
    $(this).addClass("hover2"); 
    x.play();
    $(".egg2__left").addClass("hover2");
    $(".egg2__right").addClass("hover2");
    $(".riddle2").fadeIn(1000);
    countDown();
  });

// **************egg3******************

  $(".egg3").click(function(){
    $(this).addClass("hover3"); 
    x.play();
    $(".egg3__left").addClass("hover3");
    $(".egg3__right").addClass("hover3");
    $(".riddle3").fadeIn(1000);
    countDown();
  });

// **************egg4******************

  $(".egg4").click(function(){
    $(this).addClass("hover4"); 
    x.play();
    $(".egg4__left").addClass("hover4");
    $(".egg4__right").addClass("hover4");
    $(".riddle4").fadeIn(1000);
    countDown();
  });

})

// *******************INPUT VALIDATION*********************

function validate1(){
  if(localStorage.getItem("blocker")==null)
  {
    localStorage.setItem("blocker", "true");
    var input1 = document.getElementById('answer1').value;
    if(input1 == "")
      alert("Please fill out the field!");
    else if(input1.toUpperCase() == "PIERTOTUM LOCOMOTOR"){
        document.getElementById('cor').style.display = "block";
        flag = 1;
    }
    else{
      document.getElementById('wro').style.display = "block";
      flag = 1;
    }
  }
  else{
    //alert("You have already tried");
    document.getElementById('one').style.display = "block";
    flag = 1;
  }
}
function validate2(){
  if(localStorage.getItem("blocker")==null)
  {
    localStorage.setItem("blocker", "true");
    var input2 = document.getElementById('answer2').value;
    if(input2 == "")
      alert("Please fill out the field!");
    else if(input2.toUpperCase() == "MORSMORDRE"){
        document.getElementById('cor').style.display = "block";
        flag = 1;
    }
    else{
      document.getElementById('wro').style.display = "block";
      flag = 1;
    }
  }
  else{
    //alert("You have already tried");
    document.getElementById('one').style.display = "block";
    flag = 1;
  }
}
function validate3(){
  if(localStorage.getItem("blocker")==null)
  {
    localStorage.setItem("blocker", "true");
    var input3 = document.getElementById('answer3').value;
    if(input3 == "")
      alert("Please fill out the field!");
    else if(input3.toUpperCase() == "JINX"){
        document.getElementById('cor').style.display = "block";
        flag = 1;
    }
    else{
      document.getElementById('wro').style.display = "block";
      flag = 1;
    }
  }
  else{
    //alert("You have already tried");
    document.getElementById('one').style.display = "block";
    flag = 1;
  } 
}
function validate4(){
  if(localStorage.getItem("blocker")==null)
  {
    localStorage.setItem("blocker", "true");
    var input4 = document.getElementById('answer4').value;
    if(input4 == "")
      alert("Please fill out the field!");
    else if(input4.toUpperCase() == "PETRIFICUS TOTALUS"){
        document.getElementById('cor').style.display = "block";
        flag = 1;
    }
    else{
      document.getElementById('wro').style.display = "block";
      flag = 1;
    }
  }
  else{
    //alert("You have already tried");
    document.getElementById('one').style.display = "block";
    flag = 1;
  } 
}










