package sims.mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import sims.dto.CategorieSimDTO;
import sims.dto.aspiration.AspirationLegerDTO;
import sims.dto.aspiration.TypeAspirationDTO;
import sims.dto.dlc.DlcLegerDTO;
import sims.dto.trait.ReponseCreationTraitDTO;
import sims.dto.trait.ReponseListeGestionTraitDTO;
import sims.dto.trait.ReponseModificationTraitDTO;
import sims.dto.trait.RequeteCreationTraitDTO;
import sims.dto.trait.RequeteModificationTraitDTO;
import sims.dto.trait.TraitLegerDTO;
import sims.dto.trait.TypeTraitDTO;
import sims.model.Aspiration;
import sims.model.CategorieSim;
import sims.model.DLC;
import sims.model.TraitACondition;
import sims.model.TraitAEffets;
import sims.model.TraitAspiration;
import sims.model.TraitBonus;
import sims.model.TraitBoutique;
import sims.model.TraitDeCaractere;
import sims.model.TraitEducation;
import sims.model.TypeAspiration;
import sims.model.TypeTrait;
import sims.service.TraitDeCaractereService;

@Component
public class TraitMapper {

    @Autowired
    private DlcMapper dlcMapper;

    @Autowired
    private SimMapper simMapper;

    @Autowired
    private AspirationMapper aspirationMapper;

    @Autowired
    private TraitDeCaractereService service;

    // TypeTrait
    public TypeTraitDTO toTypeTraitDTO(TypeTrait typeTrait) {
        TypeTraitDTO dto = new TypeTraitDTO();
        dto.setCode(typeTrait.name());
        dto.setNom(typeTrait.getNom());

        return dto;
    }

    public TypeTrait toTypeTrait(TypeTraitDTO dto) {
        return TypeTrait.valueOf(dto.getCode());
    }

    // Trait vers TraitDTO
    public TraitLegerDTO toTraitLegerDTO(TraitDeCaractere trait) {
        TraitLegerDTO dto = new TraitLegerDTO();
        dto.setId(trait.getId());
        dto.setNom(trait.getNom());
        dto.setImg(trait.getImg());

        return dto;
    }

    public ReponseListeGestionTraitDTO toReponseListeGestionTraitDTO(TraitDeCaractere trait) {
        ReponseListeGestionTraitDTO dto = new ReponseListeGestionTraitDTO();
        dto.setId(trait.getId());
        dto.setNom(trait.getNom());
        dto.setDescription(trait.getDescription());
        dto.setImg(trait.getImg());

        TypeTraitDTO typeTraitDTO = this.toTypeTraitDTO(trait.getType());
        dto.setType(typeTraitDTO);

        CategorieSimDTO categorieSimDTO = simMapper.toCategorieSimDTO(trait.getCategorieSim());
        dto.setCategorieSim(categorieSimDTO);

        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(trait.getDlc());
        dto.setDlc(dlcDTO);

        return dto;
    }

    public ReponseCreationTraitDTO toReponseCreationTraitDTO(TraitDeCaractere trait) {
        ReponseCreationTraitDTO dto = new ReponseCreationTraitDTO();
        dto.setId(trait.getId());
        dto.setNom(trait.getNom());
        dto.setDescription(trait.getDescription());
        dto.setImg(trait.getImg());

        TypeTraitDTO typeTraitDTO = this.toTypeTraitDTO(trait.getType());
        dto.setType(typeTraitDTO);

        CategorieSimDTO categorieSimDTO = simMapper.toCategorieSimDTO(trait.getCategorieSim());
        dto.setCategorieSim(categorieSimDTO);

        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(trait.getDlc());
        dto.setDlc(dlcDTO);

        return dto;
    }

    public ReponseModificationTraitDTO toReponseModificationTraitDTO(TraitDeCaractere trait) {
        ReponseModificationTraitDTO dto = new ReponseModificationTraitDTO();
        dto.setId(trait.getId());
        dto.setNom(trait.getNom());
        dto.setDescription(trait.getDescription());
        dto.setImg(trait.getImg());

        TypeTraitDTO typeTraitDTO = this.toTypeTraitDTO(trait.getType());
        dto.setType(typeTraitDTO);

        CategorieSimDTO categorieSimDTO = simMapper.toCategorieSimDTO(trait.getCategorieSim());
        dto.setCategorieSim(categorieSimDTO);

        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(trait.getDlc());
        dto.setDlc(dlcDTO);

        return dto;
    }

