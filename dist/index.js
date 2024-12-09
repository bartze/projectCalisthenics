"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const exercisesController_1 = require("./controllers/exercisesController");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.static('public'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/api/exercises', exercisesController_1.getAllExercises);
app.get('/api/exercises/bodyPart/:bodyPart', exercisesController_1.getExercisesByBodyPart);
app.get('/api/bodyPartList', exercisesController_1.getBodyPartList);
app.get('/api/equipmentList', exercisesController_1.getEquipmentList);
app.get('/api/targetList', exercisesController_1.getTargetList);
app.get('/api/exercises/equipment/:equipment', exercisesController_1.getExercisesByEquipment);
app.get('/api/exercises/target/:target', exercisesController_1.getExercisesByTarget);
app.get('/api/exercises/exercise/:id', exercisesController_1.getExerciseById);
app.get('/api/exercises/name/:name', exercisesController_1.getExerciseByName);
app.listen(port, () => {
    console.log(`Servidor en ejecución en puerto ${port}`);
    console.log(`Haz clic aquí para abrir el servidor: http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map