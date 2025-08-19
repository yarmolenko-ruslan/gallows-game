import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Category } from './types';

const API_BASE = import.meta.env.VITE_API_URL;

export const fetchGameData = createAsyncThunk<Category[]>(
	'game/fetchGameData',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get<Category[]>(API_BASE);

			return response.data;
		} catch (error) {
			return rejectWithValue('Не удалось загрузить данные игры');
		}
	}
);
