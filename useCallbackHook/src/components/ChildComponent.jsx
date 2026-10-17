import React from 'react'

const ChildComponent = React.memo(
     (props) => {
    console.log("child component go re render");
  return (
    <div>
      <button onClick={props.handleclick}>
        {props.buttonName}
      </button>
    </div>
  )
}
);

export default ChildComponent
