const URL = "http://localhost:3000/posts"

function getTodo() {
    return new Promise((resolve, reject) => {
        fetch(URL)
            .then((response) => response.json()
                .then((data) => {
                    if (response.status === 200) {
                        resolve(data);
                    } else {
                        reject("Failure");
                    }
                })
            )
            .catch((err) => {
                reject(err);
            })
    })
}

export { getTodo }