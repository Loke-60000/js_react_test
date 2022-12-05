import React from "react"

let fruits = ['Apples', 'Coco NUTS', 'Banana', 'Pizza (yes its a fruit stop asking questions)']

function fruits_list() {
    return(
        <div>
            {fruits.map((fruit, index) => (
                <li>{fruit} </li>
            ))}
        </div>
    )
}

export default fruits_list