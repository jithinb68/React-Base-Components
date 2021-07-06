import BaseInput from './BaseInput'
import RadioOptions from './RadioOptions'
import Select from './Select'

function Questions(props) {
  return (
    <div>
      <h4>{props.question.text}</h4>
      {props.question.type === 'text' && <BaseInput value={props.answer} onChange={(value) => props.onChange({ value: value, id: props.question.id })}></BaseInput>}
      {props.question.type === 'select' && <Select value={props.answer} options={props.question.options} onChange={(value) => props.onChange({ value: value, id: props.question.id })}></Select>}
      {props.question.type === 'radio' && <RadioOptions value={props.answer} options={props.question.options} onChange={(value) => props.onChange({ value, id: props.question.id })}></RadioOptions>}
    </div>
  )
}

export default Questions