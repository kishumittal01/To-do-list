import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
        const [
                inputTest,
                setInputTest
        ] = useState("");
        const [item, setItem] = useState([]);

        function handleChange(event) {
                const newValue =
                        event.target.value;
                setInputTest(newValue);
        }

        function addItem() {
                setItem((prevItem) => {
                        return [
                                ...prevItem,
                                inputTest
                        ];
                });
                setInputTest("");
        }

        return (
                <div className="container">
                        <div className="heading">
                                <h1>
                                        To-Do List
                                </h1>
                        </div>
                        <div className="form">
                                <input
                                        type="text"
                                        onChange={
                                                handleChange
                                        }
                                        value={
                                                inputTest
                                        }
                                        onKeyPress={(
                                                e
                                        ) => {
                                                if (
                                                        e.key ===
                                                        "Enter"
                                                ) {
                                                        addItem();
                                                }
                                        }}
                                />
                                <button
                                        onClick={
                                                addItem
                                        }
                                >
                                        <span>
                                                Add
                                        </span>
                                </button>
                        </div>
                        <div>
                                <ul>
                                        {item.map(
                                                (
                                                        todoItem
                                                ) => (
                                                        <ToDoItem
                                                                text={
                                                                        todoItem
                                                                }
                                                        />
                                                )
                                        )}
                                </ul>
                        </div>
                </div>
        );
}

export default App;
