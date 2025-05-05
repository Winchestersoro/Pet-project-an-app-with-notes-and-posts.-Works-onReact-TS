import { useState } from "react";

interface UseFetching {
    callback: (id?:number) => Promise<void>; 
    
}
const useFetching = ({ callback }: UseFetching) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>(''); 
    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback(); // Здесь callback должен быть функцией
        } catch (e) {
            const customError = e as Error;
            setError(customError.message || 'Произошла неизвестная ошибка'); 
        } finally {
            setIsLoading(false);
        }
    };
    
    return { isLoading, error, fetching };
};
export default useFetching;