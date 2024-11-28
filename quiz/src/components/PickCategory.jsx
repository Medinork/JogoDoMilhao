import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../context/quiz";
import Category from "../img/category.svg";
import "./PickCategory.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para indicar carregamento

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/categories");
        if (!response.ok) throw new Error("Erro ao carregar as categorias");
        const data = await response.json();
        console.log(data);  // Verifique o formato dos dados aqui
        setCategories(data);
        setLoading(false); // Definir carregamento como falso após dados carregados
      } catch (error) {
        console.error(error);
        setLoading(false); // Caso haja erro, parar o carregamento
      }
    };

    fetchCategories();
  }, []);

  const chooseCategoryAndReorderQuestions = async (categoryId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/questions/${categoryId}`);
      if (!response.ok) throw new Error("Erro ao carregar as perguntas");
      const data = await response.json();
      
      dispatch({ type: "START_GAME", payload: data });
      dispatch({ type: "REORDER_QUESTIONS" });
    } catch (error) {
      console.error(error);
      // Mostrar mensagem de erro ao usuário
    }
  };

  return (
    <div id="category">
      <h2>Escolha uma categoria</h2>
      <p>As perguntas serão referentes a uma das linguagens abaixo:</p>

      {loading ? (
        <p>Carregando categorias...</p> // Exibe uma mensagem de carregamento
      ) : categories.length === 0 ? (
        <p>Não há categorias disponíveis no momento.</p> // Caso não haja categorias
      ) : (
        categories.map((category) => (
          <button
            onClick={() => chooseCategoryAndReorderQuestions(category.id)}
            key={category.id}
          >
            {category.name}
          </button>
        ))
      )}

      <img src={Category} alt="Categoria do Quiz" />
    </div>
  );
};

export default PickCategory;
