## 📝 **ARQUIVO 5/8 - frontend/src/api.js** (PEQUENO!)

1. **Clique em "Add file"** → **"Create new file"**

2. **Nome do arquivo:**
   ```
   frontend/src/api.js
   ```

3. **Cole este código:**

```javascript
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Buscar tipos de treino disponíveis
export const getWorkoutTypes = async () => {
  try {
    const response = await axios.get(`${API}/workouts/types`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar tipos de treino:', error);
    throw error;
  }
};

// Buscar treino específico por tipo e dificuldade
export const getWorkout = async (workoutType, difficulty) => {
  try {
    const response = await axios.get(`${API}/workouts/${workoutType}/${difficulty}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar treino:', error);
    throw error;
  }
};

// Salvar treino completado no histórico
export const saveWorkoutHistory = async (workoutData) => {
  try {
    const response = await axios.post(`${API}/workout-history`, workoutData);
    return response.data;
  } catch (error) {
    console.error('Erro ao salvar histórico:', error);
    throw error;
  }
};

// Buscar histórico de treinos
export const getWorkoutHistory = async (limit = 50) => {
  try {
    const response = await axios.get(`${API}/workout-history?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar histórico:', error);
    throw error;
  }
};

// Buscar alimentos recomendados por objetivo
export const getFoodRecommendations = async (objective) => {
  try {
    const response = await axios.get(`${API}/foods/${objective}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar alimentos:', error);
    throw error;
  }
};

// Buscar objetivos de alimentação disponíveis
export const getFoodObjectives = async () => {
  try {
    const response = await axios.get(`${API}/foods/objectives/all`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar objetivos:', error);
    throw error;
  }
};
