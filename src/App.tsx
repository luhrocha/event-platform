import {gql, useQuery} from "@apollo/client";
import {useEffect} from "react"
import {Event} from "./pages/Event";
import {client} from "./lib/apollo";


const GET_LESSONS_QUERY = gql `
    query{
        lessons{
            id
            title
        }
    }
`;

interface Lesson {
    id: string;
    title: string;
}

function App() {
    const {data} = useQuery < {
        lessons: Lesson[]
    } > (GET_LESSONS_QUERY);

    /* useEffect(() => {
        client.query({query: GET_LESSONS_QUERY}).then(response => {
            console.log(response.data)
        })
    }, []); */
    return (<div>
        <Event/>
    </div>);
}

export default App
