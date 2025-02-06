type Mode = Record<string, string | boolean>;

export function classNames(css: string, mode: Mode = {}, additional: string[] = []): string {
    return [
        css,
        ...additional,
        ...Object.entries(mode).reduce((res, [className, value]) => {
            if(value) {
                res.push(className);
            }
            return res;
        }, [])
    ].join(' ')
}