import "./app-info.css";

const AppInfo = ({ totalTasks, importantTask }) => {
    return (
        <div className="app-info">
            <h1>Задачи на 1 год</h1>
            <h2>Общее количество задач: {totalTasks}</h2>
            <h2>Приоритетные задачи: {importantTask}</h2>
        </div>
    )
}

export default AppInfo;