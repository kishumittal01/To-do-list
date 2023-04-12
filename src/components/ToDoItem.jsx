import React, { useState } from "react";

function ToDoItem(props) {
        const [isDone, setIsDone] = useState(
                false
        );

        function handleClick() {
                setIsDone((prevValue) => {
                        return !prevValue;
                });
        }

        return (
                <div onClick={handleClick}>
                        <li
                                style={{
                                        textDecoration: isDone
                                                ? "line-through"
                                                : "none"
                                }}
                        >
                                {props.text}
                                <button>
                                        <span>
                                                ✓
                                        </span>
                                </button>
                        </li>
                </div>
        );
}

export default ToDoItem;
