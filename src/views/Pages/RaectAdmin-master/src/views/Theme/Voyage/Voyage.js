import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import { Bar } from "react-chartjs-2";

import LivornoVoyage from "./LivornoVoyage";
import "./voyage.css";

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData("Livorno", 12956, "12 October 2017", "Closed", "Pending"),
  createData("Bright Glory", 123568, "17 October 2017", "Closed", "Confirmed"),
  createData("Poseidon", 12956, "10 October 2017", "Closed", "Pending")
];

const initialState = {
  labels: ["Estimation Cost", "Actual Cost", "Profit/Loss on Cost"],
  datasets: [
    {
      label: "Voyage A",
      backgroundColor: "rgb(137, 160, 255)",
      hoverBackgroundColor: "rgb(137, 160, 255)",
      data: [8, 5, 3]
    },
    {
      label: "Voyage B",
      backgroundColor: "rgb(70, 223, 185)",
      hoverBackgroundColor: "rgb(70, 223, 185)",
      data: [12, 16, -6]
    },
    {
      label: "Voyage C",
      backgroundColor: "rgb(117, 100, 252)",
      hoverBackgroundColor: "rgb(117, 100, 252)",
      data: [3, 4, 0.5]
    }
  ]
};

class Voyage extends React.Component {
  componentWillMount() {
    this.setState(initialState);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>
          {" "}
          Page Header <small>Optional description</small>
        </h1>

        <Paper className={classes.root}>
          <div>
            <div className={classes.header}>
              <h3 className={classes.title}>Voyage Analysis</h3>
            </div>

            <p>Filter by: </p>
            <Button variant="contained" color="primary" disableRipple>
              Voyage status
            </Button>
            <Button
              className={classes.leftButton}
              variant="outlined"
              color="primary"
              disableRipple
            >
              Payment status
            </Button>
            <IconButton className={classes.button} aria-label="Delete">
              <DeleteIcon />
            </IconButton>
            <IconButton className={classes.button} aria-label="Delete">
              <EditIcon />
            </IconButton>
          </div>
          <div className={classes.buttonStyle}>
            <p>Search by: </p>
            <Button variant="outlined" color="primary" disableRipple>
              Voyage status
            </Button>
            <Button
              className={classes.leftButton}
              variant="outlined"
              color="primary"
              disableRipple
            >
              Payment status
            </Button>
          </div>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Vessel Name</TableCell>
                <TableCell numeric> TC Code</TableCell>
                <TableCell numeric>Voyage Commended </TableCell>
                <TableCell numeric>Voyage Status </TableCell>
                <TableCell numeric>Payment Status </TableCell>
                <TableCell numeric> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => {
                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell numeric>{row.calories}</TableCell>
                    <TableCell numeric>{row.fat}</TableCell>
                    <TableCell numeric>{row.carbs}</TableCell>
                    <TableCell numeric>
                      {" "}
                      <div className={classes.rowStyle}>{row.protein}</div>
                    </TableCell>
                    <TableCell numeric>
                      {" "}
                      <IconButton
                        className={classes.button}
                        aria-label="Delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                      <IconButton
                        className={classes.button}
                        aria-label="Delete"
                      >
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
        <div className={classes.LivornoVoyageStyle}>
          {" "}
          <LivornoVoyage />{" "}
        </div>
        <div className="box">
          <Bar data={this.state} />
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  leftButton: {
    marginLeft: "0.5%"
  },
  buttonStyle: {
    marginTop: "-5%",
    marginLeft: "45%",
    margin: "3%"
  },
  header: {
    color: "#444",
    display: "block",
    padding: "10px",
    position: "relative",
    width: "295px"
  },
  title: {
    color: "#4770ff",
    borderBottom: "1px solid #496fff",
    padding: "10px 100px 10px 0",
    fontWeight: 500
  },
  rowStyle: {
    color: "#ff7271"
  }
});

Voyage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Voyage);
