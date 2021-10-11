import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import TaskList from '../task-list/tasks-list';
import TasksAddForm from '../tasks-add-form/tasks-add-form';

import './app.css';

function App() {

    const state = {
        data: [
            { id: 1, task: 'Съездить на отдых', price: 1000, important: true, done: false },
            { id: 2, task: 'Купить авто', price: 10000, important: false, done: false },
            { id: 3, task: 'Сделать приложение', price: 0, important: false, done: false }
        ]
    }
    let totalTasks = state.data.length;
    let importantTask = state.data.filter(item => item.important).length;

    return (

        <div className="app" >
            <AppInfo totalTasks={totalTasks} importantTask={importantTask} />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <TaskList data={state.data} />
            <TasksAddForm />
        </div>
    );
}

export default App;
