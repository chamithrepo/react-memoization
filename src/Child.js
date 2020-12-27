
import React, { memo } from 'react'

const Child = (props) => {

    const { count, onIncreaseCount } = props

    console.log("Child component is rendering!!!")

    return (
        <div>
            Child component {count}
            <button type="button" onClick={onIncreaseCount}>Child button</button>
        </div>
    )
}

// const areEqual = (pevState, nextState) => {
//     return pevState.count === nextState.count
// }

export default memo(Child)


