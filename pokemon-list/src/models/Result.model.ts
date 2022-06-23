export interface Result {
    name: string;
    url: string;
}

export interface PaginationResult {
    count: number;
    next: string;
    previous?: string;
    results: Result[];
}