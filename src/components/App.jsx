import React, { useState } from "react";

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
                                                        <li>
                                                                {
                                                                        todoItem
                                                                }
                                                        </li>
                                                )
                                        )}
                                </ul>
                        </div>
                </div>
        );
}

export default App;
