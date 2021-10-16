export default class UserHelper {
    static isLogged (user) {
        return (user)
    }
    
    static logout (user, setUser) {
        setUser(null)
    }
    
    static isAdmin (user) {
        return (user.isAdmin)
    }
}