'use client';
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

function LoginButton() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        <div>
            {console.log(user)}
            {user ? (
                <>
                    <a href="/api/auth/logout">Logout</a>
                </>
            ) : (
                // User is not logged in, display login button
                <a href="/api/auth/login">Login</a>
            )}
        </div>
    );
}

export default LoginButton;