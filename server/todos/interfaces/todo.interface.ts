import { Document } from 'mongoose';

export interface Todo{
    _id?: string;
    code: string;
    name: string
}