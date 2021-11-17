export default class UserHelper {
    static isLogged (user) {
        user = JSON.parse(localStorage.getItem('user'));
        return (user)
    }
    
    static logout (user, setUser) {
        setUser(null);
        localStorage.setItem('user', null)
    }
    
    static isAdmin (user) {
        return (user && user.isAdmin)
    }
}