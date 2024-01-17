import { RadioChangeEvent } from 'antd'
import Radio from 'components/Radio'
import { useState } from 'react'
export default function RadioExample() {
  const [value, setValue] = useState(1)
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }

  return (
    <div>
      <div>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
      </div>
      <div>
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </Radio.Group>
      </div>
    </div>
  )
}
