function checkUserLogin() {
    if (localStorage.getItem("user") !== null) {
        return true;
    }
    return false;
}

function checkAdminLogin() {
    if (localStorage.getItem("admin") !== null) {
        return true;
    }
    return false;
}

function saveUserToken(token) {
    localStorage.setItem("user", token);
}

function saveAdminToken(token) {
    localStorage.setItem("admin", token);
}

function getUserToken() {
    if (checkUserLogin) {
        return localStorage.getItem("user");
    }
}

function getAdminToken() {
    if (checkAdminLogin) {
        return localStorage.getItem("admin");
    }
}

function removeUserToken() {
    localStorage.removeItem("user");
}

function removeAdminToken() {
    localStorage.removeItem("admin");
}

export {
    checkAdminLogin,
    checkUserLogin,
    saveAdminToken,
    saveUserToken,
    removeUserToken,
    removeAdminToken,
    getAdminToken,
    getUserToken
};