    // TraitBoutique vers TraitDTO
    public ReponseCreationTraitDTO toReponseCreationTraitDTO(TraitBoutique trait) {
        ReponseCreationTraitDTO dto = new ReponseCreationTraitDTO();
        dto.setId(trait.getId());
        dto.setNom(trait.getNom());
        dto.setDescription(trait.getDescription());
        dto.setImg(trait.getImg());
        dto.setCout(trait.getCout());

        TypeTraitDTO typeTraitDTO = this.toTypeTraitDTO(trait.getType());
        dto.setType(typeTraitDTO);

        CategorieSimDTO categorieSimDTO = simMapper.toCategorieSimDTO(trait.getCategorieSim());
        dto.setCategorieSim(categorieSimDTO);

        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(trait.getDlc());
        dto.setDlc(dlcDTO);

        return dto;
    }

    public ReponseModificationTraitDTO toReponseModificationTraitDTO(TraitBoutique trait) {
        ReponseModificationTraitDTO dto = new ReponseModificationTraitDTO();
        dto.setId(trait.getId());
        dto.setNom(trait.getNom());
        dto.setDescription(trait.getDescription());
        dto.setImg(trait.getImg());
        dto.setCout(trait.getCout());

        TypeTraitDTO typeTraitDTO = this.toTypeTraitDTO(trait.getType());
        dto.setType(typeTraitDTO);

        CategorieSimDTO categorieSimDTO = simMapper.toCategorieSimDTO(trait.getCategorieSim());
        dto.setCategorieSim(categorieSimDTO);

        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(trait.getDlc());
        dto.setDlc(dlcDTO);

        return dto;
    }

    // TraitEducation vers TraitDTO
    public ReponseCreationTraitDTO toReponseCreationTraitDTO(TraitEducation trait) {
        ReponseCreationTraitDTO dto = new ReponseCreationTraitDTO();
        dto.setId(trait.getId());
        dto.setNom(trait.getNom());
        dto.setDescription(trait.getDescription());
        dto.setImg(trait.getImg());
        dto.setQualite(trait.getQualite());

        TypeTraitDTO typeTraitDTO = this.toTypeTraitDTO(trait.getType());
        dto.setType(typeTraitDTO);

        CategorieSimDTO categorieSimDTO = simMapper.toCategorieSimDTO(trait.getCategorieSim());
        dto.setCategorieSim(categorieSimDTO);

        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(trait.getDlc());
        dto.setDlc(dlcDTO);

        return dto;
    }

    public ReponseModificationTraitDTO toReponseModificationTraitDTO(TraitEducation trait) {
        ReponseModificationTraitDTO dto = new ReponseModificationTraitDTO();
        dto.setId(trait.getId());
        dto.setNom(trait.getNom());
        dto.setDescription(trait.getDescription());
        dto.setImg(trait.getImg());
        dto.setQualite(trait.getQualite());

        TypeTraitDTO typeTraitDTO = this.toTypeTraitDTO(trait.getType());
        dto.setType(typeTraitDTO);

        CategorieSimDTO categorieSimDTO = simMapper.toCategorieSimDTO(trait.getCategorieSim());
        dto.setCategorieSim(categorieSimDTO);

        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(trait.getDlc());
        dto.setDlc(dlcDTO);

        return dto;
    }

    // TraitACondition vers TraitDTO
    public ReponseCreationTraitDTO toReponseCreationTraitDTO(TraitACondition trait) {
        ReponseCreationTraitDTO dto = new ReponseCreationTraitDTO();
        dto.setId(trait.getId());
        dto.setNom(trait.getNom());
        dto.setDescription(trait.getDescription());
        dto.setImg(trait.getImg());
        dto.setCondition(trait.getConditionTrait());

        TypeTraitDTO typeTraitDTO = this.toTypeTraitDTO(trait.getType());
        dto.setType(typeTraitDTO);

        CategorieSimDTO categorieSimDTO = simMapper.toCategorieSimDTO(trait.getCategorieSim());
        dto.setCategorieSim(categorieSimDTO);

        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(trait.getDlc());
        dto.setDlc(dlcDTO);

        return dto;
    }

