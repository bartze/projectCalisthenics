"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExercisesByBodyPart = exports.getAllExercises = void 0;
const axios_1 = __importDefault(require("axios"));
const API_URL = 'https://exercisedb.p.rapidapi.com/exercises';
const API_KEY = process.env.RAPIDAPI_KEY;
const API_HOST = 'exercisedb.p.rapidapi.com';
const options = {
    headers: {
        'X-RapidAPI-Host': API_HOST,
        'X-RapidAPI-Key': API_KEY,
    },
};
const getAllExercises = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!API_KEY) {
            throw new Error('API key is missing');
        }
        const response = yield axios_1.default.get(API_URL, options);
        console.log('API Response:', response.data);
        res.status(200).json(response.data);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error('Error fetching exercises:', error.response ? error.response.data : error.message);
            res.status(500).json({ message: 'Error fetching exercises', error: error.response ? error.response.data : error.message });
        }
        else {
            console.error('Unexpected error:', error.message);
            res.status(500).json({ message: 'Unexpected error occurred', error: error.message });
        }
    }
});
exports.getAllExercises = getAllExercises;
const getExercisesByBodyPart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bodyPart } = req.params;
    try {
        if (!API_KEY) {
            throw new Error('API key is missing');
        }
        const response = yield axios_1.default.get(`${API_URL}/bodyPart/${bodyPart}`, options);
        console.log('API Response for Body Part:', response.data);
        res.status(200).json(response.data);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error(`Error fetching exercises for body part: ${bodyPart}`, error.response ? error.response.data : error.message);
            res.status(500).json({ message: `Error fetching exercises for body part: ${bodyPart}`, error: error.response ? error.response.data : error.message });
        }
        else {
            console.error('Unexpected error:', error.message);
            res.status(500).json({ message: 'Unexpected error occurred', error: error.message });
        }
    }
});
exports.getExercisesByBodyPart = getExercisesByBodyPart;
//# sourceMappingURL=exercisesController.js.map