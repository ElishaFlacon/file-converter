export interface IFile {
    created_at: string;
    current_format: string;
    file: string;
    file_name: string;
    id: number;
    is_available: boolean;
    name: string;
    previous_format: string;
    user: number;
}


export interface IFileState {
    data: IFile[] | null;
    loading: boolean;
    error: string | null;
}


export enum FileActionTypes {
    FILE_GET = 'FILE_GET',
    FILE_GET_SUCCESS = 'FILE_GET_SUCCESS',
    FILE_GET_ERROR = 'FILE_GET_ERROR',
}


interface IFileGetAction {
    type: FileActionTypes.FILE_GET;
}

interface IFileGetSuccessAction {
    type: FileActionTypes.FILE_GET_SUCCESS;
    payload: IFile[];
}

interface IFileGetErrorAction {
    type: FileActionTypes.FILE_GET_ERROR;
    payload: string;
}


export type FileAction = IFileGetAction | IFileGetSuccessAction | IFileGetErrorAction;
