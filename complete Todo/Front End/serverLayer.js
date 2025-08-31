export const postData = async (item) => {
  try {
    const response = await fetch('http://localhost:3001/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('❌ Error while posting data:', error);
  }
};

export const getData = async () => {
  try {
    const response = await fetch('http://localhost:3001/todo', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('❌ Error while fetching data:', error);
  }
};

export const deleteData = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/todo/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('❌ Error while deleting data:', error);
  }
};

export const completeData = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/todo/${id}/complete`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('❌ Error while marking todo as completed:', error);
  }
};
