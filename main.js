Webcam.set({ //this function is the web cam live previews properties 
    width:350,
    height: 350,
    image_format: "png",
    png_quality:90
});

 camera = document.getElementById("camera");

 Webcam.attach(camera);
//this function tells teh camera were the live preview is meant to be shown in the div camera element

function take_snapshot()
{
   Webcam.snap(function(data_uri) //this function si for passing the image to the result div element 
   {
     document.getElementById("result").innerHTML = '<img id ="captured_image" src = "'+data_uri+ '">';

   });
}

console.log("ml5 version", ml5.version); 
//using the ml5 version is to check the library is linked properly

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/cMMbvourS/model.json",modelLoaded);
// this classifier function will trigger the image classification prossess and we are storing the entire thing in the classifier variable




