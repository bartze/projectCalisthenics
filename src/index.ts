import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {
  getAllExercises,
  getExercisesByBodyPart,
  getExerciseById,
  getBodyPartList,
  getEquipmentList,
  getTargetList,
  getExercisesByEquipment,
  getExercisesByTarget,
  getExerciseByName
} from './controllers/exercisesController';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(cors());
app.use(express.json());

app.get('/api/exercises', getAllExercises);
app.get('/api/exercises/bodyPart/:bodyPart', getExercisesByBodyPart);
app.get('/api/bodyPartList', getBodyPartList);
app.get('/api/equipmentList', getEquipmentList);
app.get('/api/targetList', getTargetList);
app.get('/api/exercises/equipment/:equipment', getExercisesByEquipment);
app.get('/api/exercises/target/:target', getExercisesByTarget);
app.get('/api/exercises/exercise/:id', getExerciseById);
app.get('/api/exercises/name/:name', getExerciseByName);

app.listen(port, () => {
  console.log(`Servidor en ejecución en puerto ${port}`);
  console.log(`Haz clic aquí para abrir el servidor: http://localhost:${port}`);
});
