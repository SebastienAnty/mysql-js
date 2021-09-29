import mysql from "mysql"
import dotenv from "dotenv"

dotenv.config()

const connection = mysql.createConnection ({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
}),


// const createStudents = (student_id, first_name, last_name, email, phone, admission_date) => {
// const newStudentQuery =`INSERT INTO students(student_id, first_name, last_name, email, phone, admission_date)
//     VALUES (${student_id}, "${first_name}", "${last_name}", "${email}", "${phone}", "${admission_date}")`;
// connection.query(newStudentQuery, (error, results) =>{
//             if (error){
//                 console.error(error);
//             }
//             console.log(results);
//         })
// }

// createStudents(9362, "Dwyane", "Wade", "dwade@bocacode.com", 5556268465, 2020-09-29)


const getStudents = (lastName) => {
    const query = `SELECT * 
    FROM students
    WHERE last_name = "${lastName}"`

    connection.query(query, (error, results) =>{

        if (error){
            console.error(error)
        }

        console.log(results)

    })
}

getStudents("Toribio")

const test = connection.query

connection.end()

