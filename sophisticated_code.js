/* sophisticated_code.js */

// This code is a complex implementation of a task management system

// Class for creating tasks
class Task {
  constructor(title, description, priority) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.completed = false;
  }

  complete() {
    this.completed = true;
  }
}

// Function to filter tasks based on priority
function filterTasksByPriority(tasks, priority) {
  return tasks.filter(task => task.priority === priority);
}

// Function to calculate due date based on priority
function calculateDueDate(priority) {
  let dueDate;
  if (priority === 'High') {
    dueDate = new Date();
  } else if (priority === 'Medium') {
    dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 7);
  } else {
    dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 14);
  }
  return dueDate;
}

// Generate sample tasks
let tasks = [
  new Task('Task 1', 'Description for Task 1', 'High'),
  new Task('Task 2', 'Description for Task 2', 'Medium'),
  new Task('Task 3', 'Description for Task 3', 'Low'),
  new Task('Task 4', 'Description for Task 4', 'High'),
  new Task('Task 5', 'Description for Task 5', 'Low')
];

// Complete Task 1
tasks[0].complete();

// Filter tasks by priority
let highPriorityTasks = filterTasksByPriority(tasks, 'High');
let mediumPriorityTasks = filterTasksByPriority(tasks, 'Medium');
let lowPriorityTasks = filterTasksByPriority(tasks, 'Low');

// Print filtered tasks
console.log('High Priority Tasks:');
highPriorityTasks.forEach(task => console.log(task.title));

console.log('Medium Priority Tasks:');
mediumPriorityTasks.forEach(task => console.log(task.title));

console.log('Low Priority Tasks:');
lowPriorityTasks.forEach(task => console.log(task.title));

// Calculate due dates for tasks
highPriorityTasks.forEach(task => {
  task.dueDate = calculateDueDate(task.priority);
});

mediumPriorityTasks.forEach(task => {
  task.dueDate = calculateDueDate(task.priority);
});

lowPriorityTasks.forEach(task => {
  task.dueDate = calculateDueDate(task.priority);
});

// Print tasks with due dates
console.log('High Priority Tasks with Due Dates:');
highPriorityTasks.forEach(task => console.log(task.title + ' - Due: ' + task.dueDate.toDateString()));

console.log('Medium Priority Tasks with Due Dates:');
mediumPriorityTasks.forEach(task => console.log(task.title + ' - Due: ' + task.dueDate.toDateString()));

console.log('Low Priority Tasks with Due Dates:');
lowPriorityTasks.forEach(task => console.log(task.title + ' - Due: ' + task.dueDate.toDateString()));

// ... continue with more code
// ... additional functionality for managing tasks