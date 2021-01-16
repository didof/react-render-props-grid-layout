export interface GridLayoutProps {
    columnsAmount: number;
    children?: (width: number) => JSX.Element | JSX.Element[]
    rowHeight?: number;
    items?: configItems[];
    builder?: (item: JSX.Element) => JSX.Element;
}

export interface configItems {
    style: {
        width?: number,
        height?: number,
        backgroundColor?: string
    };
    component: JSX.Element
}