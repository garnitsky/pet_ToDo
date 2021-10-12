import TasksListItem from "../tasks-list-item/tasks-list-item";

import './tasks-list.css';

const TasksList = ({ data, onDeleteItem, onAddTask, onToggleProp }) => {

    const elements = data.map(item => {  // мапим массив объектов data и возвращаем каждый элемент массива
        const { id, ...itemProps } = item; //вытягиваем из item id
        return (
            <TasksListItem
                onDeleteItem={() => onDeleteItem(id)}
                key={id}{...itemProps}
                onAddTask={onAddTask}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} />  //вызываем функцию переключения
        )
    })
    return (
        <ul className="app-list list-group">
            {elements /* рисуем каждый элеиент массива*/}
        </ul>
    )
}

export default TasksList;