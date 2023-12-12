import Collapse from 'components/Collapse'
import Pagination from 'components/Pagination'
import ToolLogo from '../assets/tool.svg?react'
import SearchLogo from '../assets/search.svg?react'
import { SearchOutlined } from '@ant-design/icons'
import Button from './Button'
import Input from './Input'
import AelfdTypography, { FontWeightType } from './Typography'
import AELFDProvider from '../provider'
import { ThemeAppearance } from 'antd-style'
import { Segmented } from 'antd'
import { useState } from 'react'

const App = () => {
  const [appearance, setAppearance] = useState<ThemeAppearance>('light')

  return (
    <div
      style={{ backgroundColor: appearance === 'light' ? 'white' : 'black' }}
    >
      <Segmented
        options={[
          { label: 'light', value: 'light' },
          { label: 'dark', value: 'dark' }
        ]}
        value={appearance}
        onChange={(e) => setAppearance(e as ThemeAppearance)}
      />
      <AELFDProvider
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
              placeholder="标准"
              prefix={<SearchOutlined />}
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
              placeholder="小号"
            />
          </div>
          <div className="mb-4">
            <Input
              className="w-[400px]"
              placeholder="placeholder"
              addonBefore="ELF"
              addonAfter="AELF"
            />
            {/* <Input.Password></Input.Password> */}
          </div>
        </div>

        <div className="mt-5">
          <Pagination total={100}></Pagination>
        </div>

        <div className="mt-5">
          <AelfdTypography.Title fontWeight={FontWeightType.Bold} level={1}>
            title1 test titlefsdfsdfsdfADD
          </AelfdTypography.Title>
          <AelfdTypography.Title fontWeight={FontWeightType.Bold} level={2}>
            title2 test titlefsdfsdfsdfADD
          </AelfdTypography.Title>
          <AelfdTypography.Title fontWeight={FontWeightType.Bold} level={3}>
            title3 test titlefsdfsdfsdfADD
          </AelfdTypography.Title>
          <AelfdTypography.Title fontWeight={FontWeightType.Bold} level={4}>
            title4 test titlefsdfsdfsdfADD
          </AelfdTypography.Title>
          <AelfdTypography.Title fontWeight={FontWeightType.Bold} level={5}>
            title5 test titlefsdfsdfsdfADD
          </AelfdTypography.Title>

          <AelfdTypography.Title fontWeight={FontWeightType.Bold} level={6}>
            title6 test titlefsdfsdfsdfADD
          </AelfdTypography.Title>

          <AelfdTypography.Title fontWeight={FontWeightType.Bold} level={7}>
            title7 test titlefsdfsdfsdfADD
          </AelfdTypography.Title>
          <AelfdTypography.Text
            size="small"
            fontWeight={FontWeightType.Regular}
          >
            text test titlefsdfsdfsdfADD
          </AelfdTypography.Text>
        </div>
        {/* <Collapse /> */}
      </AELFDProvider>
    </div>
  )
}

// function App() {
//   return
//       <Button>xd</Button>
//       <Card />
//       <Collapse />
//       <Pagination total={100} />
//       <ToolLogo
//         data-twoToneColor={['red', 'green']}
//         data-hoverTwoToneColor={['pink', 'blue']}
//         width="200px"
//         height="200px"
//         className="test"
//       ></ToolLogo>
//       <SearchLogo
//         color="black"
//         data-hoverColor="green"
//         width="200px"
//         height="200px"
//       ></SearchLogo>
//       </AELFDProvider>>

// }

export default App
