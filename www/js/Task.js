class Task {
	constructor() {
		// initialize variables
		this.time = 0;
		this.isComplete = false;
		this.priority = 0;
		this.proto = `
			<li class="task">
				<input type="text" />
			</li>
		`
		// create element
		this.el = document.createElement('li');
		this.el.className = "task";
		this.input = document.createElement('input');
		this.el.appendChild(this.input);
	}
// data
	// description: description of task
	// time estimate: how long task will take to do
	// isComplete: is the task finished
	// priority: how important this task is in relation to others
	// list item: the actual DOM element
// methods
	// shouldAlert(): given a time frame, can we fit into it?
	// edit description:
	// edit time estimate:
	// mark as done:
	// mark as undone:	
	appendTo(node) {
		node.appendChild(this.el);
	}

	getDescription() {
		return this.input.value;
	}

	setDescription(val) {
		this.input.value = val;
	}
}
