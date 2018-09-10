import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

class CTable extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      columns: this.props.data.columns,
      rows: this.props.data.rows
    };
  }

  render() {
    const { classes } = this.props;
    const { columns, rows } = this.state;

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <TableBody>
              {rows.map(row => (
                <TableRow
                  hover
                  tabIndex={-1}
                  key={row.id}
                  className={classes.row}
                >
                  {columns.map(column => (
                    <TableCell>{row[column.id]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Paper>
    );
  }
}

CTable.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 400
  },
  tableWrapper: {
    overflowX: "auto"
  },
  textField: {
    width: 100
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

export default withStyles(styles)(CTable);
