import TasksListItem from "../tasks-list-item/tasks-list-item";

import './tasks-list.css';

const TasksList = ({ data, onDeleteItem, onAddTask }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            <TasksListItem onDeleteItem={() => onDeleteItem(id)} key={id}{...itemProps} onAddTask={onAddTask} />
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default TasksList;