import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Question = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Question;
