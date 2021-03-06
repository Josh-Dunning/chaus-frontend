/**
 * Created by Will & Josh on 10/22/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { save_changes } from '../actions/userActions'
// import { WReducer } from '../reducers/index'
//Material Imports
import RaisedButton from 'material-ui/RaisedButton';
import Save from 'material-ui/svg-icons/content/save'
import {fullWhite} from 'material-ui/styles/colors';

const combineDays = () => {
  weekObject = {"Monday":mon, "Tuesday":tues, "Wednesday":wed, "Thursday":thurs, "Friday":fri, "Saturday":sat, "Sunday":sun}
}

const ChangeButton = ({netid, save_changes, mon, tues, wed, thurs, fri, sat, sun}) => {
  let weekObject = {"Monday":mon, "Tuesday":tues, 
                    "Wednesday":wed, "Thursday":thurs, "Friday":fri, "Saturday":sat, "Sunday":sun}
  console.log(weekObject)
  return (
      <div style={{height: 738, display: 'flex', flexDirection: 'column'}}>
          <div style={{flex: 1}}/>
          <RaisedButton backgroundColor="#a4c639" icon={<Save color={fullWhite}/>} onClick={() => save_changes(weekObject, netid)} style={{height: 38, margin: 10}}/>
      </div>
  )
}

export default connect(
    (state) => {
        return {
            mon: state.monReducer.mon,
            tues: state.tuesReducer.tues,
            wed: state.wedReducer.wed,
            thurs: state.thursReducer.thurs,
            fri: state.friReducer.fri,
            sat: state.satReducer.sat,
            sun: state.sunReducer.sun,
            netid: state.activeReducer.user.netid
        }
    },
    (dispatch) => {
        return {
            save_changes: (week, netid) => dispatch(save_changes(week, netid))
        }
    }
)(ChangeButton)
