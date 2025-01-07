import { Button } from "@/components/ui/button";
import {
  completeQuiz,
  nextQuestion,
  previousQuestion,
} from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const QuizControl = () => {
  const dispatch = useAppDispatch();
  const { question, currentQuestionIndex, userAnswer, quizComplete } =
    useAppSelector((state) => state.quiz);

  // Check if the current question has an answer selected
  const isAnswerSelected = userAnswer[currentQuestionIndex] !== null;

  // Handle the "Next" button click
  const handleNextQuestion = () => {
    if (isAnswerSelected) {
      dispatch(nextQuestion());
    }
  };

  // Handle the "Previous" button click
  const handlePreviousQuestion = () => {
    dispatch(previousQuestion());
  };

  // Handle the "Complete Quiz" button click
  const handleCompleteIndex = () => {
    dispatch(completeQuiz());
  };

  // Check if all answers are selected for the last question
  const isCompleteEnabled =
    isAnswerSelected || currentQuestionIndex !== question.length - 1;

  return (
    <div className="flex items-center justify-between mt-10 ">
      {/* Previous Button */}
      <Button
        onClick={handlePreviousQuestion}
        disabled={currentQuestionIndex === 0 || quizComplete}
      >
        Previous
      </Button>

      {/* Next Button */}
      {currentQuestionIndex < question.length - 1 && (
        <Button onClick={handleNextQuestion} disabled={!isAnswerSelected}>
          Next
        </Button>
      )}

      {/* Complete Quiz Button */}
      {currentQuestionIndex === question.length - 1 && !quizComplete && (
        <Button onClick={handleCompleteIndex} disabled={!isCompleteEnabled}>
          Complete Quiz
        </Button>
      )}
    </div>
  );
};

export default QuizControl;
