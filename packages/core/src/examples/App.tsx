import Pagination from 'components/Pagination'
import { SearchOutlined, AndroidOutlined } from '@ant-design/icons'
import Button from 'components/Button'
import Input from 'components/Input'
import Dropdown from 'components/Dropdown'
import Typography, { FontWeightType } from 'components/Typography'
import ConfigProvider from '../components/provider'
import { ThemeAppearance } from 'antd-style'
import { Segmented } from 'antd'
import { useState } from 'react'
import Collapse, { ICollapseProps } from 'components/Collapse'
import Search from 'components/Search'
import Tabs from 'components/Tabs'
import DownArrow from 'assets/downArrow.svg?react'
import TableExample from 'examples/tableExample'
import ModalExample from 'examples/modalExample'
import ToolTipExample from 'examples/tooltipExample'

const items = [
  {
    key: '1',
    label: <div className="w-[130px]">1st menu item</div>,
    value: '1st menu item'
  },
  {
    key: '2',
    label: <div className="w-[130px]">2nd menu item</div>,
    value: '2nd menu item'
  },
  {
    key: '3',
    label: <div className="w-[130px]">3rd menu item</div>,
    value: '3rd menu item'
  }
]

const tabItems = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
    icon: <SearchOutlined />
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
    icon: <DownArrow />
  },
  {
    key: '4',
    label: 'Tabxxxxxx 3',
    children: 'Content of Tab Pane 3',
    icon: <SearchOutlined />
  }
]
const App = () => {
  const [appearance, setAppearance] = useState<ThemeAppearance>('light')
  const collapsetText = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`
  const collapseItems: ICollapseProps['items'] = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: <div>{collapsetText}</div>
    },
    {
      key: '2',
      label: 'This is panel header 2',
      children: <div>{collapsetText}</div>
    },
    {
      key: '3',
      label: 'This is panel header 3',
      children: <div>{collapsetText}</div>
    }
  ]

  return (
    <div
      style={{ backgroundColor: appearance === 'light' ? 'white' : '#1a1a1a' }}
    >
      <Segmented
        options={[
          { label: 'light', value: 'light' },
          { label: 'dark', value: 'dark' }
        ]}
        value={appearance}
        onChange={(e) => setAppearance(e as ThemeAppearance)}
      />
      <ConfigProvider
        appearance={appearance}
        // theme={{ token: { colorPrimary: '#9ddd13' } }}
      >
        <div>
          <div className="mb-2 flex items-center gap-2">
            <Button size="mini">mini</Button>
            <Button size="small">small</Button>
            <Button size="medium">medium</Button>
            <Button
              onClick={() => {
                console.log(2)
              }}
            >
              default
            </Button>
            <Button
              size="ultra"
              millisecondOfThrottle={1000}
              onClick={() => {
                console.log(1)
              }}
            >
              ultra
            </Button>
          </div>

          <div className="mb-2 flex items-center gap-2">
            <Button size="mini" ghost type="primary">
              mini
            </Button>
            <Button size="small" ghost type="primary">
              small
            </Button>
            <Button size="medium" ghost type="primary">
              medium
            </Button>
            <Button ghost type="primary">
              default
            </Button>
            <Button size="ultra" ghost type="primary">
              ultra
            </Button>
          </div>

          <div className="mb-2 flex items-center gap-2">
            <Button type="primary" size="mini">
              mini
            </Button>
            <Button type="primary" size="small">
              small
            </Button>
            <Button type="primary" size="medium">
              medium
            </Button>
            <Button type="primary">default</Button>
            <Button type="primary" size="ultra">
              ultra
            </Button>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <Button type="dashed" size="mini">
              mini
            </Button>
            <Button type="dashed" size="small">
              small
            </Button>
            <Button type="dashed" size="medium">
              medium
            </Button>
            <Button type="dashed">default</Button>
            <Button type="dashed" size="ultra">
              ultra
            </Button>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <Button danger type="primary" size="mini">
              mini
            </Button>
            <Button danger type="primary" size="small">
              small
            </Button>
            <Button danger type="primary" size="medium">
              medium
            </Button>
            <Button danger type="primary">
              default
            </Button>
            <Button danger type="primary" size="ultra">
              ultra
            </Button>
          </div>

          <div className="mb-2 flex items-center gap-2">
            <Button disabled type="primary" size="mini">
              mini
            </Button>
            <Button disabled type="primary" size="small">
              small
            </Button>
            <Button disabled type="primary" size="medium">
              medium
            </Button>
            <Button disabled type="primary">
              default
            </Button>
            <Button disabled type="primary" size="ultra">
              ultra
            </Button>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <Button type="text" size="mini">
              mini
            </Button>
            <Button type="text" size="small">
              small
            </Button>
            <Button type="text" size="medium">
              medium
            </Button>
            <Button type="text">default</Button>
            <Button type="text" size="ultra">
              ultra
            </Button>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <Button type="link" size="mini">
              mini
            </Button>
            <Button type="link" size="small">
              small
            </Button>
            <Button type="link" size="medium">
              medium
            </Button>
            <Button type="link">default</Button>
            <Button type="link" size="ultra">
              ultra
            </Button>
          </div>

          <div className="mb-2 flex items-center gap-2">
            <Button
              size="mini"
              shape="circle"
              type="primary"
              icon={<SearchOutlined />}
            />
            <Button
              size="small"
              shape="circle"
              type="dashed"
              icon={<SearchOutlined />}
            />
            <Button
              size="medium"
              shape="circle"
              type="primary"
              ghost
              icon={<SearchOutlined />}
            />
            <Button
              size="large"
              shape="circle"
              danger
              icon={<SearchOutlined />}
            />
            <Button size="ultra" shape="circle" icon={<SearchOutlined />} />

            <Button
              type="primary"
              size="mini"
              icon={<SearchOutlined />}
            ></Button>
            <Button
              type="dashed"
              size="small"
              icon={<SearchOutlined />}
            ></Button>
            <Button
              type="primary"
              ghost
              size="medium"
              icon={<SearchOutlined />}
            ></Button>
            <Button size="large" danger icon={<SearchOutlined />}></Button>
            <Button size="ultra" icon={<SearchOutlined />}></Button>
          </div>

          <div className="mb-2 flex items-center gap-2">
            <Button type="primary" size="mini" icon={<SearchOutlined />}>
              mini
            </Button>
            <Button type="primary" size="small" icon={<SearchOutlined />}>
              small
            </Button>
            <Button type="primary" size="medium" icon={<SearchOutlined />}>
              medium
            </Button>
            <Button type="primary" size="large" icon={<SearchOutlined />}>
              default
            </Button>
            <Button type="primary" size="ultra" icon={<SearchOutlined />}>
              ultra
            </Button>
          </div>

          <div className="mb-2 flex items-center gap-2">
            <Button type="primary" size="mini" loading>
              mini
            </Button>
            <Button type="primary" size="small" loading>
              small
            </Button>
            <Button type="primary" size="medium" loading>
              medium
            </Button>
            <Button type="primary" size="large" loading>
              default
            </Button>
            <Button type="primary" size="ultra" loading>
              ultra
            </Button>
          </div>
        </div>

        <div className="mt-5">
          <div className="mb-4">
            <Input
              className="w-[400px]"
              placeholder="default"
              prefix={<AndroidOutlined />}
              onClear={(e) => {
                console.log(e)
              }}
              // classNames={{ input: 'w-[400px]' }}
              // addonBefore="http://"
              // addonAfter=".com"
            />
          </div>
          <div className="mb-4">
            <Input
              status="error"
              size="small"
              className="w-[400px]"
              placeholder="small"
            />
          </div>
          <div className="mb-4">
            <Input
              className="w-[400px]"
              placeholder="placeholder"
              prefix={
                <Dropdown
                  menu={{ items, selectable: true, defaultSelectedKeys: ['1'] }}
                  trigger={['click']}
                  offsetX={-12}
                  offsetY={10}
                >
                  <div
                    style={{
                      // borderRight: '1px solid #F0F0F0',
                      paddingRight: '12px'
                    }}
                  >
                    <span style={{ marginRight: '8px' }}>+86</span>
                    <DownArrow />
                  </div>
                </Dropdown>
              }
            />
          </div>
          <div className="mb-4">
            <Input
              className="w-[400px]"
              placeholder="placeholder"
              addonBefore="ELF"
              addonAfter="AELF"
            />
          </div>
          <div className="mb-4">
            <Input
              size="small"
              className="w-[400px]"
              placeholder="placeholder"
              addonBefore="ELF"
              addonAfter="AELF"
            />
          </div>
          <div className="mb-4">
            <Input.Password size="small" className="w-[400px]"></Input.Password>
          </div>
          <div className="mb-4">
            <Input.Password className="w-[400px]"></Input.Password>
          </div>
          <div className="mb-4">
            <Input.TextArea className="w-[400px]"></Input.TextArea>
          </div>
          <div className="mb-4">
            <Collapse
              className="w-[400px]"
              items={collapseItems}
              defaultActiveKey={['1']}
            />
          </div>
        </div>

        <div className="mt-5">
          <Pagination total={100}></Pagination>
        </div>

        <div className="mt-5 flex">
          <div className="flex-1">
            <Dropdown
              size="small"
              menu={{ items, selectable: true, defaultSelectedKeys: ['1'] }}
              open={true}
            >
              <Typography.Text>small</Typography.Text>
            </Dropdown>
          </div>
          <div className="flex-1">
            <Dropdown
              size="medium"
              menu={{ items, selectable: true, defaultSelectedKeys: ['1'] }}
              open={true}
            >
              <Typography.Text>medium</Typography.Text>
            </Dropdown>
          </div>
          <div className="flex-1">
            <Dropdown
              size="default"
              menu={{ items, selectable: true, defaultSelectedKeys: ['1'] }}
              open={true}
            >
              <Typography.Text>default</Typography.Text>
            </Dropdown>
          </div>
          <div className="flex-1">
            <Dropdown
              size="large"
              menu={{ items, selectable: true, defaultSelectedKeys: ['1'] }}
              open={true}
            >
              <Typography.Text>large</Typography.Text>
            </Dropdown>
          </div>
        </div>

        <div className="mt-[180px]">
          <Typography.Title fontWeight={FontWeightType.Bold} level={1}>
            Title1 test TitlefsdfsdfsdfADD
          </Typography.Title>
          <Typography.Title fontWeight={FontWeightType.Bold} level={2}>
            Title2 test TitlefsdfsdfsdfADD
          </Typography.Title>
          <Typography.Title fontWeight={FontWeightType.Bold} level={3}>
            Title3 test TitlefsdfsdfsdfADD
          </Typography.Title>
          <Typography.Title fontWeight={FontWeightType.Bold} level={4}>
            Title4 test TitlefsdfsdfsdfADD
          </Typography.Title>
          <Typography.Title fontWeight={FontWeightType.Bold} level={5}>
            Title5 test TitlefsdfsdfsdfADD
          </Typography.Title>

          <Typography.Title fontWeight={FontWeightType.Bold} level={6}>
            Title6 test TitlefsdfsdfsdfADD
          </Typography.Title>

          <Typography.Title fontWeight={FontWeightType.Bold} level={7}>
            Title7 test TitlefsdfsdfsdfADD
          </Typography.Title>
          <Typography.Text
            size="small"
            disabled
            fontWeight={FontWeightType.Regular}
          >
            text test titlefsdfsdfsdfADD
          </Typography.Text>
        </div>

        <div className="mt-5">
          <TableExample />
        </div>

        <div className="mt-5">
          <ToolTipExample></ToolTipExample>
        </div>
        {/* <Collapse /> */}

        <div className="mt-5">
          <Search
            className="w-[400px]"
            withSearchIcon="after"
            placeholder="search something..."
          />
        </div>

        <div className="mt-5">
          <Search
            className="w-[400px]"
            withSearchIcon="inline"
            onSearchBtnClick={(e) => {
              console.log(e)
            }}
            status="error"
            placeholder="search something..."
          />
        </div>

        <div className="mt-5">
          <Search
            filterItems={items}
            inputSize="middle"
            placeholder="search something..."
            prefixWidth={130}
            onClear={() => {
              console.log(1)
            }}
            onSelectChange={(obj) => {
              console.log(obj)
            }}
            onPressEnter={(e) => {
              console.log('enter', e)
            }}
            onChange={(e) => {
              console.log(e.target.value)
            }}
            onSearchBtnClick={(e) => {
              console.log(e)
            }}
            withSearchIcon="connect"
          />
        </div>

        <div className="mt-5">
          <ModalExample />
        </div>

        <div className="mt-5">
          <Tabs defaultActiveKey="1" items={tabItems} />
        </div>

        <div className="mt-5">
          <Tabs
            size="small"
            defaultActiveKey="1"
            items={tabItems}
            indicatorSize={(origin) => origin - 26}
          />
        </div>
      </ConfigProvider>
    </div>
  )
}

export default App
