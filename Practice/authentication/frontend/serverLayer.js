const SERVER = 'http://localhost:8000';

// -------------------- User Signup --------------------
export const signupHandle = async (data) => {
  try {
    const res = await fetch(`${SERVER}/api/create-user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include', // allow JWT cookie to be set
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) throw new Error(result.message || 'Signup failed');
    return result;
  } catch (error) {
    console.error('Signup Error:', error.message);
    throw error; // let frontend handle the error
  }
};

// -------------------- User Login --------------------
export const loginHandle = async (data) => {
  try {
    const res = await fetch(`${SERVER}/api/login-user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include', // allow JWT cookie to be set
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) throw new Error(result.message || 'Login failed');
    return result;
  } catch (error) {
    console.error('Login Error:', error.message);
    throw error;
  }
};

// -------------------- Get All Tasks --------------------
export const getAllTasks = async () => {
  try {
    const res = await fetch(`${SERVER}/api/get-add-admin-post`, {
      method: 'GET',
      credentials: 'include', // send JWT cookie
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.message || 'Failed to fetch tasks');

    return result;
  } catch (error) {
    console.error('Get Tasks Error:', error.message);
    throw error;
  }
};

// -------------------- Create Task --------------------
export const createTask = async (data) => {
  try {
    const res = await fetch(`${SERVER}/api/create-task`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.message || 'Task creation failed');
    return result;
  } catch (error) {
    console.error('Create Task Error:', error.message);
    throw error;
  }
};

// -------------------- Update Task --------------------
export const updateTask = async (id, data) => {
  try {
    const res = await fetch(`${SERVER}/api/update-task/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.message || 'Task update failed');
    return result;
  } catch (error) {
    console.error('Update Task Error:', error.message);
    throw error;
  }
};
export const deleteTask = async (id) => {
  try {
    const res = await fetch(`${SERVER}/api/delete-task/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    const result = await res.json();
    if (!res.ok) throw new Error(result.message || 'Task update failed');
    return result;
  } catch (error) {
    console.error('Update Task Error:', error.message);
    throw error;
  }
};
