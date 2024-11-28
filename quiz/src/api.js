const API_URL = 'http://localhost:5000/api';


export const fetchQuestions = async () => {
    const response = await fetch(`${API_URL}/questions`);
    const data = await response.json();
    return data;
};
export const fetchCategories = async () => {
    try {
      const response = await fetch(`${API_URL}/categories`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao carregar as categorias", error);
    }
  };
