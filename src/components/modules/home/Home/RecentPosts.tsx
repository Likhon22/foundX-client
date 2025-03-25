import Container from "@/src/components/UI/Container";
import { getRecentPosts } from "@/src/services/RecentPosts";
import { Button } from "@heroui/button";
import Link from "next/link";

const RecentPosts = async () => {
  const posts = await getRecentPosts();
  console.log(posts);

  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recent Posts</h2>
        <p className="text-center text-gray-400">
          A list of items that have been recently found and reported
        </p>
      </div>
      <div>
        <h1>Recent Posts</h1>
        {/* Recent posts will be fetched here */}
        <div>
          {/* Loop through each post */}
          {posts?.data?.map((post) => (
            <div key={post._id}>
              <h3>{post.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Button>
          <Link href="/found-item">View All</Link>
        </Button>
      </div>
    </Container>
  );
};

export default RecentPosts;
