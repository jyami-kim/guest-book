import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.github.com/repos/',
});

export const getGithubIssue = async (owner: string, repo: string) => {
    const { data } = await instance.get(`${owner}/${repo}/issues`);
    return data;
}