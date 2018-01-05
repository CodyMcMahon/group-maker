function mk_student(n){
	var i = new Image();
	i.src = "assets/"+n+".png";
	return {
		num : n,
		img : i,
		loc : {
			curr : {
				x : 0,
				y : 0
			},
			des : {
				x : 0,
				y : 0
			},
			fut : {
				x : 0,
				y : 0
			}
		}
	}
}
function step(s){
	x = s.loc.curr.x - s.loc.des.x;
	y = s.loc.curr.y - s.loc.des.y;
	if(x === 0 || y === 0){
		s.loc.curr.x = s.loc.des.x;
		s.loc.curr.y = s.loc.des.y;
	}
	else{
		s.loc.curr.x -= x/4;
		s.loc.curr.y -= y/4;
	}
}
function set_off_screen(s){
	var side = Math.floor(Math.random()*4);
	if(side === 0){
		s.loc.curr.x = Math.floor(Math.random()*1000);
		s.loc.curr.y = -100;
	}
	if(side === 1){
		s.loc.curr.y = Math.floor(Math.random()*500);
		s.loc.curr.x = -600;
		
	}
	if(side === 2){
		s.loc.curr.x = Math.floor(Math.random()*1000);
		
		s.loc.curr.y = 600;
		
	}
	if(side === 3){
		s.loc.curr.y = Math.floor(Math.random()*500);
		s.loc.curr.x = -100;
		
	}
}