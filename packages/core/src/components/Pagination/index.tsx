import { Select } from 'antd'
import type { PaginationProps } from 'antd'
import { useEffect, useState } from 'react'
import { useDebounceFn } from 'ahooks'
import RightArrow from 'assets/right-arrow.svg?react'
import LeftArrow from 'assets/left-arrow.svg?react'
import DownArrow from 'assets/downArrow.svg?react'
import useResponsive from 'hooks/useResponsive'
import Button from 'components/Button'
import useStyles from './style'

export type Options = {
  value: number
  label: number
}

export interface IEpPaginationProps extends PaginationProps {
  current?: number
  pageSize?: number
  isMobile?: boolean
  hideOnSinglePage?: boolean
  defaultCurrent?: number
  total: number
  defaultPageSize?: number
  showSizeChanger?: boolean
  pageChange?: (page: number, pageSize?: number) => void
  pageSizeChange?: (page: number, pageSize: number) => void
  options?: Options[]
}

export default function Pagination({
  current,
  pageSize = 10,
  defaultCurrent = 1,
  defaultPageSize = 10,
  total,
  showSizeChanger = true,
  pageChange,
  hideOnSinglePage,
  pageSizeChange,
  options = [
    { value: 10, label: 10 },
    { value: 20, label: 20 },
    { value: 50, label: 50 }
  ]
}: IEpPaginationProps) {
  // Component state
  const [pageNum, setPageNum] = useState<number>(defaultCurrent)
  const [pageSizeValue, setPageSizeValue] = useState<number>(defaultPageSize)

  // Calculated states
  const totalPage = Math.floor((total + pageSizeValue - 1) / pageSizeValue) || 1
  const isFirstPage = pageNum === 1
  const isLastPage = pageNum >= totalPage

  // Hooks
  const { styles, cx } = useStyles()
  const { isMobile } = useResponsive()

  // Effect
  useEffect(() => {
    current && setPageNum(current)
  }, [current])
  useEffect(() => {
    pageSize && setPageSizeValue(pageSize)
  }, [pageSize])

  // Methods
  const prevChange = () => {
    const page = pageNum === 1 ? pageNum : pageNum - 1
    setPageNum(page)
    pageChange && pageChange(page)
  }
  const { run: runPrevChange } = useDebounceFn(prevChange, { wait: 300 })

  const nextChange = () => {
    const page = pageNum === totalPage ? totalPage : pageNum + 1
    setPageNum(page)
    pageChange && pageChange(page)
  }
  const { run: runNextChange } = useDebounceFn(nextChange, { wait: 300 })

  const jumpFirst = () => {
    setPageNum(1)
    pageChange && pageChange(1, pageSize)
  }
  const { run: debounceJumpFirst } = useDebounceFn(jumpFirst, { wait: 300 })

  const jumpLast = () => {
    setPageNum(totalPage)
    pageChange && pageChange(totalPage, pageSize)
  }
  const { run: debounceJumpLast } = useDebounceFn(jumpLast, { wait: 300 })

  const sizeChange = (value: number) => {
    setPageNum(1)
    setPageSizeValue(value)
    pageSizeChange && pageSizeChange(1, value)
  }

  // Render
  if (hideOnSinglePage && total <= 10) {
    return null
  }

  return (
    <div className={styles.paginationContainer}>
      <div>
        {showSizeChanger && (
          <>
            <span>Show：</span>
            <Select
              defaultValue={pageSizeValue}
              suffixIcon={<DownArrow />}
              options={options}
              onChange={sizeChange}
            />
            <span>Records</span>
          </>
        )}
      </div>
      <div className={styles.pageContainer}>
        <div>
          <Button
            disabled={isFirstPage}
            size="medium"
            type="primary"
            ghost
            onClick={debounceJumpFirst}
          >
            First
          </Button>
        </div>
        <div>
          <Button
            disabled={isFirstPage}
            type="primary"
            size="medium"
            ghost
            onClick={runPrevChange}
            icon={<LeftArrow />}
          />
        </div>
        <div className={cx('pageNumber-container', styles.pageNumberContainer)}>
          <div>{`Page ${current || pageNum} of ${totalPage}`}</div>
        </div>
        <div>
          <Button
            type="primary"
            size="medium"
            ghost
            disabled={isLastPage}
            onClick={runNextChange}
            icon={<RightArrow />}
          />
        </div>
        <div>
          <Button
            disabled={isLastPage}
            type="primary"
            size="medium"
            ghost
            onClick={debounceJumpLast}
          >
            Last
          </Button>
        </div>
      </div>
    </div>
  )
}
