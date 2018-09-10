import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import purple from "@material-ui/core/colors/purple";
import Button from "@material-ui/core/Button";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";

import GoogleMapReact from 'google-map-react';

import CTable from "./CTable";
import timeTable1 from "./data/timeTable1";
import timeTable2 from "./data/timeTable2";
import distanceTableData from "./data/distanceTableData";
import voyageData from "./data/voyageData";
import Vessel_data from "./data/Vessel_data";

import Typography from "@material-ui/core/Typography";
import NativeSelect from "@material-ui/core/NativeSelect";

import Add from "@material-ui/icons/AddCircle";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Remove from "@material-ui/icons/RemoveCircle";
import SelectData from "./data/SelectData";

import "./style.css";

class VoyageEstimation extends Component {
  state = {
    add: "",
    per: "",
    cost: 2000,
    checkedA: false,
    checkedB: false,
    checkedF: false,
    checkedG: false,
    checkedC: false,
    checkedD: false,
    checkedH: false
  };
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChangeA = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeB = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeF = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeG = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeC = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeD = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeH = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  costinput = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={24}>
        <div className="content-wrapper">
          <h1>
            Page Header
            <small>Optional description</small>
          </h1>
        </div>
        <Grid item xs={9} className={classes.scroll}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div className="box-header">
         <h3 className="box-title">Voyage Estimation</h3>
         <div style={{ height: '50vh', width: '350%' }}>
            <GoogleMapReact
                className="container karta"
                bootstrapURLKeys={{
                    key:'AIzaSyCK6F8nozLf6lsWjxoQK-ATaXsgzI8gjrw',
                    language: 'en',
                }}
                defaultCenter={{lat: 59.95, lng: 30.33}}
                defaultZoom={11}
            >
            </GoogleMapReact>
      </div>
        
               
              </div>

              <Grid container>
                <Grid item xs={3}>
                  <FormControl className={classes.formControl}>
                    <InputLabel
                      htmlFor="uncontrolled-native"
                      className={classes.sizes}
                    >
                      Initial Port
                    </InputLabel>
                    <NativeSelect
                      defaultValue={10}
                      input={<Input name="name" id="uncontrolled-native" />}
                    >
                      <option value="" />
                      {SelectData.map(option => {
                        return (
                          <option value={option.criteria}>
                            {option.criteria}
                          </option>
                        );
                      })}
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid item xs={3}>
                  <FormControl className={classes.formControl}>
                    <InputLabel
                      htmlFor="uncontrolled-native"
                      className={classes.sizes}
                    >
                      Loading Port
                    </InputLabel>
                    <NativeSelect
                      defaultValue={10}
                      input={<Input name="name" id="uncontrolled-native" />}
                    >
                      <option value="" />
                      {SelectData.map(option => {
                        return (
                          <option value={option.criteria}>
                            {option.criteria}
                          </option>
                        );
                      })}
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid item xs={3}>
                  <FormControl className={classes.formControl}>
                    <InputLabel
                      htmlFor="uncontrolled-native"
                      className={classes.sizes}
                    >
                      Discharging Port
                    </InputLabel>
                    <NativeSelect
                      defaultValue={10}
                      input={<Input name="name" id="uncontrolled-native" />}
                    >
                      <option value="" />
                      {SelectData.map(option => {
                        return (
                          <option value={option.criteria}>
                            {option.criteria}
                          </option>
                        );
                      })}
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid item xs={3}>
                  <FormControl className={classes.formControl}>
                    <InputLabel
                      htmlFor="uncontrolled-native"
                      className={classes.sizes}
                    >
                      Bunkers Only
                    </InputLabel>
                    <NativeSelect
                      defaultValue={10}
                      input={<Input name="name" id="uncontrolled-native" />}
                    >
                      <option value="" />
                      {SelectData.map(option => {
                        return (
                          <option value={option.criteria}>
                            {option.criteria}
                          </option>
                        );
                      })}
                    </NativeSelect>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item xs={3} />
                <Grid item xs={3}>
                  <TextField
                    id="name"
                    label="Port Cost"
                    className={classes.textFields}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    id="name"
                    label="Port Cost"
                    className={classes.textFields}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    id="name"
                    label="Port Cost"
                    className={classes.textFields}
                    margin="normal"
                  />
                </Grid>
              </Grid>

