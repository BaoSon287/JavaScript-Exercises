const BASE_URL = "http://localhost:3000";

const getUsers = async (userId) => {
    const response = await fetch(`${BASE_URL}/users?id=${userId}`);
    return response.json();
}
const getPosts = async (userId) => {
    const response = await fetch(`${BASE_URL}/posts?id=${userId}`);
    return response.json();
}
const getUserWithPosts = async (userId) => {
    const userData = await getUsers(userId);
    const postData = await getPosts(userId);
    console.log({
        users: userData,
        posts: postData
    });

}
getUserWithPosts(1);