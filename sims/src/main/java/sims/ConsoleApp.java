package sims;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import sims.dao.IDAOAspiration;
import sims.dao.IDAOCarriere;
import sims.dao.IDAOCompetence;
import sims.dao.IDAODlc;
import sims.dao.IDAOTraitDeCaractere;
import sims.model.Aspiration;
import sims.model.Carriere;
import sims.model.CategorieSim;
import sims.model.Competence;
import sims.model.DLC;
import sims.model.TraitAspiration;
import sims.model.TraitDeCaractere;
import sims.model.TypeDLC;

@Component
public class ConsoleApp implements CommandLineRunner {

	@Autowired
	IDAODlc daoDlc;
	
	@Autowired
	IDAOCompetence daoCompetence;
	
	@Autowired
	IDAOCarriere daoCarriere;
	
	@Autowired
	IDAOAspiration daoAspiration;
	
	@Autowired
	IDAOTraitDeCaractere daoTraitDeCaractere;
	
	
	@Override
	public void run(String... args) throws Exception {
		System.out.println("Hello world!");
		
		// DLC
		System.out.println("------Tous les DLCs------");
		
		List<DLC> dlcs = daoDlc.findAll();
		
		if(dlcs.isEmpty()) 
		{
			System.out.println("Aucun DLC n'est enregistré");
		}
		for (DLC dlc : dlcs) {
			System.out.println(dlc);
		}
		
		System.out.println();
		System.out.println("------Tous les Packs d'extension------");
		
		List<DLC> extensions = daoDlc.findAllByType(TypeDLC.EXTENSION);
		
		if(extensions.isEmpty()) 
		{
			System.out.println("Aucun Pack d'extension n'est enregistré");
		}
		for (DLC dlc : extensions) {
			System.out.println(dlc);
		}
		
		System.out.println();
		System.out.println("------Tous les Packs de jeu------");
		
		List<DLC> packsDeJeu = daoDlc.findAllByType(TypeDLC.JEU);
		
		if(packsDeJeu.isEmpty()) 
		{
			System.out.println("Aucun Pack de jeu n'est enregistré");
		}
		for (DLC dlc : packsDeJeu) {
			System.out.println(dlc);
		}
		
		System.out.println();
		System.out.println("------Tous les Kits d'objets------");
		
		List<DLC> kitsDObjets = daoDlc.findAllByType(TypeDLC.OBJETS);
		
		if(kitsDObjets.isEmpty()) 
		{
			System.out.println("Aucun Kit d'objets n'est enregistré");
		}
		for (DLC dlc : kitsDObjets) {
			System.out.println(dlc);
		}
		
		System.out.println();
		System.out.println("------Tous les Kits------");
		
		List<DLC> kits = daoDlc.findAllByType(TypeDLC.MINIKIT);
		
		if(kits.isEmpty()) 
		{
			System.out.println("Aucun Kit n'est enregistré");
		}
		for (DLC dlc : kits) {
			System.out.println(dlc);
		}
		
		
		// Compétence
		System.out.println("-----------------------------");
		System.out.println("------Toutes les Compétences------");
		
		List<Competence> competences = daoCompetence.findAll();
		
		if(competences.isEmpty()) 
		{
			System.out.println("Aucune Compétence n'est enregistrée");
		}
		for (Competence comp : competences) {
			System.out.println(comp);
		}
		
		System.out.println();
		System.out.println("------Toutes les Compétences d'adulte------");
		
		List<Competence> competencesAdulte = daoCompetence.findAllByCategorieSim(CategorieSim.ADULTE);
		
		if(competencesAdulte.isEmpty()) 
		{
			System.out.println("Aucune Compétence d'adulte n'est enregistrée");
		}
		for (Competence comp : competencesAdulte) {
			System.out.println(comp);
		}
		
		System.out.println();
		System.out.println("------Toutes les Compétences d'enfant------");
		
		List<Competence> competencesEnfant = daoCompetence.findAllByCategorieSim(CategorieSim.ENFANT);
		
		if(competencesEnfant.isEmpty()) 
		{
			System.out.println("Aucune Compétence d'enfant n'est enregistrée");
		}
		for (Competence comp : competencesEnfant) {
			System.out.println(comp);
		}
		//daoCompetence.deleteById(4);
		
		
		// Carrière
		System.out.println("-----------------------------");
		System.out.println("------Toutes les Carrières------");
		
		List<Carriere> carrieres = daoCarriere.findAllWithRangs();
		//Carriere carriere2 = daoCarriere.findByIdWithRangs(2);
		//System.out.println(carriere2);
		
		if(carrieres.isEmpty()) 
		{
			System.out.println("Aucune Carrière n'est enregistrée");
		}
		for (Carriere carriere : carrieres) {
			System.out.println(carriere);
		}
		
		
		// Aspiration
		System.out.println("-----------------------------");
		System.out.println("------Toutes les Aspirations------");
		
		List<Aspiration> aspirations = daoAspiration.findAllWithEtapes();
		//Aspiration aspiration2 = daoAspiration.findByIdWithEtapes(2);
		//System.out.println(aspiration2);
		
		if(aspirations.isEmpty()) 
		{
			System.out.println("Aucune Aspiration n'est enregistrée");
		}
		for (Aspiration aspiration : aspirations) {
			System.out.println(aspiration);
		}

		
		// Trait de caractère
		System.out.println();
		System.out.println("-----------------------------");
		System.out.println("------Tous les Traits de caractère------");
		
		List<TraitDeCaractere> traitsDeCaractere = daoTraitDeCaractere.findAll();
		//Aspiration aspiration2 = daoAspiration.findByIdWithEtapes(2);
		//System.out.println(aspiration2);
		
		if(traitsDeCaractere.isEmpty()) 
		{
			System.out.println("Aucun Trait de caractère n'est enregistré");
		}
		for (TraitDeCaractere traitDeCaractere : traitsDeCaractere) {
			System.out.println(traitDeCaractere);
		}
		
		System.out.println();
		System.out.println("------Tous les Traits de base------");
		List<TraitDeCaractere> traitsDeBase = daoTraitDeCaractere.findAllTraitBase();
		
		if(traitsDeBase.isEmpty()) 
		{
			System.out.println("Aucun Trait de base n'est enregistré");
		}
		for (TraitDeCaractere traitDeCaractere : traitsDeBase) {
			System.out.println(traitDeCaractere);
		}
		
		System.out.println();
		System.out.println("------Tous les Traits de fantôme------");
		List<TraitDeCaractere> traitsDeFantome = daoTraitDeCaractere.findAllTraitFantome();
		
		if(traitsDeFantome.isEmpty()) 
		{
			System.out.println("Aucun Trait de fantôme n'est enregistré");
		}
		for (TraitDeCaractere traitDeCaractere : traitsDeFantome) {
			System.out.println(traitDeCaractere);
		}
		
		System.out.println();
		System.out.println("------Tous les Traits de récompense d'aspiration------");
		List<TraitAspiration> traitsAspiration = daoTraitDeCaractere.findAllTraitAspiration();
		
		if(traitsAspiration.isEmpty()) 
		{
			System.out.println("Aucun Trait de récompense d'aspiration n'est enregistré");
		}
		for (TraitAspiration traitDeCaractere : traitsAspiration) {
			System.out.println(traitDeCaractere);
		}
	}
}
