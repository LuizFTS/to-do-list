import styles from './ContentContainer.module.css'
import Clipboard from '../assets/Clipboard.svg'
import { TaskContainer } from './TaskContainer'
import { Tasks } from '../App'


interface ContentContainerProps {
    tasks: Tasks[],
    deleteTask: (id: string) => void,
    checkOrUncheckTask: (id: string) => void
}  


export function ContentContainer({tasks, deleteTask, checkOrUncheckTask }: ContentContainerProps) {


    return (
          

    <section className={styles.contentcontainer}>

        {tasks.length > 0 ? tasks.map(task => {
            return (
            <TaskContainer 
                key={task.id}
                id={task.id}
                name={task.name}
                status={task.status}
                onCheck={checkOrUncheckTask} 
                onDelete={deleteTask}               
            />
        )
        
        }) : (
        <div className={styles.empty_board}>
            <img src={Clipboard} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div> 
        )}
    </section>
        
        
    )
}