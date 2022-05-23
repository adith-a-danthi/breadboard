import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';

const videosContext = createContext();

const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);

  const getAllVideos = async () => {
    try {
      const response = await axios.get('/api/videos');
      setVideos(response.data.videos);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCategories = async () => {
    try {
      const response = await axios.get('/api/categories');
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllVideos();
    getAllCategories();
  }, []);

  const topVideos = videos.filter((ele) => ele?.topVideos);

  return (
    <videosContext.Provider value={{ videos, categories, topVideos }}>
      {children}
    </videosContext.Provider>
  );
};

const useVideos = () => useContext(videosContext);

export { useVideos, VideosProvider };
