import { Button, MenuItem, TextField } from '@mui/material';
import React from 'react'
import '../Css/style.css'
import Categories, { } from '../Data/Categories'

const Home = () => {
  return (
    <div className='content'>
      <div className='settings'>
        <span className='settings_title'>Quiz Settings</span>

        <div className='settings_select'>
          <TextField label='Enter Your Name' style={{ marginBottom: 30 }}
            variant='outlined'
          />

          <TextField select label='Enter Your Name' style={{ marginBottom: 30 }}
            variant='outlined'>
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField select label='Select Difficulty Level' style={{marginBottom: 30}} 
           variant='outlined'>
            <MenuItem key='Easy' value='easy'>Easy</MenuItem>
            <MenuItem key='Medium' value='medium'>Medium</MenuItem>
            <MenuItem key='Hard' value='hard'>Hard</MenuItem>
           </TextField> 

           <Button variant='outlined' color='success' size='large'>
            Start Quiz
           </Button>
        </div>
      </div>



      <img src='./home_banner.svg' alt='banner_img' className='banner' />
    </div>
  )
}

export default Home;