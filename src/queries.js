import gql from 'graphql-tag';

export const GET_QUERY = gql`
    query ($ID : String!)
    {
        user(ID : $ID)
        {
            userName,
            firstName,
            lastName,
            picture,
            email,
            progress,
            responses
        },
        questions
        {
            questionID,
            question,
            optionOne,
            optionTwo,
            optionThree,
            optionFour,
            correctOption
        }
    }
`;

export const ADD_RESPONSE = gql`
    mutation AddResponse($ID: String!, $progress: Int!, $response : String!) {
        addResponse(ID: $ID, progress: $progress, response: $response) {
            progress
        }
    }
`;