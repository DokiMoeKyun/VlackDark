var imgs = ["../Resources/Images/work01.jpg",
			"../Resources/Images/work02.jpg",
			"../Resources/Images/work03.jpg",
			"../Resources/Images/work04.jpg",
			"../Resources/Images/work05.jpg",
			"../Resources/Images/work06.jpg",
			"../Resources/Images/work07.jpg",
			"../Resources/Images/work08.jpg",
			"../Resources/Images/work09.jpg",
			"../Resources/Images/work10.jpg",
			"../Resources/Images/work11.jpg"];

var index = 0;

window.onload = function slider() {
    var next = document.getElementById("next").onclick = function () {
        var slider = document.getElementById("slider");
    
        index++;
        if(index >= imgs.length) {
                index = 0;
            }
    
        slider.src = imgs[index];
    }
    
    var prev = document.getElementById("prev").onclick = function () {
        var slider = document.getElementById("slider");
        
        index--;
        if(index <= 0)
            {
                index = imgs.length - 1;
            }
        
        slider.src = imgs[index];
    }
}