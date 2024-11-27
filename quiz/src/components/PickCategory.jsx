import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../context/quiz";
import Category from "../img/category.svg";
import "./PickCategory.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("http://localhost:5000/api/categories");
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const chooseCategoryAndReorderQuestions = async (categoryId) => {
    const response = await fetch(`http://localhost:5000/api/questions/${categoryId}`);
    const data = await response.json();

    dispatch({ type: "START_GAME", payload: data });
    dispatch({ type: "REORDER_QUESTIONS" });
  };

  return (
    <div id="category">
      <h2>Escolha uma categoria</h2>
      <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
      {categories.map((category) => (
        <button
          onClick={() => chooseCategoryAndReorderQuestions(category.id)}
          key={category.id}
        >
          {category.name}
        </button>
      ))}

      <img src={Category} alt="Categoria do Quiz" />
    </div>
  );
};

export default PickCategory;
