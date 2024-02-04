export const joinString = <T>(items: T[], key: keyof T) => {
    return items.reduce((a, c, i) => {
        const isLast = i == items.length - 1;
        return a + c[key] + (isLast ? "" : "، ");
    }, "");
};

export const toPersianDuration = (time: string) => {
    const [hour, minute] = time.split(":");

    let result = "";

    if (!isNaN(+hour) && +hour > 0) {
        result += `${+hour} ساعت و `;
    }

    if (!isNaN(+minute)) {
        result += `${+minute} دقیقه `;
    }

    return result;
};



