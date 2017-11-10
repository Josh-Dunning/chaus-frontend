/**
 * Created by Will & Josh on 10/22/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
//Material Imports
import {GridList, GridTile} from 'material-ui/GridList'
//Inner Imports
import CalendarHour from './calendar-hour'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridlist: {
    marginTop: 10,
    width: 96
  }
}

const monday =
  {"shifts": [
    {
      "hour": 1,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 2,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 3,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 4,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 5,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 6,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 7,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 8,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 9,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 10,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 11,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 12,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 13,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 14,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 15,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 16,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 17,
      "availability": [],
      "schedule": []
    },
    {
      "hour": 18,
      "availability": [],
      "schedule": []
    }
  ]}


const CalendarDay = ({dayName, day}) => {
  return (
    <div style={styles.root}>
      <GridList
        cellHeight={34}
        padding={0}
        style={styles.gridlist}
        cols={1}>
        {Object.keys(dayName).map(
          (shift) => {
          console.log(dayName[shift])
          return (
            <GridTile
              key={dayName[shift].hour.toString()}
              >
              <CalendarHour key={dayName[shift].hour.toString()} dayName={dayName} hour={dayName[shift].hour.toString()} />
            </GridTile>
          )
        }
        )}
      </GridList>
    </div>
  )
}

export default connect (
    (state) => {
        return {
          dayName: state.sunReducer,
          day: state.day
          // dayName: state.dayName,
          // day: state.day
        }
    }
)(CalendarDay)
