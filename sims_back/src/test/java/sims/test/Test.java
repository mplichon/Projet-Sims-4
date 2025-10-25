package sims.test;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;

import sims.model.Aspiration;
import sims.model.Carriere;
import sims.model.CategorieSim;
import sims.model.Competence;
import sims.model.DLC;
import sims.model.EtapeAspiration;
import sims.model.RangCarriere;
import sims.model.TraitACondition;
import sims.model.TraitAEffets;
import sims.model.TraitAspiration;
import sims.model.TraitBonus;
import sims.model.TraitDeCaractere;
import sims.model.TypeAspiration;
import sims.model.TypeCarriere;
import sims.model.TypeDLC;
import sims.model.TypeTrait;

public class Test {

	public static void main(String[] args) {
		
		// DLC
		DLC jeuDeBase = new DLC(1, "Les Sims 4", LocalDate.parse("2014-09-05"), "C'est un jeu super cool !", "img/test", TypeDLC.BASE);
		DLC auTravail = new DLC(2, "Au Travail", LocalDate.parse("2015-04-02"), "Commencez des carrières délirantes !", "img/test", TypeDLC.EXTENSION);
		DLC loupsGarous = new DLC(3, "Loups-Garous", LocalDate.parse("2022-06-16"), "Devenez lycanthrope !", "img/test", TypeDLC.JEU);
		DLC saisons = new DLC(4, "Saisons", LocalDate.parse("2018-06-22"), "Les saisons font leur grand retour !", "img/test", TypeDLC.EXTENSION);
		
		System.out.println(jeuDeBase);
		
		// Compétence
		Competence competence = new Competence(1, "Cuisine", "Compétence indispensable pour se faire à manger", "img/test", 10, CategorieSim.ADULTE);
		competence.setDlc(jeuDeBase);
		
		System.out.println(competence);
		
		// Carriere
		RangCarriere rang1 = new RangCarriere(1, 1, "Assistant", 200, "Jouer aux échecs");
		rang1.setExigencesPourPromotion(new ArrayList<String>());
		Collections.addAll(rang1.getExigencesPourPromotion(), "Être au niveau 2 de la compétence Logique");
		
		RangCarriere rang2 = new RangCarriere(2, 2, "Scientifique fou", 1000, "Faire des expériences");
		rang2.setExigencesPourPromotion(new ArrayList<String>());
		Collections.addAll(rang2.getExigencesPourPromotion(), "Être au niveau 4 de la compétence Logique", "Être au niveau 2 de la compétence Jeux vidéo");
		
		Carriere carriereScientifique = new Carriere(1, "Scientifique", "C'est la carrière idéale pour faire des inventions", "img/test", null, TypeCarriere.ACTIVE);
		carriereScientifique.setDlc(auTravail);
		carriereScientifique.setRangs(new ArrayList<RangCarriere>());
		Collections.addAll(carriereScientifique.getRangs(), rang1, rang2);
		
		System.out.println(carriereScientifique);
		
		// Aspiration et Trait de récompense d'aspiration
		EtapeAspiration etape1 = new EtapeAspiration(1, 1, "Jeune loup");
		etape1.setSousEtapes(new ArrayList<String>());
		Collections.addAll(etape1.getSousEtapes(), "Devenir un Loup-garou");
		
		EtapeAspiration etape2 = new EtapeAspiration(2, 2, "Vieux loup");
		etape2.setSousEtapes(new ArrayList<String>());
		Collections.addAll(etape2.getSousEtapes(), "Atteindre le rang vieux loup", "Effrayer d'autres Sims");
		
		Aspiration loupGarouUltime = new Aspiration(1, "Loup-garou ultime", "Être un simple loup-garou ne vous suffit pas", "img/test", TypeAspiration.LYCANTHROPIE);
		loupGarouUltime.setEtapes(new ArrayList<EtapeAspiration>());
		Collections.addAll(loupGarouUltime.getEtapes(), etape1, etape2);
		loupGarouUltime.setDlc(loupsGarous);
		
		
		TraitAspiration presenceMenacante = new TraitAspiration(2, "Présence menaçante", "Ces sims effraient tout le monde (même Greg)", "img/test", CategorieSim.ADULTE);
		presenceMenacante.setDlc(loupsGarous);
		presenceMenacante.setAspiration(loupGarouUltime);
		
		loupGarouUltime.setTrait(presenceMenacante);
		
		System.out.println(loupGarouUltime);
		System.out.println(presenceMenacante);
		
		// Trait de caractère
		TraitDeCaractere genie = new TraitDeCaractere(1, "Génie", "Ces Sims sont des génies", "img/test", TypeTrait.BASE, CategorieSim.ADULTE);
		genie.setDlc(jeuDeBase);
		
		System.out.println(genie);
		
		// Trait Bonus
		TraitBonus collectionneur = new TraitBonus(3, "Collectionneur", "Ils trouvent des trésors plus facilement", "img/test", CategorieSim.ADULTE, TypeAspiration.NATURE);
		collectionneur.setDlc(jeuDeBase);
		
		System.out.println(collectionneur);
		
		// Trait à condition
		TraitACondition resistanceALaMaladie = new TraitACondition(4, "Résistance à la maladie", "Ces Sims ne tombent plus jamais malades", "img/test", TypeTrait.CARRIERE, CategorieSim.ADULTE, "Être au niveau 8 de la carrière Médecin");
		resistanceALaMaladie.setDlc(auTravail);
		
		System.out.println(resistanceALaMaladie);
		
		// Trait à effets
		TraitAEffets bebeDuPereHiver = new TraitAEffets(5, "Bébé du Père Hiver", "Le père de ce sim est le Père Hiver !", "img/test", TypeTrait.HERITAGE, CategorieSim.ADULTE, "Le Sim doit avoir le Père Hiver comme père");
		bebeDuPereHiver.setDlc(saisons);
		bebeDuPereHiver.setEffets(new ArrayList<String>());
		Collections.addAll(bebeDuPereHiver.getEffets(), "Augmente l'obtention des points de satisfaction de 50%");
		
		System.out.println(bebeDuPereHiver);
	}

}
