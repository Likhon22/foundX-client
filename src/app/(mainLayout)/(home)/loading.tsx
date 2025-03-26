import CardSkeleton from "@/src/components/UI/CardSkeleton";
import Container from "@/src/components/UI/Container";

const loading = () => {
  return (
    <Container>
      <div className="grid grid-cols-3 justify-center items-center gap-6">
        {[...Array(9)].map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    </Container>
  );
};

export default loading;
