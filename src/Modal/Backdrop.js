// @flow

import React from 'react';
import type { Node } from 'react';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';

export const styles = (theme: Object) => ({
  root: {
    zIndex: -1,
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    // Remove grey highlight
    WebkitTapHighlightColor: theme.palette.common.transparent,
    backgroundColor: theme.palette.common.lightBlack,
    transition: theme.transitions.create('opacity'),
    willChange: 'opacity',
    opacity: 0,
  },
  invisible: {
    backgroundColor: theme.palette.common.transparent,
  },
});

type ProvidedProps = {
  classes: Object,
  /**
   * @ignore
   */
  theme?: Object,
};

export type Props = {
  /**
   * Can be used, for instance, to render a letter inside the avatar.
   */
  children?: Node,
  /**
   * Useful to extend the style applied to components.
   */
  classes?: Object,
  /**
   * @ignore
   */
  className?: string,
  /**
   * If `true`, the backdrop is invisible.
   */
  invisible: boolean,
};

/**
 * @ignore - internal component.
 */
class Backdrop extends React.Component<ProvidedProps & Props> {
  static defaultProps = {
    invisible: false,
  };

  render() {
    const { children, classes, className, invisible, ...other } = this.props;

    const backdropClass = classNames(
      classes.root,
      {
        [classes.invisible]: invisible,
      },
      className,
    );

    return (
      <div data-mui-test="Backdrop" className={backdropClass} aria-hidden="true" {...other}>
        {children}
      </div>
    );
  }
}

export default withStyles(styles, { name: 'MuiBackdrop' })(Backdrop);
