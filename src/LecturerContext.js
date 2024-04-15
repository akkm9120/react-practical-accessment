import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

// create the customer context
export const LecturerContext = createContext();

const BASE_API_URL = "https://3000-kunxinchor-sctp2mysql-.ws-us110.gitpod.io";

export default function LecturerContextData(props) {
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(BASE_API_URL + "/api/lecturer");
            console.log(response.data);
            setlecturer(response.data.lecturer);
        }

        fetchData();


    }, []); // if the dependency array is empty, it means calls
    // the effect function once and only once after the first render

    const [lecturer, setlecturer] = useState([

    ]);

    const dataOperations = {
        getlecturer: () => {
            return lecturer
        },
        addCustomer: async (firstName, lastName, companyId, rating, employees) => {

            const response = await axios.post(BASE_API_URL + "/api/lecturer", {
                first_name: firstName,
                last_name: lastName,
                company_id: companyId,
                rating: rating,
                employees: employees
            });


            const newCustomer = {
                customer_id: response.data.new_customer_id,
                first_name: firstName,
                last_name: lastName,
                company_id: companyId,
                rating: rating,
                employees: employees
            }
            const modified = [...lecturer, newCustomer];
            setlecturer(modified);

        }
    }

    // JSX
    return (
        // The value of the LecturerContext is the `context` object
        // 'Provider' means any child component will have access to the value
        <LecturerContext.Provider value={dataOperations}>
            {props.children}
        </LecturerContext.Provider>
    )
}