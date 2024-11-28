export interface Tarefa{
    id?: string;
    titulo : String;
    descricao : String;
    status : string;
    criadoEm?: Date
    categoriaId: number;
}