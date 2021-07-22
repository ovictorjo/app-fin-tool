import { DomPortal } from "@angular/cdk/portal";

export interface RequestCreate {
   
    userId: number;
    value: number;
    category: string;
    output: boolean;
    date: string;
    description: string;
}

export interface ResponseCreate {

    userId: number;
    value: number;
    category: string;
    output: boolean;
    date: string;
    description: string;
    createAt: Date;
}

export interface ResponseInputs {

    userId: number;
    value: number;
    category: string;
    output: boolean;
    date: string;
    description: string;
    createAt: Date;
}