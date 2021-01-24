import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('UserDatabase.db');

const INSERT_SQL = 'INSERT INTO messages (msg, date, emoji1, emoji2, emoji3, emoji4, emoji5, cv1, cv2, cv3, cv4, cv5) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
const GET_DAY_SQL = 'SELECT * FROM messages WHERE date=?'
const GET_MONTH_SQL = 'SELECT * FROM messages WHERE date LIKE ?'

export default function insertMessage(values) {
    db.transaction(tx => {
        tx.executeSql(
            INSERT_SQL,
            values,
            null,
            (tx, err) => { console.log(err); }
        )},
        (err) => { console.log(err); },
        null
    );
}

export default function getMessages(date) {
    var data = [];
    db.transaction(tx => {
        tx.executeSql(
            GET_DAY_SQL,
            [date],
            (tx, results) => {
                data = results.rows.array;
            },
            (tx, err) => { console.log(err); }
        )},
        (err) => { console.log(err); },
        null
    );
    return data;
}

export default function getMonthMessages(date) {
    /* date should be in the format YYYY-MM-DD */
    var data = [];
    let month = date.slice(0, 9) + '%'
    db.transaction(tx => {
        tx.executeSql(
            GET_MONTH_SQL,
            [month],
            (tx, results) => {
                data = results.rows.array;
            },
            (tx, err) => { console.log(err); }
        )},
        (err) => { console.log(err); },
        null
    );
}