import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { selectAuthToken } from '../auth/selectors';

axios.defaults.baseURL = 'https://connections-api.goit.global';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};


export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = selectAuthToken(state);
  setAuthToken(token);

  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const addContact = createAsyncThunk('contacts/addContact', async (newContact, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = selectAuthToken(state);
  setAuthToken(token);

  try {
    const response = await axios.post('/contacts', newContact);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = selectAuthToken(state);
  setAuthToken(token);

  try {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
