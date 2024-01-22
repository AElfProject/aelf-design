import useStyles from './style'
import Copy from './copy'
import { memo } from 'react'

type TChain = 'AELF' | 'tDVV' | 'tDVW'

export type AddressSize = 'small' | 'default' | 'large' | 'ultra'

export interface IHashAddressProps {
  address: string
  addressClickCallback?: (
    originAddress?: string,
    finalAddress?: string,
    e?: React.MouseEvent<HTMLElement>
  ) => void
  chain?: TChain
  preLen?: number
  endLen?: number
  hasCopy?: boolean
  className?: string
  size?: AddressSize
  ignorePrefixSuffix?: boolean
  ignoreEvent?: boolean
}

const addPrefixSuffix = (str: string, chain: TChain) => {
  if (!str) return str
  let resStr = str
  const prefix = 'ELF_'
  const suffix = `_${chain}`
  if (!str.startsWith(prefix)) {
    resStr = `${prefix}${resStr}`
  }
  if (!str.endsWith(suffix)) {
    resStr = `${resStr}${suffix}`
  }
  return resStr
}

const getOmittedStr = (str: string, preLen?: number, endLen?: number) => {
  if (!str || typeof str !== 'string') {
    return str
  }
  if (typeof preLen !== 'number' || typeof endLen !== 'number') {
    return str
  }
  if (str.length <= preLen + endLen) {
    return str
  }
  if (preLen === 0 || endLen === 0) {
    return str
  }

  return `${str.slice(0, preLen)}...${str.slice(-endLen)}`
}

function Address({
  address,
  chain = 'AELF',
  preLen = 0,
  endLen = 0,
  hasCopy = true,
  addressClickCallback,
  className,
  size = 'default',
  ignorePrefixSuffix = false,
  ignoreEvent = false
}: IHashAddressProps) {
  const { styles: st, cx, prefixCls } = useStyles({ size, ignoreEvent })

  const addPrefixSuffixTxt = ignorePrefixSuffix
    ? address
    : addPrefixSuffix(address, chain)
  const omittedStr = getOmittedStr(addPrefixSuffixTxt, preLen, endLen)

  const addressClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    if (ignoreEvent) {
      return
    }
    addressClickCallback && addressClickCallback(address, addPrefixSuffixTxt, e)
  }

  return (
    <div className={cx(st.addressWrap, className, prefixCls + '-hash-address')}>
      <span className={st.addressText} onClick={addressClickHandler}>
        {omittedStr}
      </span>
      {hasCopy && (
        <div className={st.copyBtnWrap}>
          <Copy className={st.copyBtn} value={addPrefixSuffixTxt} />
        </div>
      )}
    </div>
  )
}

export default memo(Address)
