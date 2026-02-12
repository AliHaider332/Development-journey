import { config } from '../Configs/Axios.js';
export const getAllBlogs = async (req, res) => {
  try {
    // const result = await fetch('https://dummy-json.mock.beeceptor.com/posts');
    const result = await config.get('posts');
    // if (!result.ok) {
    //   return res
    //     .status(result.status)
    //     .json({ message: 'Something went wrong' });
    // }
    const data = result.data;

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

export const getSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await config.get(`posts/${id}`);
    // const result = await fetch(
    //   `https://dummy-json.mock.beeceptor.com/posts/${id}`
    // );
    // if (!result.ok) {
    //   return res
    //     .status(result.status)
    //     .json({ message: 'Something went wrong' });
    // }
    const data =  result.data;
    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};
