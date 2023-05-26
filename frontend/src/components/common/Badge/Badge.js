import classNames from 'classnames';
import React from 'react';

const Badge = ({ value, sm = false }) => {
  return (
    <div className={classNames({ active: value }, 'badge', { 'badge-sm': sm })}>
      {value ? 'Yes' : 'No'}
    </div>
  );
};

export default Badge;
