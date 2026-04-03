import React, { createContext, useContext, useState } from 'react';

// Define the shape of our context
interface AuthContextType {
    user: any; // Define accordingly
    signIn: (credentials: any) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState(null);

    const signIn = async (credentials: any) => {
        // Logic for signing in
        // setUser(userData);
    };

    const signOut = async () => {
        // Logic for signing out
        // setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};