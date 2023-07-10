import { PlusCircle } from "lucide-react"
import { Header } from "./components/Header"

import styles from './App.module.css'
import { ContentContainer } from "./components/ContentContainer"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'

export interface Tasks {
  id: string,
  name: string
  status: boolean
}



export function App() {
  const [tasks, setTasks] = useState<Tasks[]>([
    { id: "e6c91ff3-435a-4ef8-9175-d0169dbb3a15", name: "Estudar validação de formulários", status: false },
    { id: "2bc460fa-0aef-4d21-bc55-8480eccb3c5b", name: "Criar dashboard dos resultados da empresa", status: true },
  ])


  const [newTask, setNewTask] = useState('')

  const [totalTasks, setTotalTasks] = useState<number>(tasks.length)
  const [totalConcludedTasks, setTotalConcludedTasks] = useState<number>(0)


  useEffect(() => {
    setTotalConcludedTasks(tasks.filter(item => item.status === true).length)
    setTotalTasks(tasks.length)
  }, [tasks])


  function handleAddNewTask(event: FormEvent) {
    event.preventDefault()
    if (newTask === "") {
      return;
    }

    const newId = uuidv4()
    const taskToAdd = {
      id: newId,
      name: newTask,
      status: false
    }

    setTasks(prevState => {
      return [...prevState, taskToAdd]
    })

    setNewTask('')
  }

  function handleChangeInputValue(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setNewTask(event.target.value)
  }

  function checkOrUncheckTask(id: string) {
    const filteredTask = tasks.map(task => {
      if (task.id === id) {
        task.status = !task.status
        return task
      }
      return task
    })

    setTasks(filteredTask)

  }

  function deleteTask(id: string) {
    const newList = tasks.filter(item => item.id !== id)

    setTasks(() => {
      return newList
    })
  }


  return (
    <div>
      <Header />
      <main className={styles.main}>

        {/* Input form to add a new task */}
        <form onSubmit={handleAddNewTask} className={styles.AddTaskForm}>
          <input required type="text" className={newTask ? 'active' : ''} placeholder="Adicione uma nova tarefa" value={newTask} onChange={handleChangeInputValue} />
          <button>
            Criar
            <PlusCircle height={16} />
          </button>
        </form>

        {/* Header of the content */}
        <div className={styles.main_header}>
          <p>
            Tarefas criadas
            <span>{totalTasks}</span>
          </p>
          <p>
            Concluídas
            <span>{totalConcludedTasks > 0 ? `${totalConcludedTasks} de ${totalTasks}` : 0}</span>
          </p>
        </div>

        <ContentContainer
          tasks={tasks}
          checkOrUncheckTask={checkOrUncheckTask}
          deleteTask={deleteTask}
        />


      </main>
    </div>
  )
}


