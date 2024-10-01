import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Form, { FormField } from "../components/Form"; // Import the Form component and FormField type

interface Story {
  _id: string;
  name: string;
  message: string;
  imageUrl: string;
  date: string;
}

interface NewStory {
  name: string;
  message: string;
  imageFile: File | null;
}

const ManageMyStoryPage: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [newStory, setNewStory] = useState<NewStory>({
    name: "",
    message: "",
    imageFile: null,
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/admin/mystory")
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((err) => console.error("Error fetching stories:", err));
  }, []);

  const handleDelete = (id: string) => {
    fetch(`/admin/mystory/${id}`, {
      method: "DELETE",
    })
      .then(() =>
        setStories(stories.filter((story: Story) => story._id !== id))
      )
      .catch((err) => console.error("Error deleting story:", err));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === "imageFile" && files && files.length > 0) {
      setNewStory({ ...newStory, imageFile: files[0] });
    } else {
      setNewStory({ ...newStory, [name]: value });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!newStory.name || !newStory.message || !newStory.imageFile) {
      setError("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("name", newStory.name);
    formData.append("message", newStory.message);
    formData.append("imageFile", newStory.imageFile as File);

    fetch("/admin/mystory", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setStories([...stories, data]);
        setNewStory({ name: "", message: "", imageFile: null });
        setError(null);
      })
      .catch((err) => {
        console.error("Error adding story:", err);
        setError("Failed to add story");
      });
  };

  const formFields: FormField[] = [
    {
      id: "name",
      label: "Name",
      type: "text",
      value: newStory.name,
      onChange: handleInputChange,
    },
    {
      id: "message",
      label: "Message",
      type: "textarea",
      value: newStory.message,
      onChange: handleInputChange,
    },
    {
      id: "imageFile",
      label: "Upload Image",
      type: "file",
      onChange: handleInputChange,
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-white mb-6">
        Manage My Story Entries
      </h1>

      {stories.map((story: Story) => (
        <div
          key={story._id}
          className="mb-6 p-4 border rounded-md border-gray-700 bg-gray-800"
        >
          <h2 className="text-xl font-semibold text-white">{story.name}</h2>
          <p className="text-gray-400">{story.message}</p>
          <img
            src={story.imageUrl}
            alt={story.name}
            className="mt-4 max-w-xs"
          />
          <p className="text-gray-500 text-sm mt-2">
            {new Date(story.date).toLocaleDateString()}
          </p>
          <button
            onClick={() => handleDelete(story._id)}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500"
          >
            Delete
          </button>
        </div>
      ))}

      <h2 className="text-xl font-semibold text-white mt-10 mb-4">
        Add New Story
      </h2>

      <Form
        title="Add New Story"
        fields={formFields}
        onSubmit={handleSubmit}
        submitText="Add Story"
      />

      {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default ManageMyStoryPage;
