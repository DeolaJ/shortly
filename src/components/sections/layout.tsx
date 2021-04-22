import React, { PropsWithChildren, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/react';

type LayoutProps = {
  className?: string;
};

function Layout({ children, className }: PropsWithChildren<LayoutProps>): ReactElement {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', Helvetica, Sans-Serif;
          }
        `}
      />
      <main className={className}>{children}</main>
    </>
  );
}

Layout.defaultProps = {
  clasName: '',
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Layout;
