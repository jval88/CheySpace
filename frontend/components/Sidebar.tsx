// src/components/Sidebar.tsx
import React, { useEffect, useState } from "react";

interface SocialMediaLink {
  platform: string;
  url: string;
}

const Sidebar: React.FC = () => {
  const [links, setLinks] = useState<SocialMediaLink[]>([]);

  useEffect(() => {
    // Fetch the social media links from the backend
    fetch("/api/social-media-links")
      .then((response) => response.json())
      .then((data) => setLinks(data))
      .catch((error) =>
        console.error("Error fetching social media links:", error)
      );
  }, []);

  return (
    <aside className="sidebar">
      <h3>Follow Chey</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.platform}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
