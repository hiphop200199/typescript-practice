<<<<<<< HEAD
//要建立新的snowpack專案，要打npx create-snowpack-app . --template @snowpack/app-template-blank-typescript --force (force不一定)
//typescript基本上就是比較嚴的javascript，都要檢查資料型態
import { v4 as uuidV4 } from "uuid"
//像強型別語言的自定義資料型態
type Task = {
  id: string
  title: string
  completed: boolean
  createdAt: Date
}

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("new-task-form") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("#new-task-title")
const tasks: Task[] = loadTasks()
tasks.forEach(addListItem)

=======
//要建立新的snowpack專案，要打以下的指令npx create-snowpack-app . --template @snowpack/app-template-blank-typescript    。然後+--force
//hover到變數時，會呈現該變數的資料型態
//基本上，typescript就是比較嚴格的javascript...一定要寫資料型態(例如:string)，來避免一些無法挽回的錯誤
import { v4 as uuidV4 } from "uuid"

type Task = {
  id: string
  title: string
  completed: boolean
  createdAt: Date
}

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("new-task-form") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("#new-task-title")
const tasks: Task[] = loadTasks()
tasks.forEach(addListItem)

>>>>>>> e1896c0 (跟著完成練習，並打上註解)
form?.addEventListener("submit", e => {
  e.preventDefault()

  if (input?.value == "" || input?.value == null) return

  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  }
  tasks.push(newTask)
  saveTasks()

  addListItem(newTask)
  input.value = ""
})

function addListItem(task: Task) {
  const item = document.createElement("li")
  const label = document.createElement("label")
  const checkbox = document.createElement("input")
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked
    saveTasks()
  })
  checkbox.type = "checkbox"
  checkbox.checked = task.completed
  label.append(checkbox, task.title)
  item.append(label)
  list?.append(item)
}

function saveTasks() {
  localStorage.setItem("TASKS", JSON.stringify(tasks))
}

function loadTasks(): Task[] {
  const taskJSON = localStorage.getItem("TASKS")
  if (taskJSON == null) return []
  return JSON.parse(taskJSON)
<<<<<<< HEAD
}
=======
}
>>>>>>> e1896c0 (跟著完成練習，並打上註解)
