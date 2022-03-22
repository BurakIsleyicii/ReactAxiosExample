import axios from 'axios';
const baseUrl = "https://jsonplaceholder.typicode.com";

export default async function getData(userId) {
    if (isNaN(userId)) return `${userId} is not a number!`;

    const {data: user} = await axios(`${baseUrl}/users/${userId}`);
    const {data: user_posts} = await axios(`${baseUrl}/posts?userId=${userId}`);
    return { ...user, user_posts };
}