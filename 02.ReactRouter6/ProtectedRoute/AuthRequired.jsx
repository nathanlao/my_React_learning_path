import React from "react"
import { Outlet, Navigate } from "react-router-dom"

export default function AuthRequired() {
    // Check the authenticated status of the user (hard-coded)
    const auth = { token: "1234" }
    // If they're NOT logged in
        // Send them to the login page
    if (!auth.token) {
        return <Navigate to="/login" />
    } 
    // If they ARE logged in
        // Render the Outlet
    return <Outlet />

}