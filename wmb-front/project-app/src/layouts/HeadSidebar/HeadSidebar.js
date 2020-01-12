import React from 'react'
import './Sidebar.css';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Drawer, CssBaseline, AppBar, Toolbar, List, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ListAltIcon from '@material-ui/icons/ListAlt';
import DeckIcon from '@material-ui/icons/Deck';
import {Link} from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
    background: 'linear-gradient(45deg, #0000FF 30%, #0000FF 90%)'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
      
    }),
    background: 'linear-gradient(45deg, #0000FF 30%, #0000FF 90%)'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function HeadSidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })} 
      >
        
        <Toolbar>
        
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h5" noWrap className="font">
            WARUNG MAKAN BAHARI
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        <Link variant="" className="margin" to="/customers">
            <ListItem button >
              <ListItemIcon>
                <RestaurantMenuIcon/>
                <ListItemText className='texts'> 
                Order
                </ListItemText>  
              </ListItemIcon>
            </ListItem></Link>

            <Link variant="contained" className="margin" to="/menu">
            <ListItem button >
              <ListItemIcon>
                <MenuBookIcon/>
                <ListItemText className='texts' >
                Menu
                     </ListItemText> 
              </ListItemIcon>
            </ListItem>
            </Link>

            <Link variant="contained" className="margin" to="/table">
            <ListItem button >
              <ListItemIcon>
                <DeckIcon/>
                <ListItemText className='texts' >
                Table
                     </ListItemText> 
              </ListItemIcon>
            </ListItem></Link>

            <Link variant="contained" className="margin" to="/order">
            <ListItem button >
              <ListItemIcon>
                <ListAltIcon/>
                <ListItemText className='texts' >
                List Order
                     </ListItemText> 
              </ListItemIcon>
            </ListItem></Link>

            <Link variant="contained" className="margin" to="/transaction">
            <ListItem button >
              <ListItemIcon>
                <AccountBalanceWalletIcon/>
                <ListItemText className='texts' > 
                Transaction
                </ListItemText> 
              </ListItemIcon>
            </ListItem></Link>

            <Link variant="contained" className="margin" to="/options">
            <ListItem button >
              <ListItemIcon>
              <SettingsIcon/>
                <ListItemText className='texts' > 
                Options
                </ListItemText> 
              </ListItemIcon>
            </ListItem></Link>


        </List>
        <Divider />
        <Link variant="contained" className="margin" to="/">
            <ListItem button >
              <ListItemIcon>
              <ExitToAppIcon/>
                <ListItemText className='texts' > 
                Log Out
                </ListItemText> 
              </ListItemIcon>
            </ListItem></Link>
        
      </Drawer>
      </div>
)}

export default HeadSidebar;