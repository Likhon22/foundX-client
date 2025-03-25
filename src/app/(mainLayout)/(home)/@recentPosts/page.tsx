import Container from "@/src/components/UI/Container";
import PostsCard from "@/src/components/UI/PostsCard";
import { getRecentPosts } from "@/src/services/RecentPosts";
import { TPosts } from "@/src/types/posts";
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

        <div className="grid grid-cols-3 justify-center items-center gap-6">
          {/* Loop through each post */}
          {posts?.data?.map((post: TPosts) => (
            <PostsCard key={post._id} post={post} />
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
