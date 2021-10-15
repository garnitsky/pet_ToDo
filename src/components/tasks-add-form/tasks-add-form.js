import { Component } from 'react';
import './tasks-add-form.css';

class TasksAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            price: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value  //из инпутов отправляем в стейт новые данные
        })
    }

    onAddItem = (e) => {
        e.preventDefault();  //не даем браузеру перезагружаться при нажатии кнопки
        this.props.onAddTask(this.state.task, this.state.price) //обновляем из стейта список заданий 
        this.setState({
            task: '',     //обнуляем инпуты
            price: ''
        })
    }

    render() {
        const { task, price } = this.state
        return (
            <div className="app-add-form">
                <h3>Добавьте новое задание</h3>
                <form
                    onSubmit={this.onAddItem}  //вызываем функцию для формирования нового списка
                    className="add-form d-flex">
                    <input onChange={this.onValueChange} // из инпутов передаем данные в функцию onValueChange
                        value={task}
                        name='task'
                        type="text"
                        className="form-control new-post-label"
                        placeholder="задание" />
                    <input onChange={this.onValueChange}
                        value={price}
                        name='price'
                        type="number"
                        className="form-control new-post-label"
                        placeholder="стоимость в $?" />

                    <button type="submit"

                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default TasksAddForm;