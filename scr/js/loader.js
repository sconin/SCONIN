export function loadHTML(filePath, containerId){
    return new Promise((resolve, reject)=>{
        fetch(filePath)
            .then( response => {
                if (!response.ok){
                    throw new Error(`Http error! Status: ${response.status}`)
                }
                return response.text();
            })
            .then(data =>{
                document.getElementById(containerId).innerHTML = data;
                resolve();
            })
            .catch(erorr => reject(erorr));
    });

}