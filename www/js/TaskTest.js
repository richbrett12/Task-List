class TaskTest {
	run() {
		// run all my tests
		this.shouldAlertTest();
		this.deleteTaskTest();
		this.moveToTest();
	}

	shouldAlertTest() {
		console.log(".");
		var task = new Task();
		task.setTimeEstimate(20);

		console.assert(task.shouldAlert(20) == true, "Task.shouldAlert(20) returned false; expected true");
		console.assert(task.shouldAlert(10) == false, "task.shouldAlert(10) returned true; expected false");
	}

	deleteTaskTest() {
		console.log(".");
		var taskList = new TaskList();
		var task = new Task();
		taskList.addTask(null, task);
		task.deleteTask();

		console.assert(taskList.tasks.length == 0, "deleteTask incorrectly deleted task");
	}

	moveToTest() {
		console.log(".");
		var taskList = new TaskList();
		var task = new Task();
		taskList.addTask(null, task);
		var taskList2 = new TaskList();

		task.moveTo(taskList2);
		console.assert(taskList.tasks.length == 0, "task.moveTo(taskList2) incorrectly moved the task");
		console.assert(taskList2.tasks.length == 1, "task.moveTo(taskList2) incorrectly moved the task");
	}
}