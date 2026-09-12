import React from 'react';

/**
 * Premium micro-tooltip component
 * @param {React.ReactNode} children - Trigger element
 * @param {string} text - Content inside tooltip
 * @param {'top' | 'bottom' | 'left' | 'right'} position - Tooltip anchor side
 * @param {string} className - Optional container styling
 */
export default function Tooltip({
  children,
  text,
  position = 'top',
  className = '',
}) {
  if (!text) return children;

  const positionMap = {
    top: {
      wrapper: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
      transition: 'translate-y-1 group-hover:translate-y-0 group-focus-within:translate-y-0',
      arrow: 'top-full left-1/2 -translate-x-1/2 border-t-zinc-900 dark:border-t-zinc-100 border-x-transparent border-b-transparent',
    },
    bottom: {
      wrapper: 'top-full left-1/2 -translate-x-1/2 mt-2',
      transition: '-translate-y-1 group-hover:translate-y-0 group-focus-within:translate-y-0',
      arrow: 'bottom-full left-1/2 -translate-x-1/2 border-b-zinc-900 dark:border-b-zinc-100 border-x-transparent border-t-transparent',
    },
    left: {
      wrapper: 'right-full top-1/2 -translate-y-1/2 mr-2',
      transition: 'translate-x-1 group-hover:translate-x-0 group-focus-within:translate-x-0',
      arrow: 'left-full top-1/2 -translate-y-1/2 border-l-zinc-900 dark:border-l-zinc-100 border-y-transparent border-r-transparent',
    },
    right: {
      wrapper: 'left-full top-1/2 -translate-y-1/2 ml-2',
      transition: '-translate-x-1 group-hover:translate-x-0 group-focus-within:translate-x-0',
      arrow: 'right-full top-1/2 -translate-y-1/2 border-r-zinc-900 dark:border-r-zinc-100 border-y-transparent border-l-transparent',
    },
  };

  const pos = positionMap[position] || positionMap.top;

  return (
    <div className={`relative inline-flex items-center justify-center group ${className}`}>
      {children}
      <div
        role="tooltip"
        className={`pointer-events-none absolute z-50 whitespace-nowrap rounded-md px-2.5 py-1 text-[11px] font-medium tracking-tight shadow-md transition-all duration-200 ease-out bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 ${pos.wrapper} ${pos.transition}`}
      >
        {text}
        <span
          className={`absolute border-4 border-solid ${pos.arrow}`}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
