export interface User extends Document {
id: string, 
firstName: string,
lastName: string,
username: string,
email: string, 
password: string,
profileIcon: string,
country: string,
favClub: string,
registerDate: Date,
}