    public ReponseModificationTraitDTO toReponseModificationTraitDTO(TraitACondition trait) {
        ReponseModificationTraitDTO dto = new ReponseModificationTraitDTO();
        dto.setId(trait.getId());
        dto.setNom(trait.getNom());
        dto.setDescription(trait.getDescription());
        dto.setImg(trait.getImg());
        dto.setCondition(trait.getConditionTrait());

        TypeTraitDTO typeTraitDTO = this.toTypeTraitDTO(trait.getType());
        dto.setType(typeTraitDTO);

        CategorieSimDTO categorieSimDTO = simMapper.toCategorieSimDTO(trait.getCategorieSim());
        dto.setCategorieSim(categorieSimDTO);

        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(trait.getDlc());
        dto.setDlc(dlcDTO);

        return dto;
    }

    // TraitAEffets vers TraitDTO
    public ReponseCreationTraitDTO toReponseCreationTraitDTO(TraitAEffets trait) {
        ReponseCreationTraitDTO dto = new ReponseCreationTraitDTO();
        dto.setId(trait.getId());
        dto.setNom(trait.getNom());
        dto.setDescription(trait.getDescription());
        dto.setImg(trait.getImg());
        dto.setCondition(trait.getConditionTrait());
        dto.setEffets(trait.getEffets());

        TypeTraitDTO typeTraitDTO = this.toTypeTraitDTO(trait.getType());
        dto.setType(typeTraitDTO);

        CategorieSimDTO categorieSimDTO = simMapper.toCategorieSimDTO(trait.getCategorieSim());
        dto.setCategorieSim(categorieSimDTO);

        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(trait.getDlc());
        dto.setDlc(dlcDTO);

        return dto;
    }

    public ReponseModificationTraitDTO toReponseModificationTraitDTO(TraitAEffets trait) {
        ReponseModificationTraitDTO dto = new ReponseModificationTraitDTO();
        dto.setId(trait.getId());
        dto.setNom(trait.getNom());
        dto.setDescription(trait.getDescription());
        dto.setImg(trait.getImg());
        dto.setCondition(trait.getConditionTrait());
        dto.setEffets(trait.getEffets());

        TypeTraitDTO typeTraitDTO = this.toTypeTraitDTO(trait.getType());
        dto.setType(typeTraitDTO);

        CategorieSimDTO categorieSimDTO = simMapper.toCategorieSimDTO(trait.getCategorieSim());
        dto.setCategorieSim(categorieSimDTO);

        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(trait.getDlc());
        dto.setDlc(dlcDTO);

        return dto;
    }

    // TraitBonus vers TraitDTO
    public ReponseCreationTraitDTO toReponseCreationTraitDTO(TraitBonus trait) {
        ReponseCreationTraitDTO dto = new ReponseCreationTraitDTO();
        dto.setId(trait.getId());
        dto.setNom(trait.getNom());
        dto.setDescription(trait.getDescription());
        dto.setImg(trait.getImg());

        TypeTraitDTO typeTraitDTO = this.toTypeTraitDTO(trait.getType());
        dto.setType(typeTraitDTO);

        CategorieSimDTO categorieSimDTO = simMapper.toCategorieSimDTO(trait.getCategorieSim());
        dto.setCategorieSim(categorieSimDTO);

        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(trait.getDlc());
        dto.setDlc(dlcDTO);

        TypeAspirationDTO typeAspirationDTO = aspirationMapper.toTypeAspirationDTO(trait.getTypeAspiration());
        dto.setTypeAspiration(typeAspirationDTO);

        return dto;
    }

    public ReponseModificationTraitDTO toReponseModificationTraitDTO(TraitBonus trait) {
        ReponseModificationTraitDTO dto = new ReponseModificationTraitDTO();
        dto.setId(trait.getId());
        dto.setNom(trait.getNom());
        dto.setDescription(trait.getDescription());
        dto.setImg(trait.getImg());

        TypeTraitDTO typeTraitDTO = this.toTypeTraitDTO(trait.getType());
        dto.setType(typeTraitDTO);

        CategorieSimDTO categorieSimDTO = simMapper.toCategorieSimDTO(trait.getCategorieSim());
        dto.setCategorieSim(categorieSimDTO);

        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(trait.getDlc());
        dto.setDlc(dlcDTO);

        TypeAspirationDTO typeAspirationDTO = aspirationMapper.toTypeAspirationDTO(trait.getTypeAspiration());
        dto.setTypeAspiration(typeAspirationDTO);

        return dto;
    }

