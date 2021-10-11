import TasksListItem from "../tasks-list-item/tasks-list-item";

import './tasks-list.css';

const TasksList = ({ data }) => {

    const elements = data.map(item => {

        return (
            <TasksListItem key={item.id}{...item} />
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default TasksList;