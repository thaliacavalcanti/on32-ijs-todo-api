import { randomUUID } from "node:crypto"

export class Task {
    id: string;
    titulo: string;
    descricao: string;
    status: 'ABERTA' | 'FEITA' ;

    constructor(titulo: string, descricao: string){
        this.id = randomUUID();
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = 'ABERTA';
    }
}