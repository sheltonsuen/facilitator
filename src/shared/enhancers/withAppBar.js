// @flow

import React from 'react';
import _ from 'lodash';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';

import WithAppBarStyles from '../styles/withAppBarStyles';

type Props = {
  classes: *
};

const withAppBar = Component => {
  class WithAppBar extends React.Component<Props> {
    state = {
      open: false
    };

    _toggleDrawer = (toggleState: boolean) => () => {
      this.setState({
        open: toggleState
      });
    };

    render() {
      const { classes, ...restProps } = this.props;
      const { open } = this.state;

      return (
        <div className={classes.root}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={this._toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit">
                Unicorn
              </Typography>
            </Toolbar>
          </AppBar>
          <SwipeableDrawer
            open={open}
            onClose={this._toggleDrawer(false)}
            onOpen={this._toggleDrawer(true)}
          >
            <div className={classes.menuList}>
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                  <ListItemText primary="添加新角色" />
                </ListItem>
              </List>
              <Divider />
              <List />
            </div>
          </SwipeableDrawer>
          <div className={classes.content}>
            <Component {...restProps} />
          </div>
        </div>
      );
    }
  }

  const enhancers = _.flowRight(withStyles(WithAppBarStyles));
  return enhancers(WithAppBar);
};

export default withAppBar;
