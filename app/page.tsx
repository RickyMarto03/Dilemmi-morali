'use client'
import useTest from "@/hook/useTest";

export default function Home() {
  const { post } = useTest();
  return (

    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {post.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <p className="text-gray-600">{item.content}</p>
        </div>
      ))}
    </div>

  );
}
