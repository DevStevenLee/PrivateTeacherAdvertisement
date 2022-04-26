
export default fn => (props) => {
    Promise.resolve(fn(props)).catch(err => {
        if(err.response){
            console.log(err.response.data);
        }
    });
}