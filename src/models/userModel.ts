import { Schema, model } from 'mongoose';
import { User } from '../interfaces/user';

const userSchema = new Schema<User>({
    firstName: { type: String, required: true, min: 2, max: 255},
    lastName: { type: String, required: true, min: 2, max: 255},
    username: { type: String, required: true, min: 6, max: 255},
    email: { type: String, required: true, min: 6, max: 255, unique: true},
    password: { type: String, required: true, min: 6, max: 255},
    profileIcon: { type: String, required: false, min: 6, max: 255},
    country: { type: String, required: false, min: 6, max: 255},
    favClub: { type: String, required: false, min: 6, max: 255},
    registerDate: { type: Date, required: true, default: Date.now }
});

export const userModel = model<User>('User', userSchema);