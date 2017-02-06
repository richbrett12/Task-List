class TaskList {
	constructor() {
		this.tasks = [];
		this.title = "";
		this.totalTime = 0;
		// just a reminder of what we want our HTML to look like
		this.proto = `
			 <div class="tasklist--wrapper">
                <ul class="tasklist">

                </ul>
                <button type="button" class="addtask">Add Task</button>
            </div>
            `

		this.el = document.createElement('div');
		this.el.className = "tasklist--wrapper";
		var ul = document.createElement('ul');
		ul.className = "tasklist";
		this.el.appendChild(ul);
		var button = document.createElement('button');
		button.className = "addtask";
		button.setAttribute('type', 'button');
		button.innerHTML = "Add Task";
		this.el.appendChild(button);
	}
// methods
	// alert: alert user to complete task
	// update priorities --> not sure how we're going to implement this yet
	// remove a task
	// remove all tasks marked as done (optional?)

	addTask() {
		// todo
	}

	appendTo(node) {
		node.appendChild(this.el);
	}

	// able to pass a task around --> not sure how to implment this yet
}