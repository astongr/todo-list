export const myProjects = [];
const DEFAULT_TITLE = "Inbox";

export class Project {
  constructor(title) {
    this.title = title;
    this.id = crypto.randomUUID();
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
  removeTodo(id) {
    const index = this.todos.findIndex(function (todo) {
      return todo.id === id;
    });
    if (index === -1) return;
    this.todos.splice(index, 1);
  }
}

function createDefault() {
  const defaultProject = new Project(DEFAULT_TITLE);
  myProjects.push(defaultProject);
}

export function createInbox() {
  if (myProjects.length === 0) {
    createDefault();
  }
}

//assuming a title will always be given
export function createProject(title) {
  const newProject = new Project(title);
  myProjects.push(newProject);
  return newProject;
}

export function findProject(id) {
  const targetedProject = myProjects.find((project) => project.id === id);
  return targetedProject;
}

export function addTodoToProject(id, todo) {
  const foundProject = findProject(id);
  if (!foundProject) return;
  foundProject.addTodo(todo);
}

export function deleteTodoFromProject(projectId, todoId) {
  const foundProject = findProject(projectId);
  if (!foundProject) return;
  foundProject.removeTodo(todoId);
}

export function getProjects() {
  return [...myProjects];
}

export function getTodos(id) {
  const foundProject = findProject(id);
  if (!foundProject) {
    return [];
  }
  return [...foundProject.todos];
}
