import React, { useEffect, useState } from 'react';
import { getIssues } from '../services/api';
import styles from '../css//IssueList.module.css';


type IssueList = {
    id: number;
    title: string;
    body: string;
};

const IssuesList: React.FC = () => {
    const [issues, setIssues] = useState<IssueList[]>([]);

    const userName = process.env.REACT_APP_GITHUB_USERNAME;
    if (!userName) {
        throw new Error('REACT_APP_GITHUB_USERNAME is not defined');
    }

    const repositoryName = process.env.REACT_APP_GITHUB_REPOSITORY_NAME;
    if (!repositoryName) {
        throw new Error('REACT_APP_GITHUB_REPOSITORY_NAME is not defined');
    }

    useEffect(() => {
        const fetchIssues = async () => {
            const issues = await getIssues(userName, repositoryName);
            setIssues(issues);
        };

        const interval = setInterval(() => {
            fetchIssues();
        }, 5000);     // 5초마다 getIssues 함수를 호출함.

        return () => clearInterval(interval);  // component unmount시 interval을 정리함.
    }, []);

    return (
        <ul>
            {issues.map((issue) => (
                    <li className={styles.issue} key={issue.id}>
                        <h2>{issue.title}</h2>
                    </li>
                ))}
        </ul>
    );
};

export default IssuesList;