export const acceptCookies = (user) => {
    return {
        type: "ACCEPTCOOKIES"
    }
}

export const rejectCookies = (user) => {
    return {
        type: "REJECTCOOKIES"
    }
}

export const revokeCookies = () => {
    return {
        type: "REVOKECOOKIES"
    }
}

export const showNavigation = () => {
    return {
        type: "SHOWNAVIGATION"
    }
}

export const hideNavigation = () => {
    return {
        type: "HIDENAVIGATION"
    }
}

export const showContactForm = () => {
    return {
        type: "SHOWCONTACTFORM"
    }
}