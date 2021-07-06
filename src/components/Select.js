function Select(props) {
  return (
    <select value={props.value} onChange={(e) => props.onChange(e.target.value)}>
      {props.options.map((option) => <option key={option}>{option}</option>)}
    </select>
  )
}

export default Select