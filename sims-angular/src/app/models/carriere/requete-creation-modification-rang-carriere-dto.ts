export interface RequeteCreationModificationRangCarriereDTO {
  id?: number;
  numero: number;
  titre: string;
  salaire?: number;
  tacheDuJour: string;
  exigencesPourPromotion: string[];
}
