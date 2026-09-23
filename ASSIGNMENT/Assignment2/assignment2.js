const EventEmitter = require("events");

const studentActivity = new EventEmitter();

studentActivity.on("login", () => {
    console.log("Student logged in successfully");
});

studentActivity.on("assignment", () => {
    console.log("Assignment Submitted");
});

studentActivity.on("logout", () => {
    console.log("Student logged out");
});

studentActivity.on("exit", () => {
    console.log("Exiting Application");
});

studentActivity.emit("login");
studentActivity.emit("assignment");
studentActivity.emit("logout");
studentActivity.emit("exit");