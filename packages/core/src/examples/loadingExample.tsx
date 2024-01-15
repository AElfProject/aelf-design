import Loading from 'components/Loading'
import Button from 'components/Button'
import CopyIcon from 'assets/copy.svg?react'
import { useState } from 'react'

export default function LoadingExample() {
  const [openLoading, setOpenLoading] = useState(false)

  const onClickHandler = () => {
    setOpenLoading(true)
    setTimeout(() => {
      setOpenLoading(false)
    }, 3000)
  }

  return (
    <>
      <Button onClick={onClickHandler}>open loading</Button>
      <Loading
        open={openLoading}
        content={
          <div>
            <div className="flex items-center justify-center">
              <CopyIcon />
            </div>
            <div>loading...</div>
          </div>
        }
      />
    </>
  )
}