    // TraitAspiration vers TraitDTO
    public ReponseCreationTraitDTO toReponseCreationTraitDTO(TraitAspiration trait) {
        ReponseCreationTraitDTO dto = new ReponseCreationTraitDTO();
        dto.setId(trait.getId());
        dto.setNom(trait.getNom());
        dto.setDescription(trait.getDescription());
        dto.setImg(trait.getImg());

        TypeTraitDTO typeTraitDTO = this.toTypeTraitDTO(trait.getType());
        dto.setType(typeTraitDTO);

        CategorieSimDTO categorieSimDTO = simMapper.toCategorieSimDTO(trait.getCategorieSim());
        dto.setCategorieSim(categorieSimDTO);

        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(trait.getDlc());
        dto.setDlc(dlcDTO);

        AspirationLegerDTO aspirationDTO = aspirationMapper.toAspirationLegerDTO(trait.getAspiration());
        dto.setAspiration(aspirationDTO);

        return dto;
    }

    public ReponseModificationTraitDTO toReponseModificationTraitDTO(TraitAspiration trait) {
        ReponseModificationTraitDTO dto = new ReponseModificationTraitDTO();
        dto.setId(trait.getId());
        dto.setNom(trait.getNom());
        dto.setDescription(trait.getDescription());
        dto.setImg(trait.getImg());

        TypeTraitDTO typeTraitDTO = this.toTypeTraitDTO(trait.getType());
        dto.setType(typeTraitDTO);

        CategorieSimDTO categorieSimDTO = simMapper.toCategorieSimDTO(trait.getCategorieSim());
        dto.setCategorieSim(categorieSimDTO);

        DlcLegerDTO dlcDTO = dlcMapper.toDlcLegerDTO(trait.getDlc());
        dto.setDlc(dlcDTO);

        AspirationLegerDTO aspirationDTO = aspirationMapper.toAspirationLegerDTO(trait.getAspiration());
        dto.setAspiration(aspirationDTO);

        return dto;
    }

    // TraitDTO vers TraitDeCaractere
    public TraitDeCaractere toTraitDeCaractere(TraitLegerDTO dto) {
        return service.getById(dto.getId());
    }

    public TraitDeCaractere toTraitDeCaractere(RequeteCreationTraitDTO dto) {
        TraitDeCaractere trait = new TraitDeCaractere();
        trait.setNom(dto.getNom());
        trait.setDescription(dto.getDescription());
        trait.setImg(dto.getImg());

        TypeTrait typeTrait = this.toTypeTrait(dto.getType());
        trait.setType(typeTrait);

        CategorieSim categorieSim = simMapper.toCategorieSim(dto.getCategorieSim());
        trait.setCategorieSim(categorieSim);

        DLC dlc = dlcMapper.toDlc(dto.getDlc());
        trait.setDlc(dlc);

        return trait;
    }

    public TraitDeCaractere toTraitDeCaractere(RequeteModificationTraitDTO dto) {
        TraitDeCaractere trait = new TraitDeCaractere();
        trait.setId(dto.getId());
        trait.setNom(dto.getNom());
        trait.setDescription(dto.getDescription());
        trait.setImg(dto.getImg());

        TypeTrait typeTrait = this.toTypeTrait(dto.getType());
        trait.setType(typeTrait);

        CategorieSim categorieSim = simMapper.toCategorieSim(dto.getCategorieSim());
        trait.setCategorieSim(categorieSim);

        DLC dlc = dlcMapper.toDlc(dto.getDlc());
        trait.setDlc(dlc);

        return trait;
    }

    // TraitDTO vers TraitBoutique
    public TraitBoutique toTraitBoutique(RequeteCreationTraitDTO dto) {
        TraitBoutique trait = new TraitBoutique();
        trait.setNom(dto.getNom());
        trait.setDescription(dto.getDescription());
        trait.setImg(dto.getImg());
        trait.setCout(dto.getCout());

        TypeTrait typeTrait = this.toTypeTrait(dto.getType());
        trait.setType(typeTrait);

        CategorieSim categorieSim = simMapper.toCategorieSim(dto.getCategorieSim());
        trait.setCategorieSim(categorieSim);

        DLC dlc = dlcMapper.toDlc(dto.getDlc());
        trait.setDlc(dlc);

        return trait;
    }

