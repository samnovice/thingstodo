import 'whatwg-fetch';

export default class Service{
    // static extractData(response){
    //     if(response.status === 200){
    //         return response.json();
    //     }
    // }
    static getTasks(){
        function extractData(response){
            if(response.status === 200){
                return response.json();
            }
            throw new Error(`Unable to get data. status ${response.status}`);
        }
        return fetch('/tasks')
        .then(response => extractData(response));
        // .then(data => console.log(data));
    }
    static addTask(taskName){
        return fetch(`/tasks`, {
                                    method : 'POST',
                                    headers : { 'Content-Type' : 'application/json' },
                                    body : JSON.stringify({name : taskName})
                                });
    }
    static togglePending(taskId){
        return fetch(`/tasks/toggle/${taskId}`, {method : 'POST'});
    }
}