import { memo, useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';

import { SORT_TYPES } from '../constants/constants';
import { TSortType } from '../types/types';

type SortProps = {
  selectSort: (type: TSortType) => void;
};

const Sort = memo(function ({ selectSort }: SortProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const [isPopup, setIsPopup] = useState<boolean>(false);
  const [sortType, setSortType] = useState<TSortType>('rating');

  useEffect(() => {
    function handleClickOutside({ target }: MouseEvent) {
      if (ref.current && !ref.current.contains(target as Node)) {
        setIsPopup(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const selectSortType = (type: TSortType) => {
    setSortType(type);
    setIsPopup(false);
    selectSort(type);
  };

  return (
    <div className="sort" ref={ref}>
      <div className="sort__label" onClick={() => setIsPopup(!isPopup)}>
        {dropdownArrow(isPopup ? 'rotate' : '')}
        <b>Сортировка по:</b>
        <span>{SORT_TYPES[`${sortType}`]}</span>
      </div>
      {isPopup && (
        <div className="sort__popup">
          <ul>
            {Object.entries(SORT_TYPES).map(([type, value]) => (
              <li
                className={clsx(sortType === type && 'active')}
                key={type}
                onClick={() => selectSortType(type as TSortType)}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default Sort;

function dropdownArrow(className: string) {
  return (
    <svg
      className={className}
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
        fill="#2C2C2C"
      />
    </svg>
  );
}
