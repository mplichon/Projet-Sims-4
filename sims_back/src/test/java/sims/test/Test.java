package sims.test;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;

import sims.model.Carriere;
import sims.model.CategorieSim;
import sims.model.Competence;
import sims.model.DLC;
import sims.model.RangCarriere;
import sims.model.TypeCarriere;
import sims.model.TypeDLC;

public class Test {

	public static void main(String[] args) {
		
		// DLC
		DLC jeuDeBase = new DLC(1, "Les Sims 4", LocalDate.parse("2014-09-05"), "C'est un jeu super cool !", "img/test", TypeDLC.BASE);
		DLC auTravail = new DLC(1, "Au Travail", LocalDate.parse("2015-04-02"), "Commencez des carrières délirantes !", "img/test", TypeDLC.EXTENSION);
		
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

	}

}
