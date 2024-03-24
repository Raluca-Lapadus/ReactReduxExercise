const baseURL = `https://randomuser.me/api`;

//using fetch API
export const fetchUsers = async (numberOfUsers: number) => {
    try {
      const response = await fetch(`${baseURL}?results=${numberOfUsers}`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  };