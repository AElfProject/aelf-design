import React from 'react'

import Tooltip from 'components/Tooltip'
import Button from 'components/Button'

const text = (
  <span>
    Content Text Content TextContent Text Content TextContent Text Content
    TextContent Text Content Text
  </span>
)

const buttonWidth = 100

const App: React.FC = () => (
  <div
    className="demo"
    style={{
      paddingBottom: 200
    }}
  >
    <div
      style={{
        width: buttonWidth,
        marginInlineStart: buttonWidth,
        display: 'flex',
        gap: 10,
        whiteSpace: 'nowrap'
      }}
    >
      <Tooltip placement="topLeft" open={true} title={text}>
        <Button>TL</Button>
      </Tooltip>
      <Tooltip placement="top" title={text}>
        <Button>Top</Button>
      </Tooltip>
      <Tooltip placement="topRight" title={text}>
        <Button>TR</Button>
      </Tooltip>
    </div>
    <div
      style={{
        width: buttonWidth,
        display: 'flex',
        gap: 10,
        flexDirection: 'column',
        float: 'inline-start'
      }}
    >
      <Tooltip placement="leftTop" title={text}>
        <Button>LT</Button>
      </Tooltip>
      <Tooltip placement="left" title={text}>
        <Button>Left</Button>
      </Tooltip>
      <Tooltip placement="leftBottom" title={text}>
        <Button>LB</Button>
      </Tooltip>
    </div>
    <div
      style={{
        width: buttonWidth,
        display: 'flex',
        gap: 10,
        flexDirection: 'column',
        marginInlineStart: buttonWidth * 4 + 24
      }}
    >
      <Tooltip placement="rightTop" open={true} title={text}>
        <Button>RT</Button>
      </Tooltip>
      <Tooltip placement="right" title={text}>
        <Button>Right</Button>
      </Tooltip>
      <Tooltip placement="rightBottom" title={text}>
        <Button>RB</Button>
      </Tooltip>
    </div>
    <div
      style={{
        marginInlineStart: buttonWidth,
        clear: 'both',
        width: buttonWidth,
        display: 'flex',
        gap: 10,
        whiteSpace: 'nowrap'
      }}
    >
      <Tooltip placement="bottomLeft" title={text}>
        <Button>BL</Button>
      </Tooltip>
      <Tooltip placement="bottom" title={text}>
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip placement="bottomRight" title={text}>
        <Button>BR</Button>
      </Tooltip>
    </div>
  </div>
)

export default App
