var imageList = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg", "images/img5.jpg", "images/img6.jpg", "images/img7.jpg", "images/img8.jpg", "images/img9.jpg", "images/img10.jpg", "images/img11.jpg", "images/banner_image.jpg"];
var div = document.querySelector(".section3");

for(var i = 0; i < imageList.length; i++){
    var imgE = document.createElement("img");
    imgE.setAttribute("src", imageList[i]);
    imgE.setAttribute("class", "the_image");
    div.appendChild(imgE);

}
