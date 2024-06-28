import React, { useState } from 'react';
import { cn } from '../../utils/cn';

export interface TableColumn<T> {
  key: keyof T | string;
  title: string;
  sortable?: boolean;
  render?: (row: T) => React.ReactNode;
  width?: string;
  breakpoint?: 'sm' | 'md' | 'lg' | 'xl';
  align?: 'left' | 'center' | 'right';
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
  onSortChange?: (sortConfig: { key: keyof T | string; direction: 'asc' | 'desc' | '' }) => void;
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
  },
  onSortChange,
}: TableProps<T>) => {
  const [sortConfig, setSortConfig] = useState<{ key: keyof T | string; direction: '' | 'asc' | 'desc' } | null>(null);

  const handleSortChange = (key: keyof T | string) => {
    let direction: 'asc' | 'desc' | '' = 'asc';
    if (sortConfig && sortConfig.key === key) {
      if (sortConfig.direction === 'asc') {
        direction = 'desc' as '' | 'asc' | 'desc';
      } else if (sortConfig.direction === 'desc') {
        direction = '' as '' | 'asc' | 'desc';
      }
    }
    const newSortConfig = direction ? { key, direction } : { key, direction: '' as '' | 'asc' | 'desc' };
    setSortConfig(newSortConfig);
    onSortChange?.(newSortConfig);
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
                onClick={() => column.sortable && handleSortChange(column.key)}
                style={{ width: column.width, textAlign: column.align || 'left' }}
                className={`px-6 py-3 text-xs font-medium uppercase tracking-wider cursor-pointer ${
                  column.sortable ? 'hover:text-gray-300' : ''
                } ${getColumnBreakpointClass(column.breakpoint)}`}
              >
                {column.title}
                {sortConfig?.key === column.key ? (
                  sortConfig.direction === 'asc'
                    ? sortIcons.ascending
                    : sortConfig.direction === 'desc'
                      ? sortIcons.descending
                      : null
                ) : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={cn("bg-black-800 divide-y divide-black", classNames?.content)}>
          {data.map((row, index) => (
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
