import { message } from 'antd'
import CopyIcon from 'assets/copy.svg?react'
import { useCopyToClipboard } from 'react-use'
export default function Copy({
  value,
  className
}: {
  value: string
  className?: string
}) {
  const [, copyToClipboard] = useCopyToClipboard()
  const handleCopy = () => {
    try {
      copyToClipboard(value)
      message.success('Copied Successfully')
    } catch (e) {
      message.error('Copy failed, please copy by yourself.')
    }
  }
  return <CopyIcon className={className} onClick={handleCopy} />
}
