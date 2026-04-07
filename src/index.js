const {
  addTask,
  listTasks,
  completeTask,
  removeTask,
} = require("./tasks");

addTask("Prepare Git support");
addTask("Create pull requests");
completeTask(1);
removeTask(2);

console.log(listTasks());