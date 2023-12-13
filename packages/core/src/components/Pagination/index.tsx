import { Select } from 'antd'
import type { PaginationProps } from 'antd'
import { useEffect, useMemo, useState } from 'react'
import { useDebounceFn } from 'ahooks'
import RightArrow from 'assets/right-arrow.svg?react'
import LeftArrow from 'assets/left-arrow.svg?react'
import DownArrow from 'assets/downArrow.svg?react'
import useResponsive from 'hooks/useResponsive'
import Button from 'components/Button'
import useStyles from './style'

export type Options = number[]

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
  options?: Options
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
  options = [10, 20, 50]
}: IEpPaginationProps) {
  // Component state
  const [pageNum, setPageNum] = useState<number>(defaultCurrent)
  const [pageSizeValue, setPageSizeValue] = useState<number>(defaultPageSize)

  // Calculated states
  const totalPage = Math.floor((total + pageSizeValue - 1) / pageSizeValue) || 1
  const isFirstPage = pageNum === 1
  const isLastPage = pageNum >= totalPage

  // Hooks
  const { isMD: isMobile } = useResponsive()
  const { styles, cx } = useStyles({ isMobile })

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

  const pagesizeOptions = useMemo(() => {
    return options.map((item) => {
      return { label: item, value: item }
    })
  }, [options])

  // hidden pagination Render
  if (hideOnSinglePage && total <= options[0]) {
    return null
  }

  return (
    <div className={cx(styles.paginationContainer, 'pagination-container')}>
      <div>
        {showSizeChanger && (
          <>
            <span className={cx(styles.pagesizeLabel, 'pagesize-label')}>
              Show：
            </span>
            <Select
              defaultValue={pageSizeValue}
              className={styles.pagesizeSelect}
              popupClassName={styles.pageSizePopup}
              popupMatchSelectWidth={false}
              suffixIcon={<DownArrow />}
              options={pagesizeOptions}
              onChange={sizeChange}
            />
            <span
              className={cx(
                styles.pagesizeLabel,
                styles.records,
                'pagesize-label'
              )}
            >
              Records
            </span>
          </>
        )}
      </div>
      <div className={cx(styles.pageContainer, 'page-container')}>
        <div>
          <Button
            disabled={isFirstPage}
            size="small"
            className={cx(styles.paginationButton, 'pagination-button')}
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
            className={cx(styles.paginationButton, 'pagination-button')}
            size="small"
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
            className={cx(styles.paginationButton, 'pagination-button')}
            size="small"
            ghost
            disabled={isLastPage}
            onClick={runNextChange}
            icon={<RightArrow />}
          />
        </div>
        <div>
          <Button
            disabled={isLastPage}
            className={cx(styles.paginationButton, 'pagination-button')}
            type="primary"
            size="small"
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
