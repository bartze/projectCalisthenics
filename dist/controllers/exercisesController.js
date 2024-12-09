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
exports.getExerciseByName = exports.getExerciseById = exports.getExercisesByTarget = exports.getExercisesByEquipment = exports.getTargetList = exports.getEquipmentList = exports.getBodyPartList = exports.getExercisesByBodyPart = exports.getAllExercises = void 0;
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
const getBodyPartList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${API_URL}/bodyPartList`, options);
        console.log('API Response for Body Part List:', response.data);
        res.status(200).json(response.data);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error('Error fetching body part list:', error.response ? error.response.data : error.message);
            res.status(500).json({ message: 'Error fetching body part list', error: error.response ? error.response.data : error.message });
        }
        else {
            console.error('Unexpected error:', error.message);
            res.status(500).json({ message: 'Unexpected error occurred', error: error.message });
        }
    }
});
exports.getBodyPartList = getBodyPartList;
const getEquipmentList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${API_URL}/equipmentList`, options);
        console.log('API Response for Equipment List:', response.data);
        res.status(200).json(response.data);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error('Error fetching equipment list:', error.response ? error.response.data : error.message);
            res.status(500).json({ message: 'Error fetching equipment list', error: error.response ? error.response.data : error.message });
        }
        else {
            console.error('Unexpected error:', error.message);
            res.status(500).json({ message: 'Unexpected error occurred', error: error.message });
        }
    }
});
exports.getEquipmentList = getEquipmentList;
const getTargetList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${API_URL}/targetList`, options);
        console.log('API Response for Target List:', response.data);
        res.status(200).json(response.data);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error('Error fetching target list:', error.response ? error.response.data : error.message);
            res.status(500).json({ message: 'Error fetching target list', error: error.response ? error.response.data : error.message });
        }
        else {
            console.error('Unexpected error:', error.message);
            res.status(500).json({ message: 'Unexpected error occurred', error: error.message });
        }
    }
});
exports.getTargetList = getTargetList;
const getExercisesByEquipment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { equipment } = req.params;
    try {
        if (!API_KEY) {
            throw new Error('API key is missing');
        }
        const response = yield axios_1.default.get(`${API_URL}/equipment/${equipment}`, options);
        console.log('API Response for Equipment:', response.data);
        res.status(200).json(response.data);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error(`Error fetching exercises for equipment: ${equipment}`, error.response ? error.response.data : error.message);
            res.status(500).json({ message: `Error fetching exercises for equipment: ${equipment}`, error: error.response ? error.response.data : error.message });
        }
        else {
            console.error('Unexpected error:', error.message);
            res.status(500).json({ message: 'Unexpected error occurred', error: error.message });
        }
    }
});
exports.getExercisesByEquipment = getExercisesByEquipment;
const getExercisesByTarget = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { target } = req.params;
    try {
        if (!API_KEY) {
            throw new Error('API key is missing');
        }
        const response = yield axios_1.default.get(`${API_URL}/target/${target}`, options);
        console.log('API Response for Target:', response.data);
        res.status(200).json(response.data);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error(`Error fetching exercises for target: ${target}`, error.response ? error.response.data : error.message);
            res.status(500).json({ message: `Error fetching exercises for target: ${target}`, error: error.response ? error.response.data : error.message });
        }
        else {
            console.error('Unexpected error:', error.message);
            res.status(500).json({ message: 'Unexpected error occurred', error: error.message });
        }
    }
});
exports.getExercisesByTarget = getExercisesByTarget;
const getExerciseById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        if (!API_KEY) {
            throw new Error('API key is missing');
        }
        const response = yield axios_1.default.get(`${API_URL}/exercise/${id}`, options);
        console.log('API Response for ID:', response.data);
        res.status(200).json(response.data);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error(`Error fetching exercise with ID: ${id}`, error.response ? error.response.data : error.message);
            res.status(500).json({ message: `Error fetching exercise with ID: ${id}`, error: error.response ? error.response.data : error.message });
        }
        else {
            console.error('Unexpected error:', error.message);
            res.status(500).json({ message: 'Unexpected error occurred', error: error.message });
        }
    }
});
exports.getExerciseById = getExerciseById;
const getExerciseByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.params;
    try {
        if (!API_KEY) {
            throw new Error('API key is missing');
        }
        const response = yield axios_1.default.get(`${API_URL}/name/${name}`, options);
        console.log('API Response for Name:', response.data);
        res.status(200).json(response.data);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error(`Error fetching exercise with name: ${name}`, error.response ? error.response.data : error.message);
            res.status(500).json({ message: `Error fetching exercise with name: ${name}`, error: error.response ? error.response.data : error.message });
        }
        else {
            console.error('Unexpected error:', error.message);
            res.status(500).json({ message: 'Unexpected error occurred', error: error.message });
        }
    }
});
exports.getExerciseByName = getExerciseByName;
//# sourceMappingURL=exercisesController.js.map