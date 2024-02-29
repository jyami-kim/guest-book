import React, { useEffect, useState } from 'react';
import styles from '../css//IssueList.module.css';
import {ApiDatabase} from "../services/ApiDatabase";

type ApiIssueList = {
    id: number;
    title: string;
    body: string;
};

const IssuesList: React.FC = () => {
    const [issues, setIssues] = useState<ApiIssueList[]>([]);

    useEffect(() => {
        const fetchIssues = async () => {
            const issues = await ApiDatabase.getInstance().getIssues();
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