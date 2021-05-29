import React, { useCallback, useEffect, useState } from 'react';

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: ()=>{},
});

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjustedExpiration = new Date(expirationTime).getTime();
    const remaining = adjustedExpiration - currentTime;

    return remaining;
};

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');
 
    const remainingTime = calculateRemainingTime(storedExpirationDate);

    if (remainingTime <= 60000){
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }

    return {token: storedToken, duration: remainingTime}
}

let logoutTimer;
export const AuthContextProvider = (props) => {
    const tokenData = retrieveStoredToken();
    let init;

    if(tokenData) {
        init = tokenData.token;
    }

    const [token, setToken] = useState(init);

    const userIsLoggedIn = !!token; //check if token is there or not bool

    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        if(logoutTimer) {
            clearTimeout(logoutTimer);
        }

    },[]);

    const loginHandler = (token, expirationTime) => {
        setToken(token);

        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime);

        const remTime = calculateRemainingTime(expirationTime);

        logoutTimer = setTimeout(logoutHandler, remTime);
        };

    useEffect(()=>{
        if(tokenData) {
            console.log(tokenData.duration)
            logoutTimer = setTimeout(logoutHandler, tokenData.duration)
        }
    }, [tokenData, logoutHandler])

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
};


export default AuthContext;
 