import React, { useState, useEffect } from 'react';
import logo from '@assets/img/logo.svg';
import intl from 'react-intl-universal';
import { PRODUCT_NAME } from '@src/shared/constants/common';

import '@pages/options/Options.scss';

interface IProps {

}

const Options: React.FC<IProps> = () => {

  useEffect(() => {
    document.title = intl.get('options').d('设定');
  }, []);

  return (
    <div className="app options">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <div className="header-text">{PRODUCT_NAME}</div>
      </header>
      <div className="content">
      </div>
    </div>
  );
};

export default Options;
