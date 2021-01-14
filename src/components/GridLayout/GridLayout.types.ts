export interface GridLayoutProps {
    columnsAmount: number;
    children: (width: number) => JSX.Element | JSX.Element[]
    rowHeight?: number;
}