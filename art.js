function draw(){
	paint.clearRect(0,0,screen.width,screen.height)
	for(var i = 0;i<students;i++){
		paint.drawImage(all_students[i].img,all_students[i].loc.curr.x,all_students[i].loc.curr.y,50,50);
	}
	requestAnimationFrame(draw);
}