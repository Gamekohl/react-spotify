export enum Breakpoint {
    xs = '576px',
    sm = '768px',
    md = '992px',
    lg = '1200px',
    xl = '1400px',
    xxl = '1401px',
};

export const minWidth = (breakpoint: Breakpoint) => {
    return `(min-width: ${breakpoint})`;
}

export const maxWidth = (breakpoint: Breakpoint) => {
    return `(max-width: ${breakpoint})`;
}