function calculateNumbers(var1, var2) {
    return var1 + var2;
}

// Get current time in Korea
function getTimeInKorea() {
    return new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" });
}
