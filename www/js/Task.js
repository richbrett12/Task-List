class Task {
	constructor(parent) {
		// initialize variables
		this.taskList = parent;
		// this.priority = 0;
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
		this.el.setAttribute('draggable', 'true');
		// you need to add an event handler for the dragstart event
		// that handler should do . . . what?
		this.el.ondragstart = this.handleDragStart.bind(this);
		this.el.className = "task";
		this.el.style.order = 0;
		this.checkbox = document.createElement('input');
		this.checkbox.setAttribute('type', 'checkbox');
		this.checkbox.onclick = this.toggleComplete1.bind(this);
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
		button.innerHTML = "X";
		button.onclick = this.deleteTask.bind(this);
		this.el.appendChild(button);
	}

	deleteTask() {
		this.el.remove();
		this.taskList.removeTask(this);
	}

	appendTo(node) {
		node.appendChild(this.el);
	}

	moveTo(tasklist, index) {
		this.taskList.removeTask(this);
		tasklist.addTask(null, this, index);
	}

	shouldAlert(time) {
		if (this.getTimeEstimate() <= time) {
			return true;
		} else {
			return false;
		}
	}

	toggleComplete1() {
		if (this.checkbox.checked === true) {
			this.markAsComplete();
		} else {
			this.markAsIncomplete();
		}
	}


	/* getters and setters */
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
		// find elements you want to change classes
		// change them classes, boi
		this.input.style.color = "gray";
		this.input.style.textdecoration = "line-through";
		this.checkbox.checked = true;
	}

	markAsIncomplete() {
		// find elements you want to change classes
		// change them classes, boi
		this.input.style.color = "black";
		this.checkbox.checked = false;
	}

	getPriority() {
		return this.el.style.order;
	}

	setPriority(val) {
		this.el.style.order = val;
	}

	getParent() {
		return this.taskList;
	}

	setParent(parent) {
		this.taskList = parent;
	}

	handleDragStart(event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		}
		event.dataTransfer.setData('text/html', null);
		// maybe add some cool CSS effects
		draggedTask = this;
	}

}

