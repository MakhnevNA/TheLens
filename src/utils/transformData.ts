interface IOptions {
    [key: string]: string;
}

//трансформация данных под нужный формат
export const transformData = (dateString: string) => {
    const date = new Date(dateString);
    const options: IOptions = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
};
