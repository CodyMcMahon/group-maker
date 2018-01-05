var screen;
var student_text;
var students = 0;
var	group_text;
var groups = 0;
var	paint;
var all_students = [];
var launched = false;
var error;


function startup(){
	console.log("sucess!!!");
	screen = document.getElementById("screen");
	student_text = document.getElementById("student-num");
	group_text = document.getElementById("size-of-group");
	error = document.getElementById("error");
	paint = screen.getContext("2d");
	for(var i = 1;i <= 40; i++){
		all_students[all_students.length] = mk_student(i);
	}
	reset_app();
	draw();
	update_state();
	
}