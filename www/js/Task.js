class Task {
	constructor(parent) {
		// initialize variables
		this.taskList = parent;
		this.priority = 0;
		this.proto = `
			<li class="task">
				<input type="checkbox" />
				<input type="text" />
				<input type="number" placeholder="time" class="time-estimate" />
				<button type="button" class="delete">Delete</button>
			</li>
		`;

		// create element
		this.el = document.createElement('li');
		this.el.className = "task";
		this.checkbox = document.createElement('input');
		this.checkbox.setAttribute('type', 'checkbox');
		this.el.appendChild(this.checkbox);
		this.input = document.createElement('input');
		this.el.appendChild(this.input);
		this.timeEstimate = document.createElement('input');
		this.timeEstimate.className = 'time-estimate';
		this.timeEstimate.setAttribute('type', 'number');
		this.timeEstimate.setAttribute('placeholder', 'time');
		this.el.appendChild(this.timeEstimate);
		var button = document.createElement('button');
		button.className = "deletetask";
		button.setAttribute('type', 'button');
		button.innerHTML = "Delete";
		button.onclick = this.deleteTask.bind(this);
		this.el.appendChild(button);
	}
// data
	// isComplete: is the task finished
	// priority: how important this task is in relation to others
// methods
	// shouldAlert(): given a time frame, can we fit into it?
	// mark as done:
	// mark as undone:	

	deleteTask() {
		this.el.remove();
		this.taskList.deleteTask(this);
	}

	appendTo(node) {
		node.appendChild(this.el);
	}

	getDescription() {
		return this.input.value;
	}

	setDescription(val) {
		this.input.value = val;
	}

	getTimeEstimate() {
		return this.timeEstimate.value;
	}

	setTimeEstimate(val) {
		this.timeEstimate.value = val;
	}

	isComplete() {
		return this.checkbox.checked;
	}

	markAsComplete() {
		this.checkbox.checked = true;
	}

	markAsIncomplete() {
		this.checkbox.checked = false;
	}
}
