"use client";
import { TPosts } from "@/src/types/posts";
import { Card, Image, CardFooter, Button } from "@heroui/react";
import { format } from "date-fns";
const PostsCard = ({ post }: { post: TPosts }) => {
  const formattedDate = format(new Date(post.dateFound), "dd MMMM, yyyy");
  return (
    <Card isFooterBlurred className="border-none h-[300px] w-full" radius="lg">
      <Image
        removeWrapper
        alt={post.title}
        className="object-cover
        transition duration-700 ease-in-out hover:scale-105"
        height={200}
        src={post.images[0]}
      />
      <CardFooter className="justify-between flex-col before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1  top-1/2 shadow-small  z-10">
        <p className="text-tiny text-white/80">{post.title}</p>
        <div className="flex items-center">
          <p>{post.location},</p>
          <p>{post.city}</p>
        </div>
        <p>{formattedDate}</p>
        <Button
          className="text-tiny text-white bg-black/20"
          color="default"
          radius="lg"
          size="sm"
          variant="flat"
        >
          See Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostsCard;
