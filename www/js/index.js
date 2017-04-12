/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        // console.log('Received Event: ' + id);
    }
};

app.initialize();


var taskListContainer = document.getElementById('tasklist--container');
var taskLists = [];
var draggedTask = null;
var freeTimes = [
    new DateRange(3, "20:30", "21:20"),
];

setInterval(findAndAlertTask, 60000);

function findAndAlertTask() {
    console.log("running!");
    if (!isInFreeTime()) return;
    var freeTime    = findFreeTime();
    var timeLeft    = calcTimeLeft(freeTime);
    var taskToAlert = getTaskToAlert(timeLeft);
    if (taskToAlert !== null) {
        alertTask(taskToAlert);
    }
}

function isInFreeTime() {
    return findFreeTime() !== undefined;
}

function findFreeTime() {
    var now = new Date();
    return freeTimes.find(function(time) {
        return time.contains(now);
    });
}

function getTaskToAlert(timeLeft) {
    return taskLists.reduce(function(taskToAlert, taskList) {
        var newTask = taskList.getTaskToAlert(timeLeft);
        if (taskToAlert === null) {
            return newTask;
        } else if (newTask === null) {
            return taskToAlert;
        } else if (newTask.getPriority() > taskToAlert.getPriority()) {
            return newTask;
        } else {
            return taskToAlert;
        }
    }, null);
}

function calcTimeLeft(freeTime) {
    var future    = new Date();
    var now       = new Date();
    var splitTime = freeTime.end.split(":");
    future.setHours(splitTime[0]);
    future.setMinutes(splitTime[1]);
    return (future - now) / 60000;
}

function alertTask(task) {
    alert("You lazy bum, you should " + task.getDescription());
}

document.getElementById('add-tasklist-btn').onclick = function() {
    var taskList = new TaskList();
    taskList.appendTo(taskListContainer);
    taskLists.push(taskList);
}

function runTests() {
    var tester = new TaskListTestSuite();
    tester.run();
    var test = new TaskTest();
    test.run();
}

 function runTest(className) {
    var tester = new window[className]();
    tester.run();   
 }   