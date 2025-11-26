import { useState } from 'react'

import './App.css'

const user = {
  name: '张三',
  age: 20,
  gender: '男',
  imageUrl: 'https://q2.itc.cn/q_70/images03/20241013/c9adf9a1e1d64f3ab3ffd9b3686dd88b.jpeg',
  imageSize: 90,
}

const products = [
  { title: '卷心菜', isFruit: false, id: 1 },
  { title: '大蒜', isFruit: false, id: 2 },
  { title: '苹果', isFruit: true, id: 3 },
]
const listItems = products.map(product =>
  <li
    key={product.id}
    style={{
      color: product.isFruit ? 'red' : 'green',
    }}
  >
    {product.title}
  </li>
)

function MyButton({ count, handleClick }) {
  return (
    <button onClick={handleClick}>点击了 {count} 次</button>
  )
}

function App() {
  const [form, setForm] = useState({ name: 'jack' })
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1)
  }
  function handleChange() {
    setForm({
      ...form,
      name: 'john'
    })
  }
  return (
    <>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <h2>{user.gender}</h2>
      <img className='avatar'
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }} />
      {/* 在上面示例中，style={{}} 并不是一个特殊的语法，而是 
      style={ } JSX 大括号内的一个普通 {} 对象。
      当你的样式依赖于 JavaScript 变量时，你可以使用 style 属性。 */}
      <MyButton count={count} handleClick={handleClick} />
      <MyButton count={count} handleClick={handleClick} />
      <MyButton count={form.name} handleClick={handleChange} />
      <ul>{listItems}</ul>
    </>
  )
}



export default App
