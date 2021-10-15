import "./app-filter.css";

const AppFilter = (props) => {

    const buttonsData = [
        { name: 'all', label: 'Все задачи' },
        { name: 'important', label: 'важные' },
        { name: 'moreThen1000', label: 'Стоимость выше 1000$' }
    ]

    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? "btn btn-active" : "btn btn-not-active";
        return (
            <button type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;