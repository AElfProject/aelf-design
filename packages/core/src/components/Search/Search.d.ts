import { InputSizeType, IInputProps } from 'components/Input/Input'
import { DropdownSizeType } from 'components/Dropdown/Dropdown'
import { MenuClickEventHandler } from 'rc-menu/lib/interface'
import { MenuItemType } from 'antd/lib/menu/hooks/useItems'

export type WithSearchIconType = 'connect' | 'inline' | 'after'

interface FilterItemType extends MenuItemType {
  value: string
}
export interface ISearchProps
  extends Omit<IInputProps, 'size' | 'addonAfter' | 'suffix'> {
  inputSize?: InputSizeType
  dropdownSize?: DropdownSizeType
  filterItems?: FilterItemType[]
  prefixWidth?: number
  withSearchIcon?: WithSearchIconType
  className?: string
  inputClassName?: string
  onSelectChange?: MenuClickEventHandler
  onSearchBtnClick?: (e: React.MouseEvent<HTMLElement>) => void
}
