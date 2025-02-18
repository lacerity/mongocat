import { Schema, Document, model } from "mongoose";

export interface User extends Document {
	id: string;
	email: string;
}

const userSchema = new Schema<User>(
	{
		id: { type: String, required: true },
		email: { type: String, required: true, unique: true },
	},
	{
		_id: false,
		timestamps: true, // automatically adds createdAt and updatedAt fields
		versionKey: false, // Disables the `__v` field
		collection: "users",
		strict: true,
	}
);

const users = model<User>("users", userSchema);

export default users;
