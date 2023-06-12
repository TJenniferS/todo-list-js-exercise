function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`• ${this.title}: → has${this.complete ? " " : " \x1b[33mnot\x1b[0m "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };

  // Creating a new object that inherits from the task object
  const newTaskObject = Object.create(task);

  return newTaskObject;
}

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const task3 = newTask("Walk the Dog", "Go for a 20-minute run");
const task4 = newTask("Buy Groceries", "Get milk, eggs, and bread");

task1.logState(); // Clean Cat Litter has not been completed

task1.markCompleted();
task4.markCompleted();

task1.logState(); // Clean Cat Litter has been completed
task2.logState(); // Do Laundry has not been completed
task3.logState(); // Walk the Dog has not been completed
task4.logState(); // Buy Groceries has been completed

