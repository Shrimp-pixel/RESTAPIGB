import React from "react";
import {Link} from "react-router-dom"

const AuthorItem = ({author})=>{
    return(
    <tr>
        <td>
            <Link to={`/authors/${author.id}`}> {author.first_name} </Link>
        </td>
        <td>{author.last_name}</td>
        <td>{author.email}</td>
    </tr>
    )
}

const AuthorList=({authors})=>{

    return(
        <table>
            <th>First name</th>
            <th>Last name</th>
            <th>email</th>
            {authors.map((author_) => <AuthorItem author={author_} />)}
        </table>
    )
}

export default AuthorList
