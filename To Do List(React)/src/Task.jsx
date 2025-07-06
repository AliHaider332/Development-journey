import css from "./Task.module.css"

function Task({ TotalTask }) {
    return (
        <>
            {
                TotalTask.map((item) => {
                    let description = item.task;
                    let date = item.date;

                    function show() {
                        alert(`${item.task} I am Clicked`);
                    }

                    return (
                        <div className={css.element} key={item.id}>
                            <div className="row">
                                <div className="col-sm-6">{description}</div>
                                <div className="col-sm-4">{date}</div>
                                <div className="col-sm-2">
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={show}
                                    >
                                        DELETE
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Task;
