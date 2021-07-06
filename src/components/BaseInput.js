// import { useEffect } from 'react';

function BaseInput(props) {

  return (
    <div>
      <input value={props.value} type="text" onChange={(e) => props.onChange(e.target.value)}></input>
    </div>

  )
}

export default BaseInput