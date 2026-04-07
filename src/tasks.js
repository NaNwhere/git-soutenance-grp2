const tasks = [];

function addTask(title) {
  tasks.push({
    id: tasks.length + 1,
    title,
    done: false,
  });
}

function listTasks() {
  return tasks;
}

function completeTask(id) {
  const task = tasks.find((item) => item.id === id);
  if (!task) {
    throw new Error("Task not found");
  }
  task.done = true;
}

function removeTask(id) {
  const index = tasks.findIndex((item) => item.id === id);
  if (index === -1) {
    throw new Error("Task not found");
  }
  tasks.splice(index, 1);
}

module.exports = {
  addTask,
  listTasks,
  completeTask,
  removeTask,
};