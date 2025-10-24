package sims.test;

import java.time.LocalDate;

import sims.model.DLC;
import sims.model.TypeDLC;

public class Test {

	public static void main(String[] args) {
		
		DLC jeuDeBase = new DLC("Les Sims 4", LocalDate.parse("2014-09-05"), "C'est un jeu super cool !", "img/test", TypeDLC.BASE);
		
		System.out.println(jeuDeBase);

	}

}
