import React, { ReactNode, useMemo, useState, cloneElement, isValidElement, ReactElement, useCallback, useEffect, useRef } from 'react';
import cn from 'classnames';
import get from 'lodash/get';
import isObject from 'lodash/isObject';
import { GridProps } from '@/components/container';

const DEFAULT_PAGE_NUMBER = 1;
interface SourceDataInterface {
  load: (data: any) => Promise<any>;
}
export interface A11yTableProps extends GridProps {
  enableA11yMode?: boolean;
  sourceData?: SourceDataInterface;
  children: [ReactElement, ReactElement];
  customPageSizeKey: string;
  customCurrentPageKey: string;
  enableCustomRequest: boolean;
  customRequest: Record<string, any>;
  customTotalPath: string;
  customDataSourcePath: string;
}

const A11yTable: React.FC<A11yTableProps> = (props) => {
  const {
    enableA11yMode,
    sourceData,
    children,
    style = {},
    customPageSizeKey = 'pageSize',
    customCurrentPageKey = 'currentPage',
    enableCustomRequest = false,
    customRequest = {},
    customTotalPath = 'total',
    customDataSourcePath = 'data',
    ...others
  } = props;
  const [form, table] = children || [];

  const paramsRef = useRef<Record<string, any>>({});

  // 如果不是数据源，则警告 
  if (!sourceData?.load) {
    console.warn(`当前绑定的不是数据源，请重新设置数据源`);
  }

  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE_NUMBER);
  const pageSize = table?.props?.paginationProps?.pageSize || 10;
  const [dataSource, setDataSource] = useState([]);

  const loadData = useCallback((pageSize: number, currentPage: number) => {
    // 添加查询字段，剩余对象
    sourceData?.load?.({
      [customPageSizeKey]: pageSize,
      [customCurrentPageKey]: currentPage,
      ...(enableCustomRequest && isObject(customRequest) ? {
        ...customRequest
      } : {}),
      ...paramsRef.current
    }).then(res => {
      // 添加响应字段
      const total = get(res, customTotalPath) || 0;
      const dataSource = get(res, customDataSourcePath) || [];
      setTotal(Number(total));
      setDataSource(dataSource);
    }).catch((err) => {
      console.error(err);
    });
  }, [enableCustomRequest, customRequest, customCurrentPageKey, customPageSizeKey, customTotalPath, customDataSourcePath]);

  useEffect(() => {
    if (!enableA11yMode) return;
    setCurrentPage(DEFAULT_PAGE_NUMBER);
    loadData(pageSize, DEFAULT_PAGE_NUMBER);
  }, [pageSize, enableA11yMode]);


  const setCurrentPageCallback = useCallback((v: number) => {
    if (!enableA11yMode) return;
    setCurrentPage(v);
    loadData(pageSize, v);
  }, [enableA11yMode, pageSize]);

  // 无障碍表格属性
  const allyTableProps = useMemo(() => {
    return {
      currentPage,
      total,
      enableA11yMode,
      dataSource,
      setCurrentPageCallback
    }
  }, [currentPage, total, enableA11yMode, dataSource]);


  // 自定义传入 props
  const cloneElementWithProps = (node: ReactNode, props: Record<string, any>) => {
    if (!isValidElement(node)) {
      return null;
    }
    return cloneElement(node, {
      ...node.props,
      ...props
    })
  }

  const onSearchCallback = useCallback((v: Record<string, any>) => {
    paramsRef.current = v || {};
    setCurrentPage(DEFAULT_PAGE_NUMBER);
    loadData(pageSize, DEFAULT_PAGE_NUMBER);
  }, [pageSize]);

  const onResetCallback = useCallback((v: Record<string, any>) => {
    paramsRef.current = {};
  }, []);

  return <div className={cn('fusion-ui-a11y-table')} style={style}>
    {form ? <div className={cn('fusion-ui-a11y-table-form')}>{cloneElementWithProps(form, {
      onSearchCallback,
      onResetCallback
    })}</div> : null}
    {table ? <div className={cn('fusion-ui-a11y-table-container')}>{cloneElementWithProps(table, {
      extra: allyTableProps
    })}</div> : null}
  </div>;
};

A11yTable.defaultProps = {
  enableA11yMode: true,
};

export { A11yTable };
