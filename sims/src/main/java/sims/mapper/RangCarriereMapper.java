package sims.mapper;

import org.springframework.stereotype.Component;

import sims.dto.carriere.ReponseCreationRangCarriereDTO;
import sims.dto.carriere.ReponseGestionRangCarriereDTO;
import sims.dto.carriere.ReponseModificationRangCarriereDTO;
import sims.dto.carriere.RequeteCreationRangCarriereDTO;
import sims.dto.carriere.RequeteModificationRangCarriereDTO;
import sims.model.RangCarriere;

@Component
public class RangCarriereMapper {

    // RangCarriere vers RangCarriereDTO
    public ReponseGestionRangCarriereDTO toReponseGestionRangCarriereDTO(RangCarriere rangCarriere) {
        ReponseGestionRangCarriereDTO dto = new ReponseGestionRangCarriereDTO();
        dto.setId(rangCarriere.getId());
        dto.setNumero(rangCarriere.getNumero());
        dto.setTitre(rangCarriere.getTitre());
        dto.setSalaire(rangCarriere.getSalaire());
        dto.setTacheDuJour(rangCarriere.getTacheDuJour());
        dto.setExigencesPourPromotion(rangCarriere.getExigencesPourPromotion());

        return dto;
    }

    public ReponseCreationRangCarriereDTO toReponseCreationRangCarriereDTO(RangCarriere rangCarriere) {
        ReponseCreationRangCarriereDTO dto = new ReponseCreationRangCarriereDTO();
        dto.setId(rangCarriere.getId());
        dto.setNumero(rangCarriere.getNumero());
        dto.setTitre(rangCarriere.getTitre());
        dto.setSalaire(rangCarriere.getSalaire());
        dto.setTacheDuJour(rangCarriere.getTacheDuJour());
        dto.setExigencesPourPromotion(rangCarriere.getExigencesPourPromotion());

        return dto;
    }

    public ReponseModificationRangCarriereDTO toReponseModificationRangCarriereDTO(RangCarriere rangCarriere) {
        ReponseModificationRangCarriereDTO dto = new ReponseModificationRangCarriereDTO();
        dto.setId(rangCarriere.getId());
        dto.setNumero(rangCarriere.getNumero());
        dto.setTitre(rangCarriere.getTitre());
        dto.setSalaire(rangCarriere.getSalaire());
        dto.setTacheDuJour(rangCarriere.getTacheDuJour());
        dto.setExigencesPourPromotion(rangCarriere.getExigencesPourPromotion());

        return dto;
    }

    // RangCarriereDTO vers RangCarriere
    public RangCarriere toRangCarriere(RequeteCreationRangCarriereDTO dto) {
        RangCarriere rangCarriere = new RangCarriere();
        rangCarriere.setNumero(dto.getNumero());
        rangCarriere.setTitre(dto.getTitre());
        rangCarriere.setSalaire(dto.getSalaire());
        rangCarriere.setTacheDuJour(dto.getTacheDuJour());
        rangCarriere.setExigencesPourPromotion(dto.getExigencesPourPromotion());

        return rangCarriere;
    }

    public RangCarriere toRangCarriere(RequeteModificationRangCarriereDTO dto) {
        RangCarriere rangCarriere = new RangCarriere();
        rangCarriere.setId(dto.getId());
        rangCarriere.setNumero(dto.getNumero());
        rangCarriere.setTitre(dto.getTitre());
        rangCarriere.setSalaire(dto.getSalaire());
        rangCarriere.setTacheDuJour(dto.getTacheDuJour());
        rangCarriere.setExigencesPourPromotion(dto.getExigencesPourPromotion());

        return rangCarriere;
    }
}
