async function fetchData(finalPath){
    // console.log(finalPath);
    var res = await fetch(finalPath);
    // console.log(res);
    var response = await res.json();
    // console.log(response['results']);
    return response['results']
}

export default fetchData;