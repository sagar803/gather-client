import React, { useState } from 'react';
import { FormControlLabel, Switch } from '@mui/material';
import './CreateRoomForm.css'

const CreateRoomForm = ({isAuth, setIsAuth}) => {
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
    <div className='form-container'>
      <form className='create-room-form' onSubmit={handleSubmit}>
        <FormControlLabel control={ <Switch checked={formData.isPrivate} onChange={handleTogglePrivate} color="primary" /> } label="Private Room"/>
        <input
          type="text"
          class="input"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          placeholder='Name'
          />
        <input
          type="text"
          class="input"                
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
          />
        <input
          type="text"
          class="input"                
          placeholder="Custom ID"
          fullWidth
          value={formData.customId}
          onChange={(e) => setFormData({ ...formData, customId: e.target.value })}
          required
          />
        <input
          type="text"
          class="input"
          placeholder="Category"
          fullWidth
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          required
          />
        {formData.isPrivate && (
            <input
              class="input"
              placeholder="Password"
              fullWidth
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              />
        )}
        <button class="ui-btn"><span>Create</span></button>
      </form>
    </div>
  );
};

export default CreateRoomForm;
