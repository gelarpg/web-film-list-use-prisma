import Header from "@/components/Dashboard/Header";
import { authUserSection } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const user = await authUserSection();
  const comments = await prisma.comment.findMany({
    where: { user_email: user?.email },
  });
  return (
    <section className="mt-4 px-4 w-full">
      <Header title="My Comment" />
      <div className="grid grid-cols-1 py-2 gap-4">
        {comments.map((comment) => {
          return (
            <Link
              href={`/anime/${comment.anime_mal_id}`}
              key={comment.id}
              className="bg-white text-quaternary p-4 "
            >
              <p className="text-md">{comment.anime_title}</p>
              <p className="text-sm">{comment.comment}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
