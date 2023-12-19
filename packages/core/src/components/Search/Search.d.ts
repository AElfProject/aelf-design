import { AelfdInputSizeType, AelfdInputProps } from 'components/Input/Input'
import { DropdownSizeType } from 'components/Dropdown/Dropdown'
import { MenuClickEventHandler } from 'rc-menu/lib/interface'
import { MenuItemType } from 'antd/lib/menu/hooks/useItems'

export type WithSearchIconType = 'connect' | 'inline' | 'after'

export interface ISearchProps
  extends Omit<AelfdInputProps, 'size' | 'addonAfter' | 'suffix'> {
  inputSize?: AelfdInputSizeType
  dropdownSize?: DropdownSizeType
  filterItems?: MenuItemType[]
  prefixWidth?: number
  withSearchIcon?: WithSearchIconType
  className?: string
  inputClassName?: string
  onSelectChange?: MenuClickEventHandler
  onSearchBtnClick?: (e: React.MouseEvent<HTMLElement>) => void
}
