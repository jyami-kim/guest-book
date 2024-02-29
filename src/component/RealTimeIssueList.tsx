import React, {useEffect, useState} from 'react';
import styles from '../css//IssueList.module.css';
import {firebaseConfig} from "../secret/secret";
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getDatabase, ref, onValue, get, child} from "firebase/database";

type RealTimeIssueList = {
    id: number;
    title: string;
    body: string;
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();
const dbRef = ref(database, 'issues');


const Issues: React.FC = () => {

    const [issues, setIssues] = useState<RealTimeIssueList[]>([]);

    useEffect(() => {
        const handleData = (snapshot: any) => {
            if (snapshot.val()) {
                const data = snapshot.val().filter((item: any) => item !== null);
                console.log("firebase snap " + JSON.stringify(data));
                setIssues(Object.values(data));
            }
        }

        onValue(dbRef, (snapshot) => {
            console.log(snapshot)
            handleData(snapshot)
        },);
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

export default Issues;