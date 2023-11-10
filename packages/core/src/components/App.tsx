import Collapse from 'components/Collapse'
import Pagination from 'components/Pagination'
import ToolLogo from '../assets/tool.svg?react'
import SearchLogo from '../assets/search.svg?react'

function App() {
  return (
    <>
      <Collapse />
      <Pagination total={100} />
      <ToolLogo
        data-twoToneColor={['red', 'green']}
        data-hoverTwoToneColor={['pink', 'blue']}
        width="200px"
        height="200px"
        className="test"
      ></ToolLogo>
      <SearchLogo
        color="black"
        data-hoverColor="green"
        width="200px"
        height="200px"
      ></SearchLogo>
    </>
  )
}

export default App
