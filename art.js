function draw(){
	paint.clearRect(0,0,screen.width,screen.height)
	for(var i = students-1;i>=0;i--){
		paint.drawImage(all_students[i].img,all_students[i].loc.curr.x,all_students[i].loc.curr.y,50,50);
	}
	requestAnimationFrame(draw);
}