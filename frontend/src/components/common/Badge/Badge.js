import classNames from 'classnames';
import React from 'react';

const Badge = ({ value }) => {
  return (
    <div className={classNames({ active: value }, 'badge')}>
      {value ? 'Yes' : 'No'}
    </div>
  );
};

export default Badge;
