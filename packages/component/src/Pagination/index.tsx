import React, { useEffect, useMemo, useState } from 'react';
import { DownOutlined, LeftOutlined, RightOutlined } from '@aelf-design/icons';
import { Select } from 'antd';
import { debounce } from 'lodash-es';

import Button from '../Button';
import useStyles from './style';

export type Options = number[];

export interface IPaginationProps {
  current?: number;
  pageSize?: number;
  hideOnSinglePage?: boolean;
  defaultCurrent?: number;
  total: number;
  defaultPageSize?: number;
  showSizeChange?: boolean;
  showSizeChanger?: boolean;
  showLast?: boolean;
  showFirst?: boolean;
  pageChange?: (page: number, pageSize?: number) => void;
  onChange?: (page: number, pageSize: number) => void;
  pageSizeChange?: (page: number, pageSize: number) => void;
  options?: Options;
}

export default function Pagination({
  current,
  pageSize = 10,
  defaultCurrent = 1,
  defaultPageSize = 10,
  total,
  showSizeChange = true,
  showLast = true,
  showFirst = true,
  showSizeChanger = true,
  hideOnSinglePage,
  options = [10, 20, 50],
  pageChange,
  onChange,
  pageSizeChange,
}: IPaginationProps) {
  // Component state
  const [pageNum, setPageNum] = useState<number>(defaultCurrent);
  const [pageSizeValue, setPageSizeValue] = useState<number>(defaultPageSize);

  // Calculated states
  const totalPage = Math.floor((total + pageSizeValue - 1) / pageSizeValue) || 1;
  const isFirstPage = pageNum === 1;
  const isLastPage = pageNum >= totalPage;

  // Hooks
  const { styles, cx, prefixCls } = useStyles();

  // Effect
  useEffect(() => {
    if (current) {
      setPageNum(current);
    }
  }, [current]);
  useEffect(() => {
    if (pageSize) {
      setPageSizeValue(pageSize);
    }
  }, [pageSize]);

  // Methods
  const prevChange = () => {
    const page = pageNum === 1 ? pageNum : pageNum - 1;
    setPageNum(page);
    pageChange?.(page);
    onChange?.(page, pageSizeValue);
  };
  const runPrevChange = debounce(prevChange, 300, {
    leading: true,
    trailing: false,
  });

  const nextChange = () => {
    const page = pageNum === totalPage ? totalPage : pageNum + 1;
    setPageNum(page);
    pageChange?.(page);
    onChange?.(page, pageSizeValue);
  };
  const runNextChange = debounce(nextChange, 300, {
    leading: true,
    trailing: false,
  });

  const jumpFirst = () => {
    setPageNum(1);
    pageChange?.(1, pageSizeValue);
    onChange?.(1, pageSizeValue);
  };
  const debounceJumpFirst = debounce(jumpFirst, 300, {
    leading: true,
    trailing: false,
  });

  const jumpLast = () => {
    setPageNum(totalPage);
    pageChange?.(totalPage, pageSizeValue);
    onChange?.(totalPage, pageSizeValue);
  };
  const debounceJumpLast = debounce(jumpLast, 300, {
    leading: true,
    trailing: false,
  });

  const sizeChange = (value: number) => {
    setPageNum(1);
    setPageSizeValue(value);
    pageSizeChange?.(1, value);
    onChange?.(1, value);
  };

  const pagesizeOptions = useMemo(() => {
    return options.map((item) => {
      return { label: item, value: item };
    });
  }, [options]);

  // hidden pagination Render
  if (hideOnSinglePage && total <= options[0]) {
    return null;
  }

  return (
    <div className={cx(styles.paginationContainer, prefixCls + '-pagination-container')}>
      <div>
        {showSizeChange && showSizeChanger && (
          <>
            <span className={cx(styles.pagesizeLabel, prefixCls + '-pagesize-label')}>Show：</span>
            <Select
              defaultValue={pageSizeValue}
              value={pageSizeValue}
              className={styles.pagesizeSelect}
              popupClassName={styles.pageSizePopup}
              popupMatchSelectWidth={false}
              suffixIcon={<DownOutlined />}
              options={pagesizeOptions}
              onChange={sizeChange}
            />
            <span
              className={cx(styles.pagesizeLabel, styles.records, prefixCls + '-pagesize-label')}
            >
              Records
            </span>
          </>
        )}
      </div>
      <div className={cx(styles.pageContainer, prefixCls + '-page-container')}>
        {showFirst && (
          <div>
            <Button
              disabled={isFirstPage}
              size="small"
              className={cx(styles.paginationButton, prefixCls + '-pagination-button')}
              type="primary"
              ghost
              onClick={debounceJumpFirst}
            >
              First
            </Button>
          </div>
        )}
        <div className={cx(prefixCls + '-pagination-first-button')}>
          <Button
            disabled={isFirstPage}
            type="primary"
            className={cx(styles.paginationButton, prefixCls + '-pagination-button')}
            size="small"
            ghost
            onClick={runPrevChange}
            icon={<LeftOutlined />}
          />
        </div>
        <div className={cx(prefixCls + '-pageNumber-container', styles.pageNumberContainer)}>
          <div>{`Page ${current || pageNum} of ${totalPage}`}</div>
        </div>
        <div>
          <Button
            type="primary"
            className={cx(styles.paginationButton, prefixCls + '-pagination-button')}
            size="small"
            ghost
            disabled={isLastPage}
            onClick={runNextChange}
            icon={<RightOutlined />}
          />
        </div>
        {showLast && (
          <div className={cx(prefixCls + '-pagination-last-button')}>
            <Button
              disabled={isLastPage}
              className={cx(styles.paginationButton, prefixCls + '-pagination-button')}
              type="primary"
              size="small"
              ghost
              onClick={debounceJumpLast}
            >
              Last
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
