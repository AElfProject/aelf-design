import React from 'react'

import ToolTip from 'components/ToolTip'
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
      <ToolTip placement="topLeft" open={true} title={text}>
        <Button>TL</Button>
      </ToolTip>
      <ToolTip placement="top" title={text}>
        <Button>Top</Button>
      </ToolTip>
      <ToolTip placement="topRight" title={text}>
        <Button>TR</Button>
      </ToolTip>
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
      <ToolTip placement="leftTop" title={text}>
        <Button>LT</Button>
      </ToolTip>
      <ToolTip placement="left" title={text}>
        <Button>Left</Button>
      </ToolTip>
      <ToolTip placement="leftBottom" title={text}>
        <Button>LB</Button>
      </ToolTip>
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
      <ToolTip placement="rightTop" open={true} title={text}>
        <Button>RT</Button>
      </ToolTip>
      <ToolTip placement="right" title={text}>
        <Button>Right</Button>
      </ToolTip>
      <ToolTip placement="rightBottom" title={text}>
        <Button>RB</Button>
      </ToolTip>
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
      <ToolTip placement="bottomLeft" title={text}>
        <Button>BL</Button>
      </ToolTip>
      <ToolTip placement="bottom" title={text}>
        <Button>Bottom</Button>
      </ToolTip>
      <ToolTip placement="bottomRight" title={text}>
        <Button>BR</Button>
      </ToolTip>
    </div>
  </div>
)

export default App
