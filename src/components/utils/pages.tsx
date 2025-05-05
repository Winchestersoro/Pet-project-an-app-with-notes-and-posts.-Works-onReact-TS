interface Pages {
    totalCount : number
    limit : number
}


export const getPageCount = ({totalCount, limit}: Pages) => {
    return Math.ceil(totalCount / limit)
}

export const getArrayPages = (totalPages: number): number[] => {
    const result: number[] = [];
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1);
    }
    return result;
};

