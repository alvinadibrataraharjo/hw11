var conn = require('../connection/connection.js')

class Todo {
    constructor(id, title){
        this.id = id;
        this.title = title
    }

    static showAllTodo(callback){
        let query = `SELECT * FROM todo where is_deleted = false;`;

        conn.query(query, (err, result) => {
            if(err){
                callback(err, null);
            }
            else{
                callback(null, result);
            }
        });
        
    }

    static showTodoById(id, callback){
        let query = `SELECT * FROM todo where id = $1 and is_deleted = false;`;

        conn.query(query, [id], (err, result) => {
            if(err){
                console.log(err); 
                callback(err, null);
            }
            else{
                callback(null, result);
            }
        });
        
    }

    static createTodo(data, callback){
        let query = `
                INSERT INTO todo (title) VALUES ($1);
            `;

            let arrData = [data];

            conn.query(query, arrData, (err, result) => {
                console.log(arrData)
                if(err){
                    callback(err, null);
                }
                else{
                    console.log(`${data.title} sudah masuk datanya..`);
                    callback(null, null);
                }
            });
    }

    
    static updateById(id,data, callback){
        let query = `
                update todo set title = $1 where id = $2;
            `;

            let arrData = [data, id];

            console.log(arrData)

            conn.query(query, arrData, (err, result) => {
                console.log(arrData)
                if(err){
                    callback(err, null);
                }
                else{
                    console.log(`${data.title} sudah masuk datanya..`);
                    callback(null, null);
                }
            });
    }

    static delete(id, callback){
        let query = `
                update todo set is_deleted = true where id = $1;
            `;

            let arrData = [id];

            console.log(arrData)

            conn.query(query, arrData, (err, result) => {
                console.log(arrData)
                if(err){
                    callback(err, null);
                }
                else{
                    console.log('deleted');
                    callback(null, null);
                }
            });
    }

   
}

module.exports = Todo;