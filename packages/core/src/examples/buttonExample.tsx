import Button from 'components/Button'
import { SearchOutlined } from '@ant-design/icons'

export default function ButtonExample() {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <Button size="mini">mini</Button>
        <Button size="small">small</Button>
        <Button size="medium">medium</Button>
        <Button
          onClick={() => {
            console.log(3)
          }}
        >
          default
        </Button>
        <Button
          className="!rounded-2xl"
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
        <Button size="large" shape="circle" danger icon={<SearchOutlined />} />
        <Button size="ultra" shape="circle" icon={<SearchOutlined />} />

        <Button type="primary" size="mini" icon={<SearchOutlined />}></Button>
        <Button type="dashed" size="small" icon={<SearchOutlined />}></Button>
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
  )
}
