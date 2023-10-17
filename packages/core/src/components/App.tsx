import Collapse from 'components/Collapse'
import Pagination from 'components/Pagination'
const randoms = [
  [1, 2],
  [3, 4, 5],
  [6, 7]
]

function App() {
  return <>
    <Collapse />
    <Pagination total={100}/>
  </>
}

export default App
