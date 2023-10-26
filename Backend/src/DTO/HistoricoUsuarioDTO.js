class HistoricoUsuarioDTO {
  constructor(id_h, id_u, idusuario, contrasenia, tipousuario_id) {
    this.id_h = id_h;
    this.id_u = id_u;
    this.idusuario = idusuario;
    this.contrasenia = contrasenia;
    this.tipousuario_id = tipousuario_id;
  }
}

module.exports = HistoricoUsuarioDTO;
