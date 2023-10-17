import { Button, Select } from 'antd';
import type { PaginationProps } from 'antd';
import styles from './style/index.module.css';
import { ReactNode, useEffect, useState } from 'react';
import { useDebounceFn } from 'ahooks';
import clsx from 'clsx';
import  RightArrow  from './assets/right-arrow.svg?react';
import  LeftArrow from './assets/left-arrow.svg?react';
import  DownArrow from './assets/down-arrow.svg?react';
import useResponsive from 'hooks/useResponsive'
function JumpButton({
  disabled,
  className,
  svgComponent,
  onChange,
}: {
  disabled: boolean;
  className: string;
  svgComponent: ReactNode;
  onChange: (event: React.MouseEvent<HTMLElement>) => void;
}) {
  return (
    <Button
      type="primary"
      ghost
      disabled={disabled}
      className={className}
      onClick={onChange}
      icon={svgComponent}></Button>
  );
}

export type Options = {
  value: number;
  label: number;
};

export interface IEpPaginationProps extends PaginationProps {
  current?: number;
  pageSize?: number;
  isMobile?: boolean;
  hideOnSinglePage?: boolean;
  defaultCurrent?: number;
  total: number;
  defaultPageSize?: number;
  showSizeChanger?: boolean;
  pageChange?: (page: number, pageSize?: number) => void;
  pageSizeChange?: (page: number, pageSize: number) => void;
  options?: Options[];
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
    { value: 50, label: 50 },
  ],
}: IEpPaginationProps) {

  // Component state
  const [pageNum, setPageNum] = useState<number>(defaultCurrent);
  const [pageSizeValue, setPageSizeValue] = useState<number>(defaultPageSize);

  // Calculated states
  const totalPage = Math.floor((total + pageSizeValue - 1) / pageSizeValue) || 1;
  const isFirstPage = pageNum === 1;
  const isLastPage = pageNum >= totalPage;

  // Hooks
  const { isMobile } = useResponsive();

  // Effect
  useEffect(() => {
    current && setPageNum(current);
  }, [current]);
  useEffect(() => {
    pageSize && setPageSizeValue(pageSize);
  }, [pageSize]);

  // Methods
  const prevChange = () => {
    const page = pageNum === 1 ? pageNum : pageNum - 1;
    setPageNum(page);
    pageChange && pageChange(page);
  };
  const { run: runPrevChange } = useDebounceFn(prevChange, { wait: 300 });

  const nextChange = () => {
    const page = pageNum === totalPage ? totalPage : pageNum + 1;
    setPageNum(page);
    pageChange && pageChange(page);
  };
  const { run: runNextChange } = useDebounceFn(nextChange, { wait: 300 });

  const jumpFirst = () => {
    setPageNum(1);
    pageChange && pageChange(1, pageSize);
  };
  const { run: debounceJumpFirst } = useDebounceFn(jumpFirst, { wait: 300 });

  const jumpLast = () => {
    setPageNum(totalPage);
    pageChange && pageChange(totalPage, pageSize);
  };
  const { run: debounceJumpLast } = useDebounceFn(jumpLast, { wait: 300 });

  const sizeChange = (value: number) => {
    setPageNum(1);
    setPageSizeValue(value);
    pageSizeChange && pageSizeChange(1, value);
  };

  // Render
  if(hideOnSinglePage && total <= 10){
    return null
  }

  return (
    <div className={clsx(styles.pagination, isMobile && styles.paginationMobile)}>
      <div className={styles.epPaginationLeft}>
        {showSizeChanger && (
          <>
            <span className="title inline-block text-xs leading-[18px] text-dark-caption">Show：</span>
            <Select
              defaultValue={pageSizeValue}
              suffixIcon={<DownArrow className={styles.rightArrow} />}
              options={options}
              onChange={sizeChange}
            />
            <span className="title inline-block text-xs leading-[18px] text-dark-caption">Records</span>
          </>
        )}
      </div>
      <div className={styles.pagination__right}>
        <div className={styles.pagination__first}>
          <Button
            disabled={isFirstPage}
            type="primary"
            ghost
            className="!px-2 !text-xs !leading-5 mr-2 first-button"
            onClick={debounceJumpFirst}>
            First
          </Button>
        </div>
        <div className={clsx(styles.pagination__prev, 'w-8')}>
          <JumpButton
            disabled={isFirstPage}
            onChange={runPrevChange}
            className={styles.prev}
            svgComponent={<LeftArrow />}
          />
        </div>
        <div className={styles.pagination__page}>
          <div className="text-xs leading-5">{`Page ${current || pageNum} of ${totalPage}`}</div>
        </div>
        <div className={styles.pagination__next}>
          <JumpButton
            disabled={isLastPage}
            onChange={runNextChange}
            className={styles.next}
            svgComponent={<RightArrow />}
          />
        </div>
        <div className={styles.pagination__last}>
          <Button
            disabled={isLastPage}
            type="primary"
            ghost
            className="!px-2 ml-2 !text-xs !leading-5 last-button"
            onClick={debounceJumpLast}>
            Last
          </Button>
        </div>
      </div>
    </div>
  );
}
