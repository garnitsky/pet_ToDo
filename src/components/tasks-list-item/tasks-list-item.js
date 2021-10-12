import './tasks-list-item.css';

const TasksListItem = (props) => {
    const { done, task, price, important, onDeleteItem, onToggleProp } = props;
    let classNameImportant = "list-group-item d-flex justify-content-between";
    if (important) {
        classNameImportant += ' increase'
    }

    if (done) {
        classNameImportant += " like"
    }

    return (
        <li className={classNameImportant}>
            <span className="list-group-item-label">{task}</span>
            <input type="text" className="list-group-item-input" defaultValue={price + '$'} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    onClick={onToggleProp}
                    data-toggle="important"   //передаем дата-аттрибут элемента
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    onClick={onDeleteItem}
                    className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )

}

export default TasksListItem;