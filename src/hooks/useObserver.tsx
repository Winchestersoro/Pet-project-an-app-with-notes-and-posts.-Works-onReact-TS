import { RefObject, useEffect, useRef } from "react";
interface UseObserverProps {
    ref: RefObject<HTMLElement>; // Ссылка на элемент, который будет наблюдаться
    canLoad: number; 
    isLoading: boolean; 
    callback: () => void; // Функция обратного вызова, которая будет вызвана при пересечении
}
export const useObserver = ({ ref, canLoad, isLoading, callback }: UseObserverProps) => {
    const observer = useRef<IntersectionObserver | null>(null);
    useEffect(() => {
        if (isLoading) return;
        const cb = (entries: IntersectionObserverEntry[],observer) => {
            if (entries[0].isIntersecting && canLoad > 0) {
                callback();
            }
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current); 
        
    }, [isLoading, canLoad, ref, callback]);
};
