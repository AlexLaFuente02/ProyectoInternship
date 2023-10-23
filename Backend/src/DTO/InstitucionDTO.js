class InstitucionDTO {
    constructor(id, nombreinstitucion, sectorpertenencia, reseniainstitucion, logoinstitucion, nombrecontacto, correocontacto, celularcontacto) {
      this.id = id;
      this.nombreinstitucion = nombreinstitucion;
      this.sectorpertenencia = sectorpertenencia;
      this.reseniainstitucion = reseniainstitucion;
      this.logoinstitucion = logoinstitucion;
      this.nombrecontacto = nombrecontacto;
      this.correocontacto = correocontacto;
      this.celularcontacto = celularcontacto;
    }
}

module.exports = InstitucionDTO;
