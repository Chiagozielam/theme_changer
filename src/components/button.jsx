import React from 'react'
import { Moon, Sun } from 'react-feather';
import {  useQuery } from '@apollo/client';
import { GET_DARK_MODE, darkMode } from '../graphql/reactivities/theme';

const ButtonComponent = () => {
  
  const toggleMode = () => {
    darkMode(!darkMode())
  }
  const {loading, error, data} = useQuery(GET_DARK_MODE);

  return (
    <div>
      {
        data.darkMode ? (
          <button
            style={{
              backgroundColor: '#00008B',
              border: 'none',
              padding: '2%',
              height: '120px',
              borderRadius: '15px',
              color: 'white',
              fontSize: '18px',
              marginTop: '5%',
              cursor: 'pointer'
            }}
            onClick={toggleMode}
          >
            <Sun />
            <p>Switch To Light Mood</p>
          </button>
        ) :(
          <button
          style={{
            backgroundColor: '#00008B',
            border: 'none',
            padding: '2%',
            height: '120px',
            borderRadius: '15px',
            color: 'white',
            fontSize: '18px',
            marginTop: '5%',
            cursor: 'pointer'
          }}
          onClick={toggleMode}
        >
          <Moon />
          <p>Switch To Dark Mood</p>
        </button>
        )
      } 
    </div>
  )
}

export default ButtonComponent
