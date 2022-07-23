var SpeechRecognition = window.webkitSpeechRecognition;
var recoginition = new SpeechRecognition();
function startcamera() {
  document.getElementById("textbox").innerHTML = "";
  recoginition.start();
}
recoginition.onresult=function(event){
  console.log(event);
  var content=event.results[0][0].transcript;
  console.log("content="+content);
  document.getElementById("textbox").innerHTML=content;
  if (content=="take my selfie"){
     speak();
  };
 
}
function speak(){
var synth=window.speechSynthesis;
//speakdata=document.getElementById("textbox").value;
speakdata="taking your selfie in 5 seconds";
var utterthis=new SpeechSynthesisUtterance(speakdata);

synth.speak(utterthis);
Webcam.attach(camera);

setTimeout(function(){
  takeSnapshot();
 save();
},5000);
}

Webcam.set({
  width:360,
  height:250,
  image_format:"png",
  png_quality:90
});
camera=document.getElementById("camera");


function takeSnapshot(){
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='selfie_image' src='"+data_uri+"'>"
  });
}

function save(){
  link=document.getElementById("link");
  image=document.getElementById("selfie_image").src;

  link.href=image;
  link.click();
}