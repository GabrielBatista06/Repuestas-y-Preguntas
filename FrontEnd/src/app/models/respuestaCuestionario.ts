import { RespuestaCuestionarioDetalle } from "./respuestaCuestionarioDetalle";

export class RespuestaCuestionario{
  cuestionarioId!: number;
  nombreParticipante: any;
  listRtaCuestionarioDetalle!: RespuestaCuestionarioDetalle[];
}
