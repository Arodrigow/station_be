import { User } from "generated/prisma";
import { UserTransform } from "./models/userTransform";

export default function userTransform(user: User): UserTransform {
    return {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
    };
}