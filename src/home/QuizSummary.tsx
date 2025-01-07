import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { quizResultCheck } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

// Helper function to get performance rating and color based on the percentage
const getPerformance = (percentage: number) => {
  if (percentage >= 90) {
    return { rating: "Excellent", color: "bg-green-800" };
  } else if (percentage >= 50) {
    return { rating: "Good", color: "bg-yellow-500" };
  } else if (percentage >= 30) {
    return { rating: "Needs Improvement", color: "bg-orange-500" };
  } else {
    return { rating: "Poor", color: "bg-red-500" };
  }
};

const QuizSummary = () => {
  const dispatch = useAppDispatch();
  const { question, userAnswer } = useAppSelector((state) => state.quiz);

  // Calculate correct and incorrect answers
  const correctAnswersCount = question.reduce((count, question, index) => {
    return question.correctAnswer === userAnswer[index] ? count + 1 : count;
  }, 0);
  const incorrectAnswersCount = question.length - correctAnswersCount;

  const correctPercentage = parseFloat(
    ((correctAnswersCount / question.length) * 100).toFixed(2)
  );

  // Get performance rating and progress bar color based on the correct percentage
  const { rating, color } = getPerformance(correctPercentage);

  return (
    <div>
      <Card className="w-[450px]">
        <CardHeader>
          <h2 className="text-2xl font-bold">Quiz Summary</h2>
        </CardHeader>

        <CardContent>
          <h3 className="text-xl font-medium mb-4 ">
            You got {correctAnswersCount} out of {question.length} correct!
          </h3>

          {/* Progress Bar */}
          <div className="mb-4">
            <Progress
              value={correctPercentage}
              className={`h-4 rounded-full ${color} `}
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm">{correctPercentage}%</span>
              <span className="text-sm">Performance: {rating}</span>
            </div>
          </div>

          {/* Statistics */}
          <div className="mb-4">
            <p className="text-sm">
              <strong>Incorrect Answers:</strong> {incorrectAnswersCount}
            </p>
          </div>

          <div className="mt-4">
            <p className="text-sm">
              Great job! Keep practicing to improve your performance.
            </p>
          </div>
          <Button onClick={() => dispatch(quizResultCheck())} className="mt-5">
            Check Quiz Result
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizSummary;
