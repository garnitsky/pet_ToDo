import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import TaskList from '../task-list/tasks-list';
import TasksAddForm from '../tasks-add-form/tasks-add-form';
import { Component } from 'react';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, task: 'Съездить на отдых', price: 1000, important: true, done: false },
                { id: 2, task: 'Купить авто', price: 10000, important: false, done: false },
                { id: 3, task: 'Сделать приложение', price: 0, important: false, done: true }
            ],
            term: '',
            filter: 'all'
        }
    };

    // удаление задания из списка
    onDeleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    };

    // добавление нового задания

    idmax = 4;
    onAddTask = (task, price) => {
        const newItem = {        //создаем новый элемент списка заданий
            id: this.idmax++,
            task,
            price,
            important: false,
            done: false
        };

        this.setState(({ data }) => {
            return {
                data: [...data, newItem]   // добавляем новый элемент в конец списка заданий
            }
        })
    };

    // переключатель важно-неважно
    onToggleProp = (id, prop) => { //передаем айди и элемент по дата-атрибуту из списка
        this.setState(({ data }) => ({
            data: data.map(item => { //мапим дату , если айди из даты совпал с айди по клику то переключаем 
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    };
    //поиск задач
    searchTask = (items, term) => {
        if (term.length === 0) {
            return items
        }
        else {
            return (items.filter((item) => {
                return item.task.indexOf(term) > -1
            }))
        }
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    };

    onFilterSelect = (filter) => {
        this.setState({ filter });
    };

    filterPost = (items, filter) => {
        switch (filter) {
            case 'important':
                return items.filter(item => item.important);
            case 'moreThen1000':
                return items.filter(item => item.price > 1000);
            default:
                return items;
        }
    }

    render() {
        const { data, term, filter } = this.state;
        const totalTasks = this.state.data.length;
        const importantTask = this.state.data.filter(item => item.important).length;
        const doneTask = this.state.data.filter(item => item.done).length;
        const visibleData = this.filterPost(this.searchTask(data, term), filter);
        return (

            <div className="app" >
                <AppInfo totalTasks={totalTasks} importantTask={importantTask} doneTask={doneTask} />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                </div>
                <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />

                <TaskList data={visibleData}
                    onDeleteItem={this.onDeleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <TasksAddForm onAddTask={this.onAddTask} />
            </div>
        );
    };
}

export default App;
