class TaskListTestSuite {
	run() {
		this.getTaskToAlertTest();
		this.taskListLengthTest();
		this.shouldNotAlertTest();
		this.addTaskTest();
	}

	getTaskToAlertTest() {
		// test 
		console.log(".");
		var taskList = new TaskList();
		var task1 = new Task();
		task1.setPriority(1);
		task1.setTimeEstimate(15);
		taskList.addTask(null, task1);
		var task2 = new Task();
		task2.setPriority(2);
		task2.setTimeEstimate(10);
		taskList.addTask(null, task2);
		var toAlert = taskList.getTaskToAlert(20);
		var toAlert2 = taskList.getTaskToAlert(12);
		console.assert(toAlert === task1, "taskList.getTaskToAlert(20) returned the wrong task:" + toAlert);
		console.assert(toAlert2 === task2, "taskList.getTaskToAlert(12) should've returned task with priority of 2, instead returned:" + toAlert);

		// use structured basis testing to write more test cases
	}

	taskListLengthTest() {
		console.log(".");
		var taskList = new TaskList();

		console.assert(taskList.tasks.length == 0, "Tasks array length is wrong, should be 0");
		// what else would you expect to be true?
	}


	shouldNotAlertTest() {
		console.log(".");
		var taskList = new TaskList();
		var task = new Task();
		task.setTimeEstimate(20);
		taskList.addTask(null, task);

		var toAlert = taskList.getTaskToAlert(10);
		console.assert(toAlert == null, "taskList.getTaskToAlert(10) should've returned null, instead returned: " + toAlert);
	}

	addTaskTest() {
		console.log(".");
		var taskList = new TaskList();
		var task = new Task();
		taskList.addTask(null, task);

		console.assert(taskList.tasks.length >= 1, "Task didn't add, zero tasks in taskList");
		console.assert(taskList.tasks.length <= 1, "Task added incorrectly, more than one task in taskList");

	}

}