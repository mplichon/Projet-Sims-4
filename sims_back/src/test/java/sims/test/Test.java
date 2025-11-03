package sims.test;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import sims.dao.IDAOCarriere;
import sims.dao.IDAOCompetence;
import sims.dao.IDAODlc;
import sims.model.Carriere;
import sims.model.CategorieSim;
import sims.model.Competence;
import sims.model.DLC;
import sims.model.TypeDLC;

public class Test {
	
	@Autowired
	IDAODlc daoDlc;
	
	@Autowired
	IDAOCompetence daoCompetence;
	
	@Autowired
	IDAOCarriere daoCarriere;
	

	public void run(String[] args) {
		
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
		
		/*Competence photographie = new Competence("Photographie", "Clic clic, souriez !", "img/test", 10, CategorieSim.ADULTE);
		photographie.setDlc(daoDlc.findById(7).orElse(null));
		
		Competence testCompetence = new Competence("Test", "Clic clic, souriez !", "img/test", 5, CategorieSim.ENFANT);
		testCompetence.setDlc(daoDlc.findById(7).orElse(null));
		
		daoCompetence.save(photographie);
		daoCompetence.save(testCompetence);
		
		Competence testCompetence = daoCompetence.findById(4).orElse(null);
		testCompetence.setCategorieSim(CategorieSim.ADO);
		daoCompetence.save(testCompetence);*/
		
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
		
		List<Carriere> carrieres = daoCarriere.findAll();
		
		if(carrieres.isEmpty()) 
		{
			System.out.println("Aucune Carrière n'est enregistrée");
		}
		for (Carriere carriere : carrieres) {
			System.out.println(carriere);
		}
		
		/*
		// Test JPA
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("configJPASims4");
		EntityManager em = emf.createEntityManager();
		
		em.getTransaction().begin();
		// DLC
		DLC jeuDeBase = new DLC("Les Sims 4", LocalDate.parse("2014-09-05"), "C'est un jeu super cool !", "img/test", TypeDLC.BASE);
		jeuDeBase = em.merge(jeuDeBase);
		
		DLC auTravail = new DLC("Au Travail", LocalDate.parse("2015-04-02"), "Commencez des carrières délirantes !", "img/test", TypeDLC.EXTENSION);
		auTravail = em.merge(auTravail);
		
		DLC loupsGarous = new DLC("Loups-Garous", LocalDate.parse("2022-06-16"), "Devenez lycanthrope !", "img/test", TypeDLC.JEU);
		loupsGarous = em.merge(loupsGarous);
		
		DLC saisons = new DLC("Saisons", LocalDate.parse("2018-06-22"), "Les saisons font leur grand retour !", "img/test", TypeDLC.EXTENSION);
		saisons = em.merge(saisons);
		
		DLC etreParents = new DLC("Être parents", LocalDate.parse("2017-05-30"), "Devenez parents", "img/test", TypeDLC.JEU);
		etreParents = em.merge(etreParents);
		
		System.out.println(jeuDeBase);
		
		// Compétence
		Competence cuisine = new Competence("Cuisine", "Compétence indispensable pour se faire à manger", "img/test", 10, CategorieSim.ADULTE);
		cuisine.setDlc(jeuDeBase);
		
		cuisine = em.merge(cuisine);
		
		System.out.println(cuisine);
		
		// Carriere
		RangCarriere rang1 = new RangCarriere(1, "Assistant", 200, "Jouer aux échecs");
		rang1.setExigencesPourPromotion(new ArrayList<String>());
		Collections.addAll(rang1.getExigencesPourPromotion(), "Être au niveau 2 de la compétence Logique");
		rang1 = em.merge(rang1);
		
		RangCarriere rang2 = new RangCarriere(2, "Scientifique fou", 1000, "Faire des expériences");
		rang2.setExigencesPourPromotion(new ArrayList<String>());
		Collections.addAll(rang2.getExigencesPourPromotion(), "Être au niveau 4 de la compétence Logique", "Être au niveau 2 de la compétence Jeux vidéo");
		rang2 = em.merge(rang2);
		
		Carriere carriereScientifique = new Carriere("Scientifique", "C'est la carrière idéale pour faire des inventions", "img/test", null, TypeCarriere.ACTIVE);
		carriereScientifique.setDlc(auTravail);
		carriereScientifique.setRangs(new ArrayList<RangCarriere>());
		Collections.addAll(carriereScientifique.getRangs(), rang1, rang2);
		carriereScientifique = em.merge(carriereScientifique);
		
		System.out.println(carriereScientifique);
		
		// Aspiration et Trait de récompense d'aspiration
		EtapeAspiration etape1 = new EtapeAspiration(1, "Jeune loup");
		etape1.setSousEtapes(new ArrayList<String>());
		Collections.addAll(etape1.getSousEtapes(), "Devenir un Loup-garou");
		etape1 = em.merge(etape1);
		
		EtapeAspiration etape2 = new EtapeAspiration(2, "Vieux loup");
		etape2.setSousEtapes(new ArrayList<String>());
		Collections.addAll(etape2.getSousEtapes(), "Atteindre le rang vieux loup", "Effrayer d'autres Sims");
		etape2 = em.merge(etape2);
		
		Aspiration loupGarouUltime = new Aspiration("Loup-garou ultime", "Être un simple loup-garou ne vous suffit pas", "img/test", TypeAspiration.LYCANTHROPIE);
		loupGarouUltime.setEtapes(new ArrayList<EtapeAspiration>());
		Collections.addAll(loupGarouUltime.getEtapes(), etape1, etape2);
		loupGarouUltime.setDlc(loupsGarous);
		loupGarouUltime = em.merge(loupGarouUltime);
		
		
		TraitAspiration presenceMenacante = new TraitAspiration("Présence menaçante", "Ces sims effraient tout le monde (même Greg)", "img/test", CategorieSim.ADULTE);
		presenceMenacante.setDlc(loupsGarous);
		presenceMenacante.setAspiration(loupGarouUltime);
		presenceMenacante = em.merge(presenceMenacante);
		
		loupGarouUltime.setTrait(presenceMenacante);
		loupGarouUltime = em.merge(loupGarouUltime);
		
		System.out.println(loupGarouUltime);
		System.out.println(presenceMenacante);
		
		// Trait de caractère
		TraitDeCaractere genie = new TraitDeCaractere("Génie", "Ces Sims sont des génies", "img/test", TypeTrait.BASE, CategorieSim.ADULTE);
		genie.setDlc(jeuDeBase);
		genie = em.merge(genie);
		
		System.out.println(genie);
		
		// Trait Bonus
		TraitBonus collectionneur = new TraitBonus("Collectionneur", "Ils trouvent des trésors plus facilement", "img/test", CategorieSim.ADULTE, TypeAspiration.NATURE);
		collectionneur.setDlc(jeuDeBase);
		collectionneur = em.merge(collectionneur);
		
		System.out.println(collectionneur);
		
		// Trait à condition
		TraitACondition resistanceALaMaladie = new TraitACondition("Résistance à la maladie", "Ces Sims ne tombent plus jamais malades", "img/test", TypeTrait.CARRIERE, CategorieSim.ADULTE, "Être au niveau 8 de la carrière Médecin");
		resistanceALaMaladie.setDlc(auTravail);
		resistanceALaMaladie = em.merge(resistanceALaMaladie);
		
		System.out.println(resistanceALaMaladie);
		
		// Trait à effets
		TraitAEffets bebeDuPereHiver = new TraitAEffets("Bébé du Père Hiver", "Le père de ce sim est le Père Hiver !", "img/test", TypeTrait.HERITAGE, CategorieSim.ADULTE, "Le Sim doit avoir le Père Hiver comme père");
		bebeDuPereHiver.setDlc(saisons);
		bebeDuPereHiver.setEffets(new ArrayList<String>());
		Collections.addAll(bebeDuPereHiver.getEffets(), "Augmente l'obtention des points de satisfaction de 50%");
		bebeDuPereHiver = em.merge(bebeDuPereHiver);
		
		System.out.println(bebeDuPereHiver);
		
		// Trait lié à l'éducation
		TraitEducation irresponsable = new TraitEducation("Irresponsable", "Ces sims ont eu une mauvaise éducation", "img/test", "Responsabilité");
		irresponsable.setDlc(etreParents);
		irresponsable = em.merge(irresponsable);
		
		System.out.println(irresponsable);
		
		// Trait de récompense de la boutique
		TraitBoutique vessieDAcier = new TraitBoutique("Vessie d'acier", "Ces sims n'ont plus besoin d'aller aux toilettes", "img/test", CategorieSim.ADULTE, 2000);
		vessieDAcier.setDlc(jeuDeBase);
		vessieDAcier = em.merge(vessieDAcier);
		
		System.out.println(vessieDAcier);
		
		Aspiration aspiration1 = em.find(Aspiration.class, 1);
		System.out.println(aspiration1.getTrait());
		System.out.println(aspiration1);
		
		// Fin Test JPA
		em.getTransaction().commit();

		em.close();
		emf.close();
		*/
	}

}
