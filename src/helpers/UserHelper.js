export function isLogged (user) {
    return (user && user.login_token);
}

export function logout (user, setUser) {
    setUser(null)
}

export function isAdmin (user) {
    return (user.isAdmin)
}