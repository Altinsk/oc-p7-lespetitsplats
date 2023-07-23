// Helper functions to compare strings
String.prototype.includeCaseInsensitive = function(b) {
    let str1 = this.toLowerCase();
    let str2 = b.toLowerCase();
    return str1.includes(str2);
}

