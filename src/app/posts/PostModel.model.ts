export class PostModel {
  titulo : string;

  _id : string;

  conteudo : string;

  criador : string;

  imagePath: string;

  constructor(titulo, conteudo) {
    this.titulo = titulo;
    this.conteudo = conteudo;
  }
}