    public TraitBoutique toTraitBoutique(RequeteModificationTraitDTO dto) {
        TraitBoutique trait = new TraitBoutique();
        trait.setId(dto.getId());
        trait.setNom(dto.getNom());
        trait.setDescription(dto.getDescription());
        trait.setImg(dto.getImg());
        trait.setCout(dto.getCout());

        TypeTrait typeTrait = this.toTypeTrait(dto.getType());
        trait.setType(typeTrait);

        CategorieSim categorieSim = simMapper.toCategorieSim(dto.getCategorieSim());
        trait.setCategorieSim(categorieSim);

        DLC dlc = dlcMapper.toDlc(dto.getDlc());
        trait.setDlc(dlc);

        return trait;
    }

    // TraitDTO vers TraitEducation
    public TraitEducation toTraitEducation(RequeteCreationTraitDTO dto) {
        TraitEducation trait = new TraitEducation();
        trait.setNom(dto.getNom());
        trait.setDescription(dto.getDescription());
        trait.setImg(dto.getImg());
        trait.setQualite(dto.getQualite());

        TypeTrait typeTrait = this.toTypeTrait(dto.getType());
        trait.setType(typeTrait);

        CategorieSim categorieSim = simMapper.toCategorieSim(dto.getCategorieSim());
        trait.setCategorieSim(categorieSim);

        DLC dlc = dlcMapper.toDlc(dto.getDlc());
        trait.setDlc(dlc);

        return trait;
    }

    public TraitEducation toTraitEducation(RequeteModificationTraitDTO dto) {
        TraitEducation trait = new TraitEducation();
        trait.setId(dto.getId());
        trait.setNom(dto.getNom());
        trait.setDescription(dto.getDescription());
        trait.setImg(dto.getImg());
        trait.setQualite(dto.getQualite());

        TypeTrait typeTrait = this.toTypeTrait(dto.getType());
        trait.setType(typeTrait);

        CategorieSim categorieSim = simMapper.toCategorieSim(dto.getCategorieSim());
        trait.setCategorieSim(categorieSim);

        DLC dlc = dlcMapper.toDlc(dto.getDlc());
        trait.setDlc(dlc);

        return trait;
    }

    // TraitDTO vers TraitACondition
    public TraitACondition toTraitACondition(RequeteCreationTraitDTO dto) {
        TraitACondition trait = new TraitACondition();
        trait.setNom(dto.getNom());
        trait.setDescription(dto.getDescription());
        trait.setImg(dto.getImg());
        trait.setConditionTrait(dto.getCondition());

        TypeTrait typeTrait = this.toTypeTrait(dto.getType());
        trait.setType(typeTrait);

        CategorieSim categorieSim = simMapper.toCategorieSim(dto.getCategorieSim());
        trait.setCategorieSim(categorieSim);

        DLC dlc = dlcMapper.toDlc(dto.getDlc());
        trait.setDlc(dlc);

        return trait;
    }

    public TraitACondition toTraitACondition(RequeteModificationTraitDTO dto) {
        TraitACondition trait = new TraitACondition();
        trait.setId(dto.getId());
        trait.setNom(dto.getNom());
        trait.setDescription(dto.getDescription());
        trait.setImg(dto.getImg());
        trait.setConditionTrait(dto.getCondition());

        TypeTrait typeTrait = this.toTypeTrait(dto.getType());
        trait.setType(typeTrait);

        CategorieSim categorieSim = simMapper.toCategorieSim(dto.getCategorieSim());
        trait.setCategorieSim(categorieSim);

        DLC dlc = dlcMapper.toDlc(dto.getDlc());
        trait.setDlc(dlc);

        return trait;
    }

    // TraitDTO vers TraitAEffets
    public TraitAEffets toTraitAEffets(RequeteCreationTraitDTO dto) {
        TraitAEffets trait = new TraitAEffets();
        trait.setNom(dto.getNom());
        trait.setDescription(dto.getDescription());
        trait.setImg(dto.getImg());
        trait.setConditionTrait(dto.getCondition());
        trait.setEffets(dto.getEffets());

        TypeTrait typeTrait = this.toTypeTrait(dto.getType());
        trait.setType(typeTrait);

        CategorieSim categorieSim = simMapper.toCategorieSim(dto.getCategorieSim());
        trait.setCategorieSim(categorieSim);

        DLC dlc = dlcMapper.toDlc(dto.getDlc());
        trait.setDlc(dlc);

        return trait;
    }

