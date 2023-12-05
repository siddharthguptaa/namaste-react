import { useRouteError } from "react-router-dom";

const Error = () => {
const err = useRouteError();
console.log(err);

    return (
        <div>
            <h1>Oops!!</h1>
            <h1>Something Went Wrong!</h1>
            <h3>{err.status}:{err.statusText}:{err.data}:{err.error.stack}</h3>
        </div>
    );
}

export default Error;