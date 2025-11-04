package sims.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sims.model.Carriere;

public interface IDAOCarriere extends JpaRepository<Carriere, Integer>{
	
	@Query("SELECT DISTINCT c from Carriere c LEFT JOIN FETCH c.rangs r LEFT JOIN FETCH r.exigencesPourPromotion")
	public List<Carriere> findAllWithRangs();
	
	@Query("SELECT c from Carriere c LEFT JOIN FETCH c.rangs r LEFT JOIN FETCH r.exigencesPourPromotion WHERE c.id=:id")
	public List<Carriere> findByIdWithRangs(@Param("id") Integer idClient);
}
