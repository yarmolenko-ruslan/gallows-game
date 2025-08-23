import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from '../../../shared/config/constants';
import type { Category } from '../../../shared/types/types';

const API_BASE = import.meta.env.VITE_API_URL || BASE_URL;

export const fetchGameData = createAsyncThunk<Category[]>(
	'game/fetchGameData',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get<Category[]>(API_BASE);

			return response.data;
		} catch {
			return rejectWithValue('Не удалось загрузить данные игры');
		}
	}
);
