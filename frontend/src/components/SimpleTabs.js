import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import List from "@material-ui/core/List";
import { Avatar, Button, ListItem, ListItemText } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  description: {
    maxHeight: "140px",
    color: "#fff",
    overflow: "hidden",
  },
  tabs: {
    backgroundColor: "unset",
  },
  inline: {
    display: "inline",
  },
}));

export default function SimpleTabs({ product }) {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Description" {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <TabPanel className={classes.description} value={value} index={0}>
        {product.description}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <List className={classes.list}>
          {product.reviews.map((review) => {
            <ListItem key={review._id} alignItems="flex-start">
              <ListItemText
                primary={
                  <Typography
                    component="h2"
                    variant="h4"
                    className={classes.inline}
                    color="#fff"
                  >
                    {review.name}
                  </Typography>
                }
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="#fff"
                  >
                    {review.comment}
                  </Typography>
                }
              ></ListItemText>
            </ListItem>;
          })}
        </List>
      </TabPanel>
    </div>
  );
}
