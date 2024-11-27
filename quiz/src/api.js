const API_URL = 'http://localhost:5000/api';

export const fetchQuestions = async () => {
    const response = await fetch(`${API_URL}/questions`);
    const data = await response.json();
    return data;
};
