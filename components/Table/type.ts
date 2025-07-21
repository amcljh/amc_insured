import { TableHTMLAttributes } from "react";

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  columns: string[];
  rows: string[][];
}
