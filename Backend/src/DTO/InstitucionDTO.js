class InstitucionDTO {
  constructor(id, nombreinstitucion, reseniainstitucion, logoinstitucion, nombrecontacto, correocontacto, celularcontacto, usuario, sectorpertenencia) {
    this.id = id;
    this.nombreinstitucion = nombreinstitucion;
    this.reseniainstitucion = reseniainstitucion;
    this.logoinstitucion = logoinstitucion;
    this.nombrecontacto = nombrecontacto;
    this.correocontacto = correocontacto;
    this.celularcontacto = celularcontacto;
    this.usuario = usuario;
    this.sectorpertenencia = sectorpertenencia;
  }
}

module.exports = InstitucionDTO;