              <h3 className={classes.green}>
                <AddCircleIcon className={classes.green} />
                Add Extra Port
              </h3>
              <div className={classes.tottal}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedA}
                      onChange={this.handleChangeA("checkedA")}
                      value="checkedA"
                      color="primary"
                    />
                  }
                  label="Primary"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedB}
                      onChange={this.handleChangeB("checkedB")}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Antipiracy Route"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedF}
                      onChange={this.handleChangeF("checkedF")}
                      value="checkedF"
                      color="primary"
                    />
                  }
                  label="Canals"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedG}
                      onChange={this.handleChangeG("checkedG")}
                      value="checkedG"
                      color="primary"
                    />
                  }
                  label="(S)ECA"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedC}
                      onChange={this.handleChangeC("checkedC")}
                      value="checkedC"
                      color="primary"
                    />
                  }
                  label="Winter Correction"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedD}
                      onChange={this.handleChangeD("checkedD")}
                      value="checkedD"
                      color="primary"
                    />
                  }
                  label="Tropical Correction"
                />
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={1}>
              <div className="box-header">
                <h3 className="box-title">Vessel Selection</h3>
              </div>
              <div className={classes.check}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedH}
                      onChange={this.handleChangeH("checkedH")}
                      value="checkedH"
                      color="primary"
                    />
                  }
                />
              </div>
              <div className={classes.total}>
                <div>
                  <FormControl className={classes.formControl}>
                    <InputLabel
                      htmlFor="uncontrolled-native"
                      className={classes.sizes}
                    >
                      Vessel Name
                    </InputLabel>
                    <NativeSelect
                      defaultValue={10}
                      input={<Input name="name" id="uncontrolled-native" />}
                    >
                      <option value="" />
                      <option value={10}>Alabama</option>
                      <option value={20}>Alaska</option>
                      <option value={30}>California</option>
                      <option value={30}>Delaware</option>
                      <option value={30}>Tennessee</option>
                      <option value={30}>Texas</option>
                      <option value={30}>Washington</option>
                    </NativeSelect>
                  </FormControl>
                </div>
                <div>
                  <FormControl className={classes.formControl}>
                    <InputLabel
                      htmlFor="uncontrolled-native"
                      className={classes.sizes}
                    >
                      IMO
                    </InputLabel>
                    <NativeSelect
                      defaultValue={20}
                      input={<Input name="name" id="uncontrolled-native" />}
                    >
                      <option value="" />
                      <option value={10}>Alabama</option>
                      <option value={20}>Alaska</option>
                      <option value={30}>California</option>
                      <option value={30}>Delaware</option>
                      <option value={30}>Tennessee</option>
                      <option value={30}>Texas</option>
                      <option value={30}>Washington</option>
                    </NativeSelect>
                  </FormControl>
                </div>
                <div>
                  <TextField
                    id="name"
                    label="Speed Ballast"
                    className={classes.textFilds}
                    margin="normal"
                  />
                </div>
              </div>
              <div className={classes.totalgroup}>
                <div>
                  <TextField
                    id="name"
                    label="Port Cost"
                    className={classes.textFields}
                    margin="normal"
                  />
                </div>
                <div>
                  <TextField
                    id="name"
                    label="Port Cost"
                    className={classes.textFields}
                    margin="normal"
                  />
                </div>
                <div>
                  <TextField
                    id="name"
                    label="Port Cost"
                    className={classes.textFields}
                    margin="normal"
                  />
                </div>
              </div>
              <h3 className={classes.green}>
                <AddCircleIcon className={classes.green} />
                Add new Vessel
              </h3>

              <Grid item xs={12} className={classes.inputStyle}>
                {Vessel_data.map(data => {
                  return (
                    <TextField
                      label={data.label}
                      InputProps={{
                        disableUnderline: true,
                        classes: {
                          root: classes.bootstrapRoot,
                          input: classes.bootstrapInput
                        }
                      }}
                      InputLabelProps={{
                        shrink: true,
                        className: classes.bootstrapFormLabel
                      }}
                    />
                  );
                })}
              </Grid>
            </Paper>
          </Grid>

          <Paper className={classes.paper} elevation={1}>
            <div className="box-header">
              <h3 className="box-title">Freight Calculation</h3>
            </div>

            <div className={classes.total}>
              <div>
                <FormControl className={classes.formControls}>
                  <InputLabel
                    htmlFor="uncontrolled-native"
                    className={classes.sizes}
                  >
                    Charterer
                  </InputLabel>
                  <NativeSelect
                    defaultValue={10}
                    input={<Input name="name" id="uncontrolled-native" />}
                  >
                    <option value="" />
                    <option value={10}>SSHEX</option>
                    <option value={20}>SSHINC</option>
                    <option value={30}>FSHEX</option>
                  </NativeSelect>
                </FormControl>
              </div>

              <div>
                <TextField
                  id="name"
                  label="Charterer Comission"
                  className={classes.filds}
                  margin="normal"
                  placeholder="Enter"
                />
              </div>
            </div>
            <div className={classes.totalgroups}>
              <div>
                <FormControl className={classes.formControls}>
                  <InputLabel
                    htmlFor="uncontrolled-native"
                    className={classes.sizes}
                  >
                    Broker
                  </InputLabel>
                  <NativeSelect
                    defaultValue={20}
                    input={<Input name="name" id="uncontrolled-native" />}
                  >
                    <option value="" />
                    <option value={10}>SSHEX</option>
                    <option value={20}>SSHINC</option>
                    <option value={30}>FSHEX</option>
                  </NativeSelect>
                </FormControl>
              </div>
              <div>
                <TextField
                  id="name"
                  label="Broker Comission"
                  className={classes.filds}
                  margin="normal"
                  placeholder="Enter"
                />
              </div>
            </div>
          </Paper>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div className="box-header">
                <h3 className="box-title">Cargo</h3>
              </div>
              <Grid item xs={12}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Cargo type</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Maximum Quantity</TableCell>
                      <TableCell>Unit</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <FormControl className={classes.formControl}>
                          <Select
                            value={this.state.add}
                            onChange={this.handleChange}
                            input={
                              <Input name="add" id="add-additional-coast" />
                            }
                            displayEmpty
                            name="add"
                          >
                            <MenuItem value="">Cargo type</MenuItem>
                            <MenuItem value={10}>Alaska</MenuItem>
                            <MenuItem value={20}>California</MenuItem>
                            <MenuItem value={30}>Delaware</MenuItem>
                            <MenuItem value={40}>Tennessee</MenuItem>
                            <MenuItem value={50}>Texas</MenuItem>
                            <MenuItem value={60}>Washington</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell>
                        <TextField placeholder="	Quantity" />
                      </TableCell>
                      <TableCell>1000pcs</TableCell>
                      <TableCell>mts</TableCell>
                      <TableCell> € 106</TableCell>
                      <TableCell>
                        <DeleteIcon />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
              <br />
              <h3 className={classes.green}>
                <AddCircleIcon className={classes.green} />
                Add extra Cost
              </h3>
              <Grid container>
                <Grid item xs={4}>
                  <TextField
                    label="Loading Rates"
                    id="simple-start-adornment"
                    placeholder="Enter ..."
                    className={classes.textField}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="add-additional-coast">
                      Loading Terms
                    </InputLabel>
                    <Select
                      value={this.state.add}
                      onChange={this.handleChange}
                      input={<Input name="add" id="add-additional-coast" />}
                      displayEmpty
                      name="add"
                    >
                      <MenuItem value="">Options</MenuItem>
                      <MenuItem value={10}>Alaska</MenuItem>
                      <MenuItem value={20}>California</MenuItem>
                      <MenuItem value={30}>Delaware</MenuItem>
                      <MenuItem value={40}>Tennessee</MenuItem>
                      <MenuItem value={50}>Texas</MenuItem>
                      <MenuItem value={60}>Washington</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Discharging Rates"
                    id="simple-start-adornment"
                    placeholder="Enter ..."
                    className={classes.textField}
                  />
                </Grid>
              </Grid>
              <br />
              <Grid container>
                <Grid item xs={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="add-additional-coast">
                      Discharging Terms
                    </InputLabel>
                    <Select
                      value={this.state.add}
                      onChange={this.handleChange}
                      input={<Input name="add" id="add-additional-coast" />}
                      displayEmpty
                      name="add"
                    >
                      <MenuItem value="">Options</MenuItem>
                      <MenuItem value={10}>SSHEX</MenuItem>
                      <MenuItem value={20}>SSHINC</MenuItem>
                      <MenuItem value={30}>FSHEX</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div className="box-header">
                <h3 className="box-title">Fuel Prices</h3>
              </div>
              <Grid item xs={8}>
                <Grid container>
                  <Grid item xs={6}>
                    <TextField
                      label="FO"
                      id="simple-start-adornment"
                      placeholder="Enter ..."
                      className={classes.textField}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">$/mt</InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="DO"
                      id="simple-start-adornment"
                      placeholder="Enter ..."
                      className={classes.textField}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">$/mt</InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Grid item xs={8}>
                <Grid container>
                  <Grid item xs={6}>
                    <TextField
                      label="FO LS"
                      id="simple-start-adornment"
                      placeholder="Enter ..."
                      className={classes.textField}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">$/mt</InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="DO LS"
                      id="simple-start-adornment"
                      placeholder="Enter ..."
                      className={classes.textField}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">$/mt</InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <h2 className={classes.green}>
                <AddCircleIcon className={classes.green} />
                Add Port
              </h2>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div className="box-header">
                <h3 className="box-title">Extras</h3>
              </div>
              <Grid container>
                <Grid item xs={5}>
                  <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="add-additional-coast">
                      Add Additional Cost
                    </InputLabel>
                    <Select
                      value={this.state.add}
                      onChange={this.handleChange}
                      input={<Input name="add" id="add-additional-coast" />}
                      displayEmpty
                      name="add"
                    >
                      <MenuItem value="">C/V/E</MenuItem>
                      <MenuItem value={10}>SSHEX</MenuItem>
                      <MenuItem value={20}>SSHINC</MenuItem>
                      <MenuItem value={30}>FSHEX</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    id="name"
                    label="Cost"
                    value={this.state.cost}
                    onChange={this.costinput("cost")}
                  />
                </Grid>
                <Grid item xs={5}>
                  <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="add-additional-coast" />
                    <Select
                      value={this.state.per}
                      onChange={this.handleChange}
                      input={<Input name="add" id="add-additional-coast" />}
                      displayEmpty
                      name="add"
                    >
                      <MenuItem value="">Select per</MenuItem>
                      <MenuItem value={10}>Day</MenuItem>
                      <MenuItem value={20}>Month</MenuItem>
                      <MenuItem value={30}>Lumsump</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <div className={classes.green}>
                  <AddCircleIcon className={classes.green} />
                  <small>Add extra Cost</small>
                </div>
              </Grid>
              <br />
              <Grid container>
                <Grid item xs={5}>
                  <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="add-additional-coast">
                      Add Additional Cost
                    </InputLabel>
                    <Select
                      value={this.state.add}
                      onChange={this.handleChange}
                      input={<Input name="add" id="add-additional-coast" />}
                      displayEmpty
                      name="add"
                    >
                      <MenuItem value="">C/V/E</MenuItem>
                      <MenuItem value={10}>SSHEX</MenuItem>
                      <MenuItem value={20}>SSHINC</MenuItem>
                      <MenuItem value={30}>FSHEX</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    id="name"
                    label="Cost"
                    value={this.state.cost}
                    onChange={this.costinput("cost")}
                  />
                </Grid>
                <Grid item xs={5}>
                  <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="add-additional-coast" />
                    <Select
                      value={this.state.per}
                      onChange={this.handleChange}
                      input={<Input name="add" id="add-additional-coast" />}
                      displayEmpty
                      name="add"
                    >
                      <MenuItem value="">Select per</MenuItem>
                      <MenuItem value={10}>Day</MenuItem>
                      <MenuItem value={20}>Month</MenuItem>
                      <MenuItem value={30}>Lumsump</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <div className={classes.green}>
                  <AddCircleIcon className={classes.green} />
                  <small>Add extra Cost</small>
                </div>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div className="box-header">
                <h3 className="box-title">Distance Table</h3>
              </div>
              <Grid item xs={8}>
                <CTable data={distanceTableData} />
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div className="box-header">
                <h3 className="box-title">Time Table</h3>
              </div>
              <Grid item xs={8}>
                <CTable data={timeTable1} />
                <CTable data={timeTable2} />
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <div className={classes.root}>
              <List component="nav">
                {voyageData.map(primary => {
                  return (
                    <ListItem>
                      {primary.name}
                      <ListItemSecondaryAction>
                        {primary.num}
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                })}
              </List>
              <Divider />
              <List component="nav">
                {voyageData.map(primary => {
                  return (
                    <ListItem className={classes.resStyle}>
                      {primary.result}
                      <ListItemSecondaryAction className={classes.resStyle}>
                        {primary.res}
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                })}
                <div className={classes.buttonStyle}>
                  <Button
                    variant="contained"
                    size="medium"
                    className={classes.SaveButton}
                  >
                    Save
                  </Button>
                  <Button
                    variant="contained"
                    size="medium"
                    className={classes.CompareButton}
                  >
                    Compare
                  </Button>
                  <Button
                    variant="contained"
                    size="medium"
                    className={classes.ConfirmButton}
                  >
                    Confirm
                  </Button>
                 
                </div> 
                 <Button
                    variant="outlined"
                    size="medium"
                    className={classes.AbortButton}
                  >
                    Abort
                  </Button>
              </List>
            </div>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

const styles = theme => ({
  scroll: {
    overflow: "scroll",
    height: "710px"
  },
  table: {
    minWidth: 700
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    borderRadius: "3px",
    borderTop: "3px solid #d2d6de",
    marginBottom: "20px",
    boxShadow: "0 1px 1px rgba(0,0,0,0.1)"
  },
  formControl: {
    width: "85%"
  },
  textField: {
    marginTop: "9px",
    width: "85%"
  },
  green: {
    color: " #46d7b6"
  },
  buttonStyle: {
    margin: "2%",
    marginTop: "-53%",
      display:"flex"
  },
  SaveButton: {
    backgroundColor: "#46d7b6"
  },
  CompareButton: {
    backgroundColor: "#94aaff",
    marginLeft: "2%"
  },
  ConfirmButton: {
    backgroundColor: "#3c8dbc",
    marginLeft: "2%"
  },
  AbortButton: {
    marginTop: "2%",
    marginLeft: "32%"
  },
  resStyle: {
    color: "#46d7b6"
  },
  VesselTitle: {
    color: "#46d7b6"
  },
  margin: {
    margin: theme.spacing.unit
  },
  cssLabel: {
    "&$cssFocused": {
      color: purple[500]
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: purple[500]
    }
  },
  bootstrapRoot: {
    padding: 0,
    "label + &": {
      marginTop: theme.spacing.unit * 3
    }
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    width: "calc(100% - 24px)",
    transition: theme.transitions.create(["border-color", "box-shadow"])
  },
  bootstrapFormLabel: {
    fontSize: 18
  },

  subtitle: {
    color: " #4770ff",
    marginLeft: "2%",
    fontWeight: 600
  },
  line: {
    height: "1px",
    backgroundColor: " #4770ff",
    width: "354px",
    marginLeft: "13px",
    marginTop: "2px"
  },

  totalgroup: {
    display: "flex"
  },
  totalgroups: {
    display: "flex",
    marginLeft: "2%"
  },

  sizes: {
    fontWeight: "30px"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  },
  textFields: {
    width: "78%",
    marginTop: "5%",
    marginLeft: "14%"
  },
  textFilds: {
    width: "78%",
    marginLeft: "2%",
    marginTop: "4.5%"
  },
  iconbutton: {
    marginLeft: "2%",
    fontSize: "60px",
    color: "green",
    marginTop: "2%"
  },
  sub: {
    marginTop: "4%",
    marginLeft: "3%"
  },
  tottal: {
    display: "flex"
  },
  checked: {},
  size: {
    width: 40,
    height: 40
  },
  sizeIcon: {
    fontSize: 20
  },
  check: {
    marginLeft: "2%"
  },
  formControls: {
    width: "230%"
  },
  filds: {
    marginLeft: "97%",
    marginTop: "0.9%"
  },

  // Delaware
  margin: {
    margin: theme.spacing.unit
  },
  cssLabel: {
    "&$cssFocused": {
      color: purple[500]
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: purple[500]
    }
  },
  bootstrapRoot: {
    padding: 0
  },
  inputStyle: {
    marginTop: "8%"
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    width: "55%",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    margin: "10px"
  },
  bootstrapFormLabel: {
    fontSize: 16,
    marginTop: "-3%"
  },
  total: {
    display: "flex",
    marginLeft: "2%"
  }
});

VoyageEstimation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VoyageEstimation);
