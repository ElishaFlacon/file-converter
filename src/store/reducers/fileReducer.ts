import { FileAction, FileActionTypes, IFileState } from "../../types/File";


const initalState: IFileState = {
    data: null,
    loading: false,
    error: null,
}


export const fileReducer = (state: IFileState = initalState, action: FileAction): IFileState => {
    switch (action.type) {
        case FileActionTypes.FILE_GET:
            return { data: null, loading: true, error: null };
        case FileActionTypes.FILE_GET_SUCCESS:
            return { data: action.payload, loading: false, error: null };
        case FileActionTypes.FILE_GET_ERROR:
            return { data: null, loading: false, error: action.payload };
        default:
            return state;
    }
}