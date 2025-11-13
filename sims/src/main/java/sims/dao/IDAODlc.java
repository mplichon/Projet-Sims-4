package sims.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import sims.model.DLC;
import sims.model.TypeDLC;

public interface IDAODlc extends JpaRepository<DLC, Integer>{

	public List<DLC> findAllByType(TypeDLC type);
	
	@Query("SELECT d FROM DLC d ORDER BY d.dateSortie ASC")
	public List<DLC> findAllOrderByDateSortieAsc();
}
