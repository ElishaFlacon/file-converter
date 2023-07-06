import { useState } from "react";


type Hook = (callback: Function) => [fetching: Function, isLoading: boolean, error: string];


export const useFetching: Hook = (callback: Function) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async () => {
        setError('');

        try {
            setIsLoading(true);
            await callback();
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, error];
}