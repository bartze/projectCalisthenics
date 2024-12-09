document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/bodyPartList')
        .then(response => response.json())
        .then(data => {
            const bodyPartSelect = document.getElementById('bodyPartSelect');
            bodyPartSelect.innerHTML = '<option value="">Seleccionar...</option>';
            data.forEach(bodyPart => {
                bodyPartSelect.innerHTML += `<option value="${bodyPart}">${bodyPart}</option>`;
            });
        });

    fetch('/api/equipmentList')
        .then(response => response.json())
        .then(data => {
            const equipmentSelect = document.getElementById('equipmentSelect');
            equipmentSelect.innerHTML = '<option value="">Seleccionar...</option>';
            data.forEach(equipment => {
                equipmentSelect.innerHTML += `<option value="${equipment}">${equipment}</option>`;
            });
        });

    fetch('/api/targetList')
        .then(response => response.json())
        .then(data => {
            const targetSelect = document.getElementById('targetSelect');
            targetSelect.innerHTML = '<option value="">Seleccionar...</option>';
            data.forEach(target => {
                targetSelect.innerHTML += `<option value="${target}">${target}</option>`;
            });
        });
});

// Buscar ejercicios por parte del cuerpo
document.getElementById('fetchBodyPartExercises').addEventListener('click', () => {
    const bodyPart = document.getElementById('bodyPartSelect').value;
    fetch(`/api/exercises/bodyPart/${bodyPart}`)
        .then(response => response.json())
        .then(data => {
            displayExercises(data);
        });
});

// Buscar ejercicios por equipo
document.getElementById('fetchEquipmentExercises').addEventListener('click', () => {
    const equipment = document.getElementById('equipmentSelect').value;
    fetch(`/api/exercises/equipment/${equipment}`)
        .then(response => response.json())
        .then(data => {
            displayExercises(data);
        });
});

// Buscar ejercicios por objetivo
document.getElementById('fetchTargetExercises').addEventListener('click', () => {
    const target = document.getElementById('targetSelect').value;
    fetch(`/api/exercises/target/${target}`)
        .then(response => response.json())
        .then(data => {
            displayExercises(data);
        });
});

// Función para mostrar los ejercicios
function displayExercises(exercises) {
    const container = document.getElementById('exercisesContainer');
    container.innerHTML = '';
    exercises.forEach(exercise => {
        const exerciseDiv = document.createElement('div');
        exerciseDiv.classList.add('exercise');

        const exerciseName = document.createElement('h2');
        exerciseName.textContent = exercise.name;

        const exerciseImage = document.createElement('img');
        exerciseImage.src = exercise.gifUrl;
        exerciseImage.alt = exercise.name;

        const exerciseBodyPart = document.createElement('p');
        exerciseBodyPart.textContent = `Parte del cuerpo: ${exercise.bodyPart}`;

        const exerciseEquipment = document.createElement('p');
        exerciseEquipment.textContent = `Equipo: ${exercise.equipment}`;

        exerciseDiv.appendChild(exerciseName);
        exerciseDiv.appendChild(exerciseImage);
        exerciseDiv.appendChild(exerciseBodyPart);
        exerciseDiv.appendChild(exerciseEquipment);

        container.appendChild(exerciseDiv);
    });
}