import { useGetAllQuizQuery } from "@/redux/api/quizApi";

const AllQuiz = () => {
    const {data,isLoading}=useGetAllQuizQuery(undefined);
    console.log(data)
    return (
        <div className="mb-4">
            All Quiz
        </div>
    );
};

export default AllQuiz;