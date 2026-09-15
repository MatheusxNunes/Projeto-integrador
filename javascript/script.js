import Dexie from 'https://unpkg.com/dexie/dist/mordern/dexie.mjs';

const db = new Dexie('MeuBanco');

db.version(1).stores({
    usuarios: '++id, nome, &email' 
});

async function execurtar(){

    try{
        const idgerado = await db.usuarios.add({
            nome: 'Ana',
            email: 'anabanana@email.com'
        });
    console.log('Usuario inserido com sucesso! ID ${idGerado}');
    
    } catch (error) {
        if (error.name === 'ConstrainerError') {
            console.warn('Aviso: Este e-mail ja está cadastro!');
        }
        else {
            console.error('Erro ao salvar no banco:', erro);
        }
    }

await db.usuarios.add({nome: 'Ana', email: 'anabanana@gmail.com'});

const todos = await db.usuarios.toarray();
console.log(todos);
}

execurtar(); 