import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Card from "../components/Card";

interface Story {
  _id: string;
  name: string;
  message: string;
  imageUrl: string;
  date: string;
}

const MyStory: React.FC = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("/api/mystory")
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((err) => console.error("Error fetching stories:", err));
  }, []);

  const items = stories.map((story: Story) => ({
    id: story._id,
    content: (
      <Card>
        <img
          src={story.imageUrl}
          alt={story.name}
          className="w-full h-64 object-cover"
        />
        <div className="mt-4">
          <h3 className="text-xl font-semibold">{story.name}</h3>
          <p className="text-gray-700">{story.message}</p>
          <p className="text-gray-500 text-sm">
            {new Date(story.date).toLocaleDateString()}
          </p>
        </div>
      </Card>
    ),
  }));

  return <Carousel items={items} />;
};

export default MyStory;
