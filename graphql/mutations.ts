import { gql } from "@apollo/client";

export const ADD_USER = gql`
    mutation addUser($name: String, $email: String, $role: String) {
        addUser(name: $name,email: $email,role: $role) {
        id
        name
        email
        role
        }
    }
`;