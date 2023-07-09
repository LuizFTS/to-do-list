import { Check, Trash2 } from 'lucide-react'
import styles from './TaskContainer.module.css'
import { SyntheticEvent } from 'react'

interface TaskContainerProps {
    name: string,
    status: boolean,
    id: string,
    onCheck: (id: string) => void
    onDelete: (id: string) => void
}


export function TaskContainer({name, status, id, onCheck, onDelete}: TaskContainerProps) {


    function handleCheckTask(){
        onCheck(id)
    }

    function handleDeleteTask(event: SyntheticEvent){
        event.preventDefault()
        onDelete(id)
    }

    const isConcluded = !status ? "" : styles.concluded

    return (
        <div className={styles.container}>
            <label onClick={handleCheckTask}>
                <input type="checkbox" checked={status} onChange={handleCheckTask}/>
                <b>
                    <Check height={12}/>
                </b>

            </label>
            <p className={isConcluded}>
            {name}
            </p>
            <span onClick={handleDeleteTask}>
                <Trash2 height={18} />
            </span>
            
        </div>
    )
}