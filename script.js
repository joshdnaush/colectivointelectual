var sourceVideo = document.getElementById("v1");


const redGlow = document.getElementById("redGlow");



function glowEffect (htmlObj){

	var opacity = 0;
	
	for(let i = 0; i < 1, i += 0.1){
		opacity = i;
		htmlObj.style.setProperty('opacity', opacity, 'important');
		if(opacity == 1.0){
			for(let i = 0; i > 0, i -= 0.1){
				opacity = i;
				htmlObj.style.setProperty('opacity', opacity, 'important');	
			}
		}
	}
}



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var vidSelector = getRandomInt(4);


switch(vidSelector) {
  case 1:
    sourceVideo.setAttribute('src',"videos/0.mp4");
    break;
		
  case 2:
    sourceVideo.setAttribute('src',"videos/1.mp4");
    break;
		
  case 3:
    sourceVideo.setAttribute('src',"videos/2.mp4");
    break;
		
  default:
    sourceVideo.setAttribute('src',"videos/3.WebM");
    break;

}

sourceVideo.load();
sourceVideo.play();

//var el = document.querySelector('.demo');
