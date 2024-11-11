function tempo (request, response){
    const timeNow = new Date();
    response.json({
        date: timeNow.toGMTString()
    });
}
export default tempo;