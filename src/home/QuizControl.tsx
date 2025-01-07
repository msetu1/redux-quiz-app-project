import { Button } from "@/components/ui/button";
import {
  completeQuiz,
  nextQuestion,
  previousQuestion,
} from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const QuizControl = () => {
  const { question, currentQuestionIndex, userAnswer } = useAppSelector(
    (state) => state.quiz
  );
  const isAnswerSelected = userAnswer[currentQuestionIndex] !== null;
  const dispatch = useAppDispatch();

  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };
  const handlePreviousQuestion = () => {
    dispatch(previousQuestion());
  };

  const handleCompleteIndex = () => {
    dispatch(completeQuiz());
  };

  const isCompleteQuiz =
    isAnswerSelected || currentQuestionIndex !== question.length - 1;
  return (
    <div className="flex items-center justify-between mt-10 ">
      <Button
        disabled={currentQuestionIndex === 0}
        onClick={handlePreviousQuestion}
      >
        Previous
      </Button>
      {currentQuestionIndex < question.length - 1 && (
        <Button disabled={!isAnswerSelected} onClick={handleNextQuestion}>
          Next
        </Button>
      )}
      {currentQuestionIndex === question.length - 1 && (
        <Button disabled={!isCompleteQuiz} onClick={handleCompleteIndex}>
          Complete Quiz
        </Button>
      )}
    </div>
  );
};

export default QuizControl;
