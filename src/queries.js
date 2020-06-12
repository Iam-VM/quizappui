import gql from 'graphql-tag';

export const GET_QUERY = gql`
    query ($ID : String!)
    {
        user(ID : $ID)
        {
            userName,
            firstName,
            picture,
            branch,
            lastName,
            progress,
            points,
            pointsLevelTwo,
            progressLevelTwo,
            pointsLevelThree,
            progressLevelThree
        },
        questions
        {
            questionID,
            question,
            time,
            haveOptions,
            haveImage,
            optionOne,
            optionTwo,
            optionThree,
            optionFour,
            correctOption
        }
    }
`;

export const ADD_RESPONSE = gql`
    mutation AddResponse($ID: String!, $progress: Int!, $response : String!, $points : Int!) {
        addResponseLevelThree(ID: $ID, progress: $progress, response: $response, points : $points) {
            progress
        }
    }
`;

export const ADD_STUDENT_DATA = gql`
    mutation AddStUdentData($ID: String!, $phone: String!, $branch : String!, $year : String!, $college : String!) {
        addStudentData(ID: $ID, phone: $phone, year: $year, branch : $branch, college : $college) {
            branch
        }
    }
`;