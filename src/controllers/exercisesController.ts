import axios, { AxiosError } from 'axios';
import { Request, Response } from 'express';
import { IExercise } from '../interfaces/exercises.interface';

const API_URL = 'https://exercisedb.p.rapidapi.com/exercises';
const API_KEY = process.env.RAPIDAPI_KEY;
const API_HOST = 'exercisedb.p.rapidapi.com';

const options = {
  headers: {
    'X-RapidAPI-Host': API_HOST,
    'X-RapidAPI-Key': API_KEY,
  },
};

export const getAllExercises = async (req: Request, res: Response) => {
  try {
    if (!API_KEY) {
      throw new Error('API key is missing');
    }
    const response = await axios.get<IExercise[]>(API_URL, options);
    console.log('API Response:', response.data);
    res.status(200).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching exercises:', error.response ? error.response.data : error.message);
      res.status(500).json({ message: 'Error fetching exercises', error: error.response ? error.response.data : error.message });
    } else {
      console.error('Unexpected error:', (error as Error).message);
      res.status(500).json({ message: 'Unexpected error occurred', error: (error as Error).message });
    }
  }
};

export const getExercisesByBodyPart = async (req: Request, res: Response) => {
  const { bodyPart } = req.params;
  try {
    if (!API_KEY) {
      throw new Error('API key is missing');
    }
    const response = await axios.get<IExercise[]>(`${API_URL}/bodyPart/${bodyPart}`, options);
    console.log('API Response for Body Part:', response.data);
    res.status(200).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`Error fetching exercises for body part: ${bodyPart}`, error.response ? error.response.data : error.message);
      res.status(500).json({ message: `Error fetching exercises for body part: ${bodyPart}`, error: error.response ? error.response.data : error.message });
    } else {
      console.error('Unexpected error:', (error as Error).message);
      res.status(500).json({ message: 'Unexpected error occurred', error: (error as Error).message });
    }
  }
};