    public TraitAEffets toTraitAEffets(RequeteModificationTraitDTO dto) {
        TraitAEffets trait = new TraitAEffets();
        trait.setId(dto.getId());
        trait.setNom(dto.getNom());
        trait.setDescription(dto.getDescription());
        trait.setImg(dto.getImg());
        trait.setConditionTrait(dto.getCondition());
        trait.setEffets(dto.getEffets());

        TypeTrait typeTrait = this.toTypeTrait(dto.getType());
        trait.setType(typeTrait);

        CategorieSim categorieSim = simMapper.toCategorieSim(dto.getCategorieSim());
        trait.setCategorieSim(categorieSim);

        DLC dlc = dlcMapper.toDlc(dto.getDlc());
        trait.setDlc(dlc);

        return trait;
    }

    // TraitDTO vers TraitBonus
    public TraitBonus toTraitBonus(RequeteCreationTraitDTO dto) {
        TraitBonus trait = new TraitBonus();
        trait.setNom(dto.getNom());
        trait.setDescription(dto.getDescription());
        trait.setImg(dto.getImg());

        TypeTrait typeTrait = this.toTypeTrait(dto.getType());
        trait.setType(typeTrait);

        CategorieSim categorieSim = simMapper.toCategorieSim(dto.getCategorieSim());
        trait.setCategorieSim(categorieSim);

        DLC dlc = dlcMapper.toDlc(dto.getDlc());
        trait.setDlc(dlc);

        TypeAspiration typeAspiration = aspirationMapper.toTypeAspiration(dto.getTypeAspiration());
        trait.setTypeAspiration(typeAspiration);

        return trait;
    }

    public TraitBonus toTraitBonus(RequeteModificationTraitDTO dto) {
        TraitBonus trait = new TraitBonus();
        trait.setId(dto.getId());
        trait.setNom(dto.getNom());
        trait.setDescription(dto.getDescription());
        trait.setImg(dto.getImg());

        TypeTrait typeTrait = this.toTypeTrait(dto.getType());
        trait.setType(typeTrait);

        CategorieSim categorieSim = simMapper.toCategorieSim(dto.getCategorieSim());
        trait.setCategorieSim(categorieSim);

        DLC dlc = dlcMapper.toDlc(dto.getDlc());
        trait.setDlc(dlc);

        TypeAspiration typeAspiration = aspirationMapper.toTypeAspiration(dto.getTypeAspiration());
        trait.setTypeAspiration(typeAspiration);

        return trait;
    }

    // TraitDTO vers TraitAspiration
    public TraitAspiration toTraitAspiration(RequeteCreationTraitDTO dto) {
        TraitAspiration trait = new TraitAspiration();
        trait.setNom(dto.getNom());
        trait.setDescription(dto.getDescription());
        trait.setImg(dto.getImg());

        TypeTrait typeTrait = this.toTypeTrait(dto.getType());
        trait.setType(typeTrait);

        CategorieSim categorieSim = simMapper.toCategorieSim(dto.getCategorieSim());
        trait.setCategorieSim(categorieSim);

        DLC dlc = dlcMapper.toDlc(dto.getDlc());
        trait.setDlc(dlc);

        Aspiration aspiration = aspirationMapper.toAspiration(dto.getAspiration());
        trait.setAspiration(aspiration);

        return trait;
    }

    public TraitAspiration toTraitAspiration(RequeteModificationTraitDTO dto) {
        TraitAspiration trait = new TraitAspiration();
        trait.setId(dto.getId());
        trait.setNom(dto.getNom());
        trait.setDescription(dto.getDescription());
        trait.setImg(dto.getImg());

        TypeTrait typeTrait = this.toTypeTrait(dto.getType());
        trait.setType(typeTrait);

        CategorieSim categorieSim = simMapper.toCategorieSim(dto.getCategorieSim());
        trait.setCategorieSim(categorieSim);

        DLC dlc = dlcMapper.toDlc(dto.getDlc());
        trait.setDlc(dlc);

        Aspiration aspiration = aspirationMapper.toAspiration(dto.getAspiration());
        trait.setAspiration(aspiration);

        return trait;
    }
}
