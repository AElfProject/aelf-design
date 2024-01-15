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
import RadioExample from 'examples/radioExample'
import ButtonExample from 'examples/buttonExample'
import AddressExample from 'examples/addressExample'
import LoadingExample from 'examples/loadingExample'
import CarouselExample from './carouselExample'
import Progress from 'components/Progress'
import {
  DatePickerForPC as DatePicker,
  DatePickerForMobile
} from 'components/DatePicker'
import UploadExample from './uploadExample'

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
    key: '3',
    label: 'Tabxxxxxx 3',
    children: 'Content of Tab Pane 3',
    icon: <SearchOutlined />
  }
]
const App = () => {
  // const { RangePicker } = DatePicker
  const [appearance, setAppearance] = useState<ThemeAppearance>('light')
  const [visible2, setVisible2] = useState(false)

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
        prefixCls="xx"
        appearance={appearance}
        // customToken={{
        //   customAddress: {
        //     primaryLinkColor: appearance == 'dark' ? '#c713af' : '#53dd13',
        //     primaryIconColor: appearance == 'dark' ? '#ea1818' : '#7f7777',
        //     addressHoverColor: appearance == 'dark' ? '#38b117' : '#149434',
        //     addressActiveColor: appearance == 'dark' ? '#0756BC' : '#0460D9'
        //   }
        // }}
        theme={
          {
            // token: { colorPrimary: appearance == 'dark' ? '#9ddd13' : 'red' }
            // components: {
            //   Progress: {
            //     colorPrimary: 'red'
            //   }
            // }
          }
        }
      >
        <ButtonExample />

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

        <div className="mt-5">
          <RadioExample />
          <Progress percent={10} size={[300, 8]} strokeColor="#00ff00" />
          <Progress percent={50} size={[300, 12]} />
          <Progress percent={100} size={[300, 20]} />
        </div>

        <div className="mt-5">
          <DatePicker showTime={{ format: 'HH:mm' }} />
          {/* <RangePicker /> */}
          <div>
            <Button
              onClick={() => {
                setVisible2(true)
              }}
            >
              DatePickerForMobile
            </Button>
            <DatePickerForMobile
              visible={visible2}
              onClose={() => {
                setVisible2(false)
              }}
              precision="minute"
              onConfirm={(val) => {
                console.log(val.toString())
              }}
            />
          </div>
        </div>

        <div className="mt-5">
          <AddressExample />
        </div>

        <div className="mt-5">
          <UploadExample />
        </div>

        <div className="mt-5">
          <LoadingExample />
          </div>
        <div className="mt-5">
          <CarouselExample />
        </div>
      </ConfigProvider>
    </div>
  )
}

export default App
