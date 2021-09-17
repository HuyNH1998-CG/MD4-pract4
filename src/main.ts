let money = 10000;
const buyCar = (car: any) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve(`can buy ${car}`);
            } else {
                reject(`not enought moneh`);
            }
        }, 100);
    }))
}
money = 100001;
const promise = buyCar("vinslow").then(value => {
    console.log(value);
}, error => {
    console.log(error);
})