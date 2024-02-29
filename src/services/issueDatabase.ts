// @ts-ignore
import {getIssues} from "./api";

interface IssueDatabase {
    getIssues(): Promise<any>;
}

const userName = process.env.REACT_APP_GITHUB_USERNAME || (() => {
    throw new Error('REACT_APP_GITHUB_USERNAME is not defined')
})();

const repositoryName = process.env.REACT_APP_GITHUB_REPOSITORY_NAME || (() => {
    throw new Error('REACT_APP_GITHUB_REPOSITORY_NAME is not defined')
})();

export class ApiDatabase implements IssueDatabase{

    private static instance: ApiDatabase;

    private constructor() { }

    public static getInstance(): ApiDatabase {
        if (!ApiDatabase.instance) {
            ApiDatabase.instance = new ApiDatabase();
        }
        return ApiDatabase.instance;
    }

    getIssues(): Promise<any> {
        return getIssues(userName, repositoryName)
    }

}