package sims;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import sims.dao.IDAOAspiration;
import sims.dao.IDAOCarriere;
import sims.dao.IDAOCompetence;
import sims.dao.IDAODlc;
import sims.dao.IDAOTraitDeCaractere;

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
	}
}
