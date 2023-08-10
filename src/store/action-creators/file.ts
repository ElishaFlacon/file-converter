import { Dispatch } from "redux";
import FileService from "../../service/File.service";
import { FileAction, FileActionTypes } from "../../types/File";


export const filesGetAll = () => {
    return async (dispatch: Dispatch<FileAction>) => {
        try {
            dispatch({ type: FileActionTypes.FILE_GET });

            const response = await FileService.getUserFiles();

            dispatch({
                type: FileActionTypes.FILE_GET_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            dispatch({
                type: FileActionTypes.FILE_GET_ERROR,
                payload: 'error on get all files'
            });
        }
    }
}