import Question from "./home/Question";
import QuizSummary from "./home/QuizSummary";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { quizComplete } = useAppSelector((state) => state.quiz);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <h2 className="text-center font-bold text-5xl mb-10">Quiz apps !!</h2>
        {!quizComplete ? <Question /> : <QuizSummary />}
      </div>
    </div>
  );
}

export default App;
