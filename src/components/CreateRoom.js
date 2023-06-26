import React, { useState } from 'react';
import { TextField, Button, Grid, FormControlLabel, Switch, Box, Card } from '@mui/material';
import Navbar from "./Navbar"

const CreateRoom = ({isAuth, setIsAuth}) => {
  const userId = localStorage.getItem('userId');
  const [formData, setFormData] = useState({name:"", description:"", isPrivate: false, password: "", customId: "", category:"" , createdBy: userId});

  const handleSubmit = async (e) => {
    try {
        e.preventDefault();
        formData.createdBy = userId;
        const res = await fetch(`${process.env.REACT_APP_API}/api/rooms`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }) 
        if (res.ok){
            const data = await res.json();
            console.log(data);
            setFormData({
              name: "",
              description:"",
              isPrivate: false,
              password: "",
              customId: "",
              category: "",
              createdBy: userId,
            });
        }
    } catch (error) {
        console.log(error)
    }
  }

  const handleTogglePrivate = () => {
    setFormData({ ...formData, isPrivate: !formData.isPrivate });
  };

  return (
    <div className='create-room-body'>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
      <Box
        margin="5%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="black"
      >
      <Card variant="outlined" sx={{ p: 4, width: 500 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  fullWidth
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Description"
                  fullWidth
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={formData.isPrivate}
                      onChange={handleTogglePrivate}
                      color="primary"
                    />
                  }
                  label="Private Room"
                />
              </Grid>
              {formData.isPrivate && (
                <Grid item xs={12}>
                  <TextField
                    label="Password"
                    fullWidth
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </Grid>
              )}
              <Grid item xs={12}>
                <TextField
                  label="Custom ID"
                  fullWidth
                  value={formData.customId}
                  onChange={(e) => setFormData({ ...formData, customId: e.target.value })}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Category"
                  fullWidth
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Create Room
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Box>
    </div>
  );
};

export default CreateRoom;
