import { openDb } from "./configDB.js";

export async function createTable(){// create table if not exists
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Projeto (modulo INTEGER PRIMARY KEY, cliente TEXT, proposta TEXT, carga INTEGER)')
    })
}

export async function insertProjeto(projeto){// insert a row 
    openDb().then(db=>{
        db.run('INSERT INTO Projeto (cliente, proposta, carga) VALUES (?,?,?)', 
        [
            projeto.cliente, 
            projeto.proposta, 
            projeto.carga,
        ])
    })
}

export async function updateProjeto(modulo, id){// update a row
    openDb().then(db=>{
        db.run('UPDATE Projeto SET cliente = ?, proposta = ?, carga = ? WHERE modulo = ?', 
        [
            modulo.cliente, 
            modulo.proposta, 
            modulo.carga,
            id,
        ])
    })
}

export async function getProjeto(){// get all rows
    return openDb().then(db=>{
        return db.all('SELECT * FROM Projeto')
        .then (res=>res)
    })
}

export async function selectProjeto(modulo){// get a row from "modulo"
    return openDb().then(db=>{
        return db.get('SELECT * FROM Projeto WHERE modulo = ?',[modulo])
        .then (res=>res)
    })
}

export async function deleteProjeto(modulo){// delete a row from "modulo"
    return openDb().then(db=>{
        return db.get('DELETE FROM Projeto WHERE modulo = ?',[modulo])
        .then (res=>res)
    })
}