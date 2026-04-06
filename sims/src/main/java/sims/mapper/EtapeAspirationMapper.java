package sims.mapper;

import org.springframework.stereotype.Component;

import sims.dto.aspiration.ReponseCreationEtapeAspirationDTO;
import sims.dto.aspiration.ReponseGestionEtapeAspirationDTO;
import sims.dto.aspiration.ReponseModificationEtapeAspirationDTO;
import sims.dto.aspiration.RequeteCreationEtapeAspirationDTO;
import sims.dto.aspiration.RequeteModificationEtapeAspirationDTO;
import sims.model.EtapeAspiration;

@Component
public class EtapeAspirationMapper {


    // EtapeAspiration vers EtapeAspirationDTO
    public ReponseGestionEtapeAspirationDTO toReponseGestionEtapeAspirationDTO(EtapeAspiration etapeAspiration) {
        ReponseGestionEtapeAspirationDTO dto = new ReponseGestionEtapeAspirationDTO();
        dto.setId(etapeAspiration.getId());
        dto.setNom(etapeAspiration.getNom());
        dto.setNumero(etapeAspiration.getNumero());
        dto.setSousEtapes(etapeAspiration.getSousEtapes());

        return dto;
    }

    public ReponseCreationEtapeAspirationDTO toReponseCreationEtapeAspirationDTO(EtapeAspiration etapeAspiration) {
        ReponseCreationEtapeAspirationDTO dto = new ReponseCreationEtapeAspirationDTO();
        dto.setId(etapeAspiration.getId());
        dto.setNom(etapeAspiration.getNom());
        dto.setNumero(etapeAspiration.getNumero());
        dto.setSousEtapes(etapeAspiration.getSousEtapes());

        return dto;
    }

    public ReponseModificationEtapeAspirationDTO toReponseModificationEtapeAspirationDTO(EtapeAspiration etapeAspiration) {
        ReponseModificationEtapeAspirationDTO dto = new ReponseModificationEtapeAspirationDTO();
        dto.setId(etapeAspiration.getId());
        dto.setNom(etapeAspiration.getNom());
        dto.setNumero(etapeAspiration.getNumero());
        dto.setSousEtapes(etapeAspiration.getSousEtapes());

        return dto;
    }

    // EtapeAspirationDTO vers EtapeAspiration
    public EtapeAspiration toEtapeAspiration(RequeteCreationEtapeAspirationDTO dto) {
        EtapeAspiration etapeAspiration = new EtapeAspiration();
        etapeAspiration.setNom(dto.getNom());
        etapeAspiration.setNumero(dto.getNumero());
        etapeAspiration.setSousEtapes(dto.getSousEtapes());

        return etapeAspiration;
    }

    public EtapeAspiration toEtapeAspiration(RequeteModificationEtapeAspirationDTO dto) {
        EtapeAspiration etapeAspiration = new EtapeAspiration();
        etapeAspiration.setId(dto.getId());
        etapeAspiration.setNom(dto.getNom());
        etapeAspiration.setNumero(dto.getNumero());
        etapeAspiration.setSousEtapes(dto.getSousEtapes());

        return etapeAspiration;
    }
}
