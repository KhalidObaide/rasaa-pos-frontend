export const getJWT = () => {
    return localStorage.getItem("jwt");
}

export const getDir = (): string => {
    return localStorage.getItem("dir") || "ltr";
}

export const getLang = (): string => {
    return localStorage.getItem("lang") || "english";
}

