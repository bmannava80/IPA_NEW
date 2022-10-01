import ReactDataGrid from "react-data-grid";
import { useState } from "react";

const Example = () => {
    const [filters, setFilters] = useState({});

    const columns = [
        {
            key: "id",
            name: "ID"
        },
        {
            key: "title",
            name: "Title"
        },
        {
            key: "firstName",
            name: "First Name"
        },
        {
            key: "lastName",
            name: "Last Name"
        },
        {
            key: "email",
            name: "Email"
        },
    ]
    const rows = [
        {
            id: 0,
            title: "developer",
            firstName: "john",
            lastName: "doe",
            email: "johndoe111@yopmail.com",
        },
        {
            id: 0,
            title: "developer",
            firstName: "john",
            lastName: "doe",
            email: "johndoe111@yopmail.com",
        },
        {
            id: 0,
            title: "developer",
            firstName: "john",
            lastName: "doe",
            email: "johndoe111@yopmail.com",
        },
        {
            id: 0,
            title: "developer",
            firstName: "john",
            lastName: "doe",
            email: "johndoe111@yopmail.com",
        },
        {
            id: 0,
            title: "developer",
            firstName: "john",
            lastName: "doe",
            email: "johndoe111@yopmail.com",
        },
        {
            id: 0,
            title: "developer",
            firstName: "john",
            lastName: "doe",
            email: "johndoe111@yopmail.com",
        },
        {
            id: 0,
            title: "developer",
            firstName: "john",
            lastName: "doe",
            email: "johndoe111@yopmail.com",
        },
        {
            id: 0,
            title: "developer",
            firstName: "john",
            lastName: "doe",
            email: "johndoe111@yopmail.com",
        },
        {
            id: 0,
            title: "developer",
            firstName: "john",
            lastName: "doe",
            email: "johndoe111@yopmail.com",
        },
        {
            id: 0,
            title: "developer",
            firstName: "john",
            lastName: "doe",
            email: "johndoe111@yopmail.com",
        },
        {
            id: 0,
            title: "developer",
            firstName: "john",
            lastName: "doe",
            email: "johndoe111@yopmail.com",
        },
        {
            id: 0,
            title: "developer",
            firstName: "john",
            lastName: "doe",
            email: "johndoe111@yopmail.com",
        },

    ]

    const ROW_COUNT = 50;

    return (
        <ReactDataGrid
            className="rdg-light"
            columns={columns}
            minHeight={500}
            rows={rows}
        />
    );
}
export default Example
