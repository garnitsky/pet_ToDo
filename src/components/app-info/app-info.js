import "./app-info.css";

const AppInfo = ({ totalTasks, importantTask, doneTask }) => {
    return (
        <div className="app-info">
            <img
                src="data:image/jpeg;base64,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"
                alt="Logo" />
            <h1>Задачи на 1 год</h1>
            <h2>Общее количество задач: {totalTasks}</h2>
            <h2>Приоритетные задачи: {importantTask}</h2>
            <h2>Выполненные задачи: {doneTask}</h2>

        </div>
    )
}

export default AppInfo;