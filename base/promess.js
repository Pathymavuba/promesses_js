/* create a new promise */

/**
 * 
 * @param {string} src 
 * @returns 
 */
const loaderScript = (src)=>{
    const promise = new Promise(function(resolve,reject){
        let script = document.createElement('script');
        script.src = src;
        document.head.append(script)
        script.onload = ()=>resolve('le fichier est ' + src + 'bien chargé')
        script.onerror = ()=>reject(new Error('erreur du chargement du fichier') + src)
    })

    return promise
}

const promise1 =  loaderScript('index.js')
const promise2 = loaderScript('bloc.js')

/*get state pandings */
console.log(promise1,"en attennte")

/* get with Then_catch */
promise1
.then((res)=>console.log("response : ",res))
.catch((err)=>console.log("error :",err))

/*get with async_await */
async function test() {
    try {
        console.log(await promise1,"res")
        
    } catch (error) {
        console.log("err :" , error)
    }
}

test()
