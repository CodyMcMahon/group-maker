function update_state(){
	var old_students = students;
	students = parseInt(student_text.value);
	groups = parseInt(group_text.value);
	if(students === NaN){
		students = 0;
	}
	if(students >= 40){
		students = 40;
	}
	if(groups === NaN){
		groups = 0;
	}
	if(old_students < students){
		for(var i = old_students; i < students;i++) {
			set_off_screen(all_students[i]);
		}
	}
	for(var i = 0; i < students;i++){
		step(all_students[i]);
	}
	setTimeout(update_state,50);
}