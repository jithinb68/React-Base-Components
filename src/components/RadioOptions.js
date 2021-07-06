function RadioOptions(props) {
  return (
    <div>
      {props.options.map((elem) => {
        return (
          [
            <div key={elem}>
              <input type="radio" name="colors" value={elem} checked={props.value === elem} onChange={(e) => props.onChange(e.target.value)} />
              <label>{elem}</label>
            </div>
          ]
        )
      })}
    </div>
  )
}

export default RadioOptions