function reset_app(){
	error.innerHTML = "";
	launched = false;
	student_text.disabled = false;
	group_text.disabled = false;
	for(var i = 0; i < 40; i++){
		all_students[i].loc.des.x = Math.floor(i/10)*50;
		all_students[i].loc.des.y = Math.floor(i%10)*50;
	}
	screen.height = 500;
}
function launch(){
	student_text.disabled = true;
	group_text.disabled = true;
	launched = true;
	if(Math.floor(students/groups) <= students%groups){
		console.log("error!!!!!");
		error.innerHTML = "group size impossible trying larger group(click go)";
		group_text.value = '' + (groups + Math.floor(students/groups) - students%groups + 1);
		console.log('' + (groups + Math.floor(students/groups) - students%groups));
		groups += (Math.floor(students/groups) - students%groups);
		student_text.disabled = false;
		group_text.disabled = false;
		launched = false;
	}
	else if(groups === 0){
		console.log("ZERO Group!!!");
		error.innerHTML = "ZERO GROUP!!";
	}
	else if(students < groups*2){
		console.log("group too big!!!");
		error.innerHTML = "group too big!!";
	}
	else{
		shuffle();
		domino(0,students);
	}
}
function shuffle(){
	var num = Math.floor(students/groups);
	var extras = students%num;
	var g = [];
	for(var i = 0;i < num;i++){
		g[g.length] = [];
	}
	for(var i = 0;i < students; i++){
		var desired_group = Math.floor(Math.random()*num);
		while(desired_group < extras ? g[desired_group].length > groups  : g[desired_group].length > groups-1){
			desired_group = Math.floor(Math.random()*num);
			//console.log(g);
		}
		g[desired_group][g[desired_group].length] = all_students[i];
	}
	for(var i = 0; i < g.length;i++){
		for(var o = 0; o < g[i].length;o++){
			g[i][o].loc.fut.x = 250 + i%3 * 250 +o%4*50;
			g[i][o].loc.fut.y = 50 + Math.floor(i/3)*150 + Math.floor(o/4)*50;
		}
	}
	if (num > 9){
		num -= 9;
		num = num/3 + 1;
		screen.height += num*150;
	}
}
function domino(c,d){
	if(c<d && launched === true){
		all_students[c].loc.des.x = all_students[c].loc.fut.x;
		all_students[c].loc.des.y = all_students[c].loc.fut.y;
		setTimeout(function(){
			domino(c+1,d);
		},100);
	}
}