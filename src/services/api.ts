import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.github.com/repos/',
});

export const getIssues = async (owner: string, repo: string) => {
    const { data } = await instance.get(`${owner}/${repo}/issues`);
    console.log(data)
    return data;
}