export const PRIORITIES = Object.freeze({
  HIGH: "high",
  MEDIUM: "medium",
  LOW: "low",
});

export class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = crypto.randomUUID();
    this.completed = false;
  }

  toggleComplete() {
    this.completed = !this.completed;
  }

  changePriority(newPriority) {
    // one line guard for anything not in PRIORITIES
    if (!Object.values(PRIORITIES).includes(newPriority)) return;
    this.priority = newPriority;
  }

  editDetails(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }
}
