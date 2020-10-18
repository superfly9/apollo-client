import {gql} from '@apollo/client';

export const GET_DOGS = gql`
query get_dogs {
   dogs {
       id
       breed
   }
}`;

export const GET_DOG_PHOTO = gql`
    query dog($breed:String!) {
        dog(breed:$breed) {
            id
            displayImage
        }
    }
`;