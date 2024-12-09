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

export const getBodyPartList = async (req: Request, res: Response) => {
  try {
    const response = await axios.get<string[]>(`${API_URL}/bodyPartList`, options);
    console.log('API Response for Body Part List:', response.data);
    res.status(200).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching body part list:', error.response ? error.response.data : error.message);
      res.status(500).json({ message: 'Error fetching body part list', error: error.response ? error.response.data : error.message });
    } else {
      console.error('Unexpected error:', (error as Error).message);
      res.status(500).json({ message: 'Unexpected error occurred', error: (error as Error).message });
    }
  }
};

export const getEquipmentList = async (req: Request, res: Response) => {
  try {
    const response = await axios.get<string[]>(`${API_URL}/equipmentList`, options);
    console.log('API Response for Equipment List:', response.data);
    res.status(200).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching equipment list:', error.response ? error.response.data : error.message);
      res.status(500).json({ message: 'Error fetching equipment list', error: error.response ? error.response.data : error.message });
    } else {
      console.error('Unexpected error:', (error as Error).message);
      res.status(500).json({ message: 'Unexpected error occurred', error: (error as Error).message });
    }
  }
};

export const getTargetList = async (req: Request, res: Response) => {
  try {
    const response = await axios.get<string[]>(`${API_URL}/targetList`, options);
    console.log('API Response for Target List:', response.data);
    res.status(200).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching target list:', error.response ? error.response.data : error.message);
      res.status(500).json({ message: 'Error fetching target list', error: error.response ? error.response.data : error.message });
    } else {
      console.error('Unexpected error:', (error as Error).message);
      res.status(500).json({ message: 'Unexpected error occurred', error: (error as Error).message });
    }
  }
};

export const getExercisesByEquipment = async (req: Request, res: Response) => {
  const { equipment } = req.params;
  try {
    if (!API_KEY) {
      throw new Error('API key is missing');
    }
    const response = await axios.get<IExercise[]>(`${API_URL}/equipment/${equipment}`, options);
    console.log('API Response for Equipment:', response.data);
    res.status(200).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`Error fetching exercises for equipment: ${equipment}`, error.response ? error.response.data : error.message);
      res.status(500).json({ message: `Error fetching exercises for equipment: ${equipment}`, error: error.response ? error.response.data : error.message });
    } else {
      console.error('Unexpected error:', (error as Error).message);
      res.status(500).json({ message: 'Unexpected error occurred', error: (error as Error).message });
    }
  }
};

export const getExercisesByTarget = async (req: Request, res: Response) => {
  const { target } = req.params;
  try {
    if (!API_KEY) {
      throw new Error('API key is missing');
    }
    const response = await axios.get<IExercise[]>(`${API_URL}/target/${target}`, options);
    console.log('API Response for Target:', response.data);
    res.status(200).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`Error fetching exercises for target: ${target}`, error.response ? error.response.data : error.message);
      res.status(500).json({ message: `Error fetching exercises for target: ${target}`, error: error.response ? error.response.data : error.message });
    } else {
      console.error('Unexpected error:', (error as Error).message);
      res.status(500).json({ message: 'Unexpected error occurred', error: (error as Error).message });
    }
  }
};

export const getExerciseById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (!API_KEY) {
      throw new Error('API key is missing');
    }
    const response = await axios.get<IExercise[]>(`${API_URL}/exercise/${id}`, options);
    console.log('API Response for ID:', response.data);
    res.status(200).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`Error fetching exercise with ID: ${id}`, error.response ? error.response.data : error.message);
      res.status(500).json({ message: `Error fetching exercise with ID: ${id}`, error: error.response ? error.response.data : error.message });
    } else {
      console.error('Unexpected error:', (error as Error).message);
      res.status(500).json({ message: 'Unexpected error occurred', error: (error as Error).message });
    }
  }
};

export const getExerciseByName = async (req: Request, res: Response) => {
  const { name } = req.params;
  try {
    if (!API_KEY) {
      throw new Error('API key is missing');
    }
    const response = await axios.get<IExercise[]>(`${API_URL}/name/${name}`, options);
    console.log('API Response for Name:', response.data);
    res.status(200).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`Error fetching exercise with name: ${name}`, error.response ? error.response.data : error.message);
      res.status(500).json({ message: `Error fetching exercise with name: ${name}`, error: error.response ? error.response.data : error.message });
    } else {
      console.error('Unexpected error:', (error as Error).message);
      res.status(500).json({ message: 'Unexpected error occurred', error: (error as Error).message });
    }
  }
};

