import React, { useState } from 'react';
import { cn } from '../../utils/cn';

export interface TableColumn<T> {
  key: keyof T | string;
  title: string;
  sortable?: boolean;
  render?: (row: T) => React.ReactNode;
  width?: string;
  breakpoint?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface TableClassNames {
  header?: string;
  content?: string;
  cell?: string;
  row?: string;
}

export interface TableProps<T> {
  prefixCls?: string;
  columns: TableColumn<T>[];
  data: T[];
  className?: string;
  classNames?: TableClassNames;
  sortIcons?: {
    ascending: React.ReactNode;
    descending: React.ReactNode;
  };
}

const getColumnBreakpointClass = (breakpoint?: 'sm' | 'md' | 'lg' | 'xl') => {
  switch (breakpoint) {
    case 'sm':
      return 'hidden sm:table-cell';
    case 'md':
      return 'hidden md:table-cell';
    case 'lg':
      return 'hidden lg:table-cell';
    case 'xl':
      return 'hidden xl:table-cell';
    default:
      return '';
  }
};

const Table = <T,>({
  prefixCls = 'apg-table',
  columns,
  data,
  className,
  classNames,
  sortIcons = {
    ascending: '↑',
    descending: '↓'
  }
}: TableProps<T>) => {
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: string } | null>(null);

  const sortedData = React.useMemo(() => {
    let sortableData = [...data];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  const requestSort = (key: keyof T) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className={cn(
      prefixCls,
      "rounded-lg overflow-hidden shadow-lg",
      className
    )}>
      <table className="min-w-full divide-y divide-black">
        <thead className={cn("bg-black-900 text-white", classNames?.header)}>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key as string}
                onClick={() => column.sortable && typeof column.key === 'string' && requestSort(column.key as keyof T)}
                style={{ width: column.width }}
                className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer ${
                  column.sortable ? 'hover:text-gray-300' : ''
                } ${getColumnBreakpointClass(column.breakpoint)}`}
              >
                {column.title}
                {sortConfig?.key === column.key ? (
                  sortConfig.direction === 'ascending'
                    ? sortIcons.ascending
                    : sortIcons.descending
                ) : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={cn("bg-black-800 divide-y divide-black", classNames?.content)}>
          {sortedData.map((row, index) => (
            <tr key={index} className={cn("hover:bg-black", classNames?.row)}>
              {columns.map((column) => (
                <td
                  key={column.key as string}
                  className={cn("px-6 py-4 whitespace-nowrap text-white", classNames?.cell, getColumnBreakpointClass(column.breakpoint))}
                  style={{ width: column.width }}
                >
                  {column.render ? column.render(row) : (row[column.key as keyof T] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
