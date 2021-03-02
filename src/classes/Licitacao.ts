export default class Licitacao {
  id: string
  descricao: string
  data: string
  linkDocumentos: string
  checked?: boolean

  constructor (id: string, desc: string, data: string, link: string) {
    this.id = id
    this.descricao = desc
    this.data = data
    this.linkDocumentos = link
  }
